import { View, Image, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Input from '../common/Input'
import Container from '../common/Container'
import CustomButton from '../common/CustomButton'
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE } from '../../constants/general'

const CreateComponent = () => {
    return (
        <View style={styles.container}>
            <Container>
                <Image source={{ uri: DEFAULT_IMAGE }} style={styles.imageView} width={150} height={150} />
                <Text style={styles.chooseText}>Choose image</Text>
                <Input label="First name" placeholder="Enter first name" />
                <Input label="Last name" placeholder="Enter last name" />
                <Input icon={<CountryPicker

                    withFlag
                    withFilter
                    withCountryNameButton={false}
                    withCallingCode
                    withEmoji
                    onSelect={() => { }}
                />}
                    iconPosition='left'
                    label="Phone number"
                    placeholder="Enter phone"
                    style={{ paddingLeft: 10 }} />

                <CustomButton primary title="Submit" />
            </Container>
        </View>
    )
}

export default CreateComponent