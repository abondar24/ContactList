import storage from '@react-native-firebase/storage'

export default (file) => (onSuccess) => (onError) => {

    const path = `contact-picutres/user/555/  ${file.modificationDate || file.creationDate || file.path}`;
    const ref = storage().ref(path);
    const task = ref.putFile(file.path);

    task.then(async () => {
        const url = await ref.getDownloadURL();
        onSuccess(url);
    }).catch(error => {
        onError(error)
    });
};