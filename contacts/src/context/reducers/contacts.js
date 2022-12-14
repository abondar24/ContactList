import { GET_CONTACTS_FAIL, GET_CONTACTS_LOADING, GET_CONTACTS_SUCCESS, CREATE_CONTACT_FAIL, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESS, DELETE_CONTACT_FAIL, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_LOADING, EDIT_CONTACT_FAIL, EDIT_CONTACT_LOADING, EDIT_CONTACT_SUCCESS } from "../../constants/actionTypes";
import getContacts from "../actions/contacts/getContacts";

const contacts = (state, { type, payload }) => {

    switch (type) {
        case GET_CONTACTS_LOADING:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts,
                    loading: true,
                    error: null,
                }
            };

        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    data: payload,
                    error: null,
                }
            };

        case GET_CONTACTS_FAIL:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    error: payload,
                }
            };

        case CREATE_CONTACT_LOADING:
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: true,
                    error: null,
                    data: payload
                }
            };

        case CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: false,
                    error: null,
                    data: payload
                },
                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    data: [payload, ...state.getContacts.data],
                    error: null,
                }
            };

        case CREATE_CONTACT_FAIL:
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: false,
                    error: payload
                }
            };

        case DELETE_CONTACT_LOADING:
            return {
                ...state,
                deleteContact: {
                    ...state.deleteContact,
                    loading: true,
                    error: null,
                },
            };

        case DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                deleteContact: {
                    ...state.deleteContact,
                    loading: false,
                    error: null,
                },
                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    data: state.getContacts.data.filter(item => item.id != payload),
                    error: null,
                }
            };

        case DELETE_CONTACT_FAIL:
            return {
                ...state,
                deleteContact: {
                    ...state.deleteContact,
                    loading: false,
                    error: payload,
                },
            };


        case EDIT_CONTACT_FAIL:
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: false,
                    error: null
                },
            };


        case EDIT_CONTACT_LOADING:
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: true,
                    error: null
                },
            };

        case EDIT_CONTACT_SUCCESS:
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: false,
                    error: null
                },
                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    data: state.getContacts.data.map((item) => {
                        if (item.id === payload.id) {
                            return payload;
                        } else {
                            return item;
                        }
                    }),
                    error: null,
                }
            };



        default:
            return state;
    }
};


export default contacts;