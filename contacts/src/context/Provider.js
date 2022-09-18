import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import contacts from './reducers/contacts';
import authStateInitial from './inittiasStates/authStateInitial';
import contactsStateInitial from './inittiasStates/contactsStateInitial';


export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [authState,authDispatch] = useReducer(auth,authStateInitial);
    const [contactsState,contactsDispatch] = useReducer(contacts,contactsStateInitial);
    

    return (
    <GlobalContext.Provider value={{authState,contactsState,authDispatch,contactsDispatch}}>
        {children}
    </GlobalContext.Provider>

    )
}


export default GlobalProvider;