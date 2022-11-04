import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from '../config/env'
import { navigate } from '../navigations/SideMenu/RootNavigator';
import LOGOUT from '../constants/routeNames';

let headers = {};

const axiosInstance = axios.create({
    baseURL: env.BACKEND_URI,
    headers,
});

axiosInstance.interceptors.request.use(
    async (config) => {


        const token = await AsyncStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(response => new Promise((resolve, reject) => {
    resolve(response);
}, error => {
    if (!error.response) {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }

    if (error.status === 403) {
        navigate(LOGOUT, { tokenExpired: true });
    } else {
        return new Promise((resolve, reject) => {
            reject(error);
        });

    }
}));


export default axiosInstance;