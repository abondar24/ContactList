import { GET_CONTACTS_LOADING, GET_CONTACTS_FAIL, GET_CONTACTS_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosIntstance";

export default () => (dispatch) => {
    dispatch({
        type: GET_CONTACTS_LOADING,
    });

    axiosInstance.get('/contacts/').then(res => {
        dispatch({
            type: GET_CONTACTS_SUCCESS,
            payload: res.data,
        });
    })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_CONTACTS_FAIL,
                payload: err.response ? err.response.data : { error: "Unknown error" },
            });
        });
};