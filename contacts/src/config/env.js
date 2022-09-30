import { BACKEND_URI } from '@env'

const devEnvVars = {
    BACKEND_URI,
};

const prodEnvVars = {
    BACKEND_URI,
};


export default __DEV__ ? devEnvVars : prodEnvVars