import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import ImageComponent from '../common/Image'
import colors from '../../assets/themes/colors'
import Icon from '../common/Icon'
import { CREATE } from '../../constants/routeNames'
import CustomButton from '../common/CustomButton'
import { DEFAULT_IMAGE } from '../../constants/general'
import ImagePicker from '../common/ ImagePicker'

const DetailsComponent = ({ contact, localFile, openSheet, sheetRef, onFileSelected, uploadingImage, uploadSuccess }) => {
    const { navigate } = useNavigation();

    const {
        contact_picture,
        first_name,
        country_code,
        phone_number,
        last_name,
    } = contact;


    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {(contact_picture || uploadSuccess) &&
                    (<ImageComponent src={contact_picture || localFile?.path} />)}
                {!contact_picture && !uploadSuccess && (
                    <View style={styles.imageView}>
                        <Image
                            source={{ uri: localFile?.path || DEFAULT_IMAGE }}
                            style={styles.image}
                            width={150}
                            height={150}
                        />
                        <TouchableOpacity onPress={openSheet}>

                            <Text style={styles.chooseText}>
                                {' '}
                                {uploadingImage ? 'Uploading image' : 'Choose image'}
                            </Text>
                        </TouchableOpacity>

                    </View>
                )}

                <View style={styles.content}>
                    <Text style={styles.names}>{first_name + ' ' + last_name}</Text>
                </View>
                <View style={styles.hrLine} />

                <View style={styles.topCallOptions}>
                    <TouchableOpacity style={styles.topCallOption}>
                        <Icon type='ionicon'
                            name='call-outline'
                            color={colors.primary}
                            size={27}
                        />
                        <Text style={styles.middleText}>
                            Call
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCallOption}>
                        <Icon type='materialCommunity'
                            name='message-text'
                            color={colors.primary}
                            size={27}
                        />
                        <Text style={styles.middleText}>
                            Text
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCallOption}>
                        <Icon type='materialCommunity'
                            name='video'
                            color={colors.primary}
                            size={27}
                        />
                        <Text style={styles.middleText}>
                            Video
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleCallOptions}>
                    <Icon type='ionicon'
                        name='call-outline'
                        color={colors.grey}
                        size={27}
                    />
                    <View style={styles.phoneNumber}>
                        <Text>{'+' + country_code + ' ' + phone_number}</Text>
                        <Text>Mobile</Text>
                    </View>


                    <View style={styles.misc}>
                        <Icon type='materialCommunity'
                            name='video'
                            color={colors.primary}
                            size={27}
                        />
                        <Icon type='materialCommunity'
                            name='message-text'
                            color={colors.primary}
                            size={27}
                            style={[styles.msgIcon]}
                        />
                    </View>
                </View>
                <CustomButton
                    style={styles.editButton}
                    primary
                    title='Edit Contact'
                    onPress={
                        () => {
                            navigate(CREATE, { contact, editing: true });
                        }
                    }
                />
            </View>
            <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />
        </ScrollView>
    )
}

export default DetailsComponent;