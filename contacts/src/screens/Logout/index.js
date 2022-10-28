import { ActivityIndicator } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/Provider';
import logout from '../../context/actions/auth/logout';

const Logout = () => {

    const {
        authDispatch,
        authState: { error, loading }
    } = useContext(GlobalContext);


    useEffect(() => {
        logout()(authDispatch)
    }, []);
    return (
        <ActivityIndicator />
    )
}

export default Logout