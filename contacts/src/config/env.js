import { DEV_BACKEND_URI, PROD_BACKEND_URI } from '@env'

const devEnvVars = {
    BACKEND_URI: DEV_BACKEND_URI,
};

const prodEnvVars = {
    BACKEND_URI: PROD_BACKEND_URI,
};


export default __DEV__ ? devEnvVars : prodEnvVars