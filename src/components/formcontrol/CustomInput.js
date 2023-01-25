import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function CustomInput({ value, setValue, placeholder = "Giriniz",errorText = "Geçersiz",secureTextEntry=false,valid=true }) {
    return (
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                style={[styles.input,(!valid ? styles.input.isDanger : null)]} 
                secureTextEntry={secureTextEntry}
                />
                {!valid ? (
                    <Text style={styles.text}>{errorText}</Text>
                ) : null }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width : '100%',
        paddingHorizontal : 30
    },
    input : {
        backgroundColor : 'white',
        borderColor : '#e8e8e8',
        borderWidth : 1,
        borderRadius : 70,
        paddingHorizontal : 20,
        paddingVertical : 14,
        marginVertical : 5,
        isDanger : {
            borderColor : 'red',
        }
    },
    text : {
        color : 'red',
        textAlign : 'center'
    }
})