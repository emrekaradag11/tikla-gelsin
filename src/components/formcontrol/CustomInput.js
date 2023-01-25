import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function CustomInput({ value, setValue, placeholder = "Giriniz",secureTextEntry=false }) {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder} 
                style={styles.input} 
                onChangeText={setValue}
                value={value}
                secureTextEntry={secureTextEntry}
                />
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
    }
})