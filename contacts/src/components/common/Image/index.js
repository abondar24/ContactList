import { View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';

const ImageComponent = ({ src }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);


    const onLoadStart = () => {
        setIsLoading(true);
    };

    const onLoadEnd = () => {
        setIsLoading(false);
    };

    const onError = () => {
        setIsLoading(false);
        setHasError(true);
    };




    return (

        <View style={styles.imageContainer}>
            {isLoading && (<Text style={styles.loading}>Loading...</Text>)}
            <View>
                <Image style={styles.photo}
                    source={{ uri: src }}
                    onLoadStart={onLoadStart}
                    onLoadEnd={onLoadEnd}
                    onError={onError} />
            </View>
        </View>


    );
};

export default ImageComponent;