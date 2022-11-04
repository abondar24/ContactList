import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useContext, useRef, useEffect } from 'react'
import CreateComponent from '../../components/Create';
import { CONTACTS, DETAILS } from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import editContact from '../../context/actions/contacts/editContact';
import { GlobalContext } from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';
import countryCodes from '../../utils/countryCodes';

const Create = () => {
    const [form, setForm] = useState({});
    const { navigate, setOptions } = useNavigation();
    const [uploading, setIsUploading] = useState(false);
    const [localFile, setLocalFile] = useState(null);
    const { params } = useRoute();

    useEffect(() => {
        if (params?.contact) {


            setOptions({ title: 'Edit' });

            const {
                first_name: firstName,
                last_name: lastName,
                country_code: countryCode,
                phone_number: phoneNumber,
                is_favorite: isFavorite,
            } = params?.contact;

            setForm(prev => {
                return {
                    ...prev, firstName, lastName, phoneCode: countryCode, phoneNumber, isFavorite,
                };
            });

            const country = countryCodes.find(item => {
                return item.value.replace('+', '').replace(' ', '') === countryCode;
            });

            if (country) {
                setForm(prev => {
                    return {
                        ...prev, countryCode: country.key.toUpperCase(),
                    };
                });
            }


            if (params?.contact?.contact_picture) {
                setLocalFile(params?.contact.contact_picture);
            }

        }
    }, []);



    const { contactsDispatch,
        contactsState: {
            createContact: { error, loading },
        }
    } = useContext(GlobalContext);



    const onChangeText = ({ name, value }) => {
        setForm({ ...form, [name]: value });
    }

    const onSubmit = () => {
        if (params?.contact) {
            if (localFile?.size) {
                setIsUploading(true);
                uploadImage(localFile)((url) => {
                    setIsUploading(false);
                    editContact({ ...form, contactPicture: url }, params?.contact.id)(contactsDispatch)((item) => {
                        navigate(DETAILS, { item });
                    });

                })((error) => {
                    setIsUploading(false);
                });
            } else {
                editContact(form, params?.contact.id)(contactsDispatch)((item) => {
                    navigate(DETAILS, { item });
                });
            }
        } else {
            if (localFile?.size) {
                setIsUploading(true);
                uploadImage(localFile)((url) => {
                    setIsUploading(false);
                    createContact({ ...form, contactPicture: url })(contactsDispatch)(() => {
                        navigate(CONTACTS);
                    });

                })((error) => {

                    setIsUploading(false);
                });
            } else {
                createContact(form)(contactsDispatch)(() => {
                    navigate(CONTACTS);
                });
            }
        }
    };

    const toggleValueChange = () => {
        setForm({ ...form, "isFavorite": !form.isFavorite });
    };

    const sheetRef = useRef(null);

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
        setLocalFile(image)
    }



    return (
        <CreateComponent onChangeText={onChangeText}
            form={form}
            onSubmit={onSubmit}
            setForm={setForm}
            loading={loading || uploading}
            toggleValueChange={toggleValueChange}
            error={error}
            sheetRef={sheetRef}
            closeSheet={closeSheet}
            openSheet={openSheet}
            onFileSelected={onFileSelected}
            localFile={localFile}
        />
    );
};

export default Create;