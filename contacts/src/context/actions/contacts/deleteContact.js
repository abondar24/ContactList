import axiosInstance from "../../../helpers/axiosIntstance";
import { DELETE_CONTACT_FAIL, DELETE_CONTACT_LOADING, DELETE_CONTACT_SUCCESS } from "../../../constants/actionTypes";


export default (id) => (dispatch) => (onSuccess) => {


    dispatch({
        type: DELETE_CONTACT_LOADING,
    });


    axiosInstance.delete(`/contacts/${id}`).then(() => {
        dispatch({
            type: DELETE_CONTACT_SUCCESS,
            payload: id,
        });

        onSuccess();
    })
        .catch(err => {
            dispatch({
                type: DELETE_CONTACT_FAIL,
                payload: err.response ? err.response.data : { error: "Unknown error" },
            });
        });
};