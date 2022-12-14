import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react'
import DetailsComponent from '../../components/Details';
import { TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import Icon from '../../components/common/Icon';
import colors from '../../assets/themes/colors';
import { GlobalContext } from '../../context/Provider';
import deleteContact from '../../context/actions/contacts/deleteContact';
import { navigate } from '../../navigations/SideMenu/RootNavigator';
import { CONTACTS } from '../../constants/routeNames';
import uploadImage from '../../helpers/uploadImage';
import editContact from '../../context/actions/contacts/editContact';

const Details = () => {

    const { params: { item = {} } = {} } = useRoute();


    const { setOptions } = useNavigation();


    const { contactsDispatch,
        contactsState: {
            deleteContact: { data, loading, error },
        }
    } = useContext(GlobalContext);

    useEffect(() => {
        if (item) {
            setOptions({
                title: item.first_name + ' ' + item.last_name,
                headerRight: () => {
                    return (
                        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                            <TouchableOpacity>
                                <Icon
                                    name={item.is_favorite ? 'star' : "star-border"}
                                    type='material'
                                    size={21}
                                    color={colors.grey}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => {
                                Alert.alert('Delete!', 'Are you sure you want to delete ' + item.first_name + ' ' + item.last_name, [
                                    {
                                        text: 'Cancel',
                                        onPress: () => { },
                                    },
                                    {
                                        text: 'Ok',
                                        onPress: () => {
                                            deleteContact(item.id)(contactsDispatch)(() => {
                                                navigate(CONTACTS);

                                            });
                                        },
                                    },
                                ]);

                            }}>
                                {loading ? (<ActivityIndicator color={colors.primary} size='small' />) :
                                    (
                                        <Icon
                                            name='delete'
                                            type='material'
                                            color={colors.grey}
                                            size={21}
                                        />
                                    )}

                            </TouchableOpacity>
                        </View>
                    )
                }
            })
        }
    }, [item, loading]);

    const sheetRef = useRef(null);
    const [localFile, setLocalFile] = useState(null);
    const [uploading, setIsUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    }

    const openSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.open();
        }
    }

    const onFileSelected = (image) => {
        closeSheet();
        setLocalFile(image);
        setIsUploading(true);

        const {
            first_name: firstName,
            last_name: lastName,
            country_code: phoneCode,
            phone_number: phoneNumber,
            is_favorite: isFavorite
        } = item;

        uploadImage(image)((url) => {
            setIsUploading(false);
            editContact({ firstName, lastName, isFavorite, phoneCode, phoneNumber, contactPicture: url }, item.id)
                (contactsDispatch)((item) => {
                    setIsUploading(false);
                    setUploadSuccess(true);
                });

        })((error) => {

            setIsUploading(false);
        });
    }


    return (
        <DetailsComponent contact={item}
            sheetRef={sheetRef}
            onFileSelected={onFileSelected}
            openSheet={openSheet}
            localFile={localFile}
            uploadingImage={uploading}
            uploadSuccess={uploadSuccess}
        />
    );
};

export default Details;