import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import DetailsComponent from '../../components/Details';
import { TouchableOpacity, View } from 'react-native';
import Icon from '../../components/common/Icon';
import colors from '../../assets/themes/colors';
const Details = () => {

    const { params: { item = {} } = {} } = useRoute();


    const { setOptions } = useNavigation();


    useEffect(() => {
        if (item) {
            setOptions({
                title: item.first_name + ' ' + item.last_name,
                headerRight: () => {
                    return (
                        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                            <TouchableOpacity>
                                <Icon
                                    name={item.is_favorite ? 'star' : "star-border"}
                                    type='material'
                                    size={21}
                                    color={colors.grey}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingLeft: 10 }}>
                                <Icon
                                    name='delete'
                                    type='material'
                                    color={colors.grey}
                                    size={21}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }
            })
        }
    }, [item]);

    return (
        <DetailsComponent contact={item} />
    );
};

export default Details;