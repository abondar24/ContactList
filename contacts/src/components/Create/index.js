import { View, Image, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Input from '../common/Input'
import Container from '../common/Container'
import CustomButton from '../common/CustomButton'
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE } from '../../constants/general'

const CreateComponent = ({ onChangeText, form, onSubmit, setForm, loading, error }) => {
    return (
        <View style={styles.container}>
            <Container>
                <Image source={{ uri: DEFAULT_IMAGE }} style={styles.imageView} width={150} height={150} />
                <Text style={styles.chooseText}>Choose image</Text>
                <Input
                    label="First name"
                    placeholder="Enter first name"
                    error={error?.first_name?.[0]}
                    onChangeText={(value) => {
                        onChangeText({ name: 'firstName', value: value })
                    }} />
                <Input
                    label="Last name"
                    placeholder="Enter last name"
                    error={error?.last_name?.[0]}
                    onChangeText={(value) => {
                        onChangeText({ name: 'lastName', value: value })
                    }} />
                <Input icon={<CountryPicker
                    countryCode={form.countryCode || undefined}
                    withFlag
                    withFilter
                    withCountryNameButton={false}
                    withCallingCode
                    withCallingCodeButton
                    withEmoji
                    onSelect={(val) => {
                        const phoneCode = val.callingCode[0];
                        const cCode = val.cca2;
                        setForm({ ...form, countryCode: cCode, phoneCode });
                    }}
                />}
                    iconPosition='left'
                    onChangeText={(value) => {
                        onChangeText({ name: 'phoneNumber', value: value })
                    }}
                    error={error?.phone_number?.[0]}
                    label="Phone number"
                    placeholder="Enter phone"
                    style={{ paddingLeft: 10 }} />

                <CustomButton
                    primary
                    loading={loading}
                    disabled={loading}
                    title="Submit"
                    onPress={onSubmit} />
            </Container>
        </View>
    )
}

export default CreateComponent