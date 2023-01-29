import { StyleSheet, Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const CustomInput = ({ value, setValue, placeholder, errorText, secureTextEntry, valid }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={[styles.input, (!valid ? styles.input.isDanger : null)]}
                secureTextEntry={secureTextEntry}
            />
            {!valid && <Text style={styles.text}>{errorText}</Text>}
        </View>
    )
}

CustomInput.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    placeholder: PropTypes.string,
    errorText: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    valid: PropTypes.bool
}

CustomInput.defaultProps = {
    title: "",
    setValue: () => { },
    placeholder: "Giriniz",
    errorText: "Geçersiz",
    secureTextEntry: false,
    valid: true
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 30
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 70,
        paddingHorizontal: 20,
        paddingVertical: 14,
        marginVertical: 5,
        isDanger: {
            borderColor: 'red',
        }
    },
    text: {
        color: 'red',
        textAlign: 'center'
    }
})

export default CustomInput