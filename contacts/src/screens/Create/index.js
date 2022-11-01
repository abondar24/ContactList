import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext, useRef } from 'react'
import CreateComponent from '../../components/Create';
import { CONTACTS } from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';

const Create = () => {
    const [form, setForm] = useState({});
    const { navigate } = useNavigation();
    const [uploading, setIsUploading] = useState(false);

    const { contactsDispatch,
        contactsState: {
            createContact: { error, loading },
        }
    } = useContext(GlobalContext);

    const [localFile, setLocalFile] = useState(null);

    const onChangeText = ({ name, value }) => {
        setForm({ ...form, [name]: value });
    }

    const onSubmit = () => {


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
        }


    }

    const toggleValueChange = () => {
        setForm({ ...form, "isFavorite": !form.isFavorite });
    };

    const sheetRef = useRef(null)

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