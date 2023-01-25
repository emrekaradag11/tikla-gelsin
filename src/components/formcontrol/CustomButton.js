import { StyleSheet, View, Pressable, Text } from 'react-native';
import themeStyle from '../../assets/styles/theme.style';

export default function CustomButton({ title = "Buton", onPress,disabled=true }) {
    return (
        <View style={styles.container}>
            <Pressable 
                onPress={onPress}
                disabled={disabled}
                style={styles.btn}>
                <Text style={styles.btn.text}>Giriş Yap</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 30
    },
    btn: {
        backgroundColor: themeStyle.THEME_COLOR,
        borderRadius: 70,
        paddingHorizontal: 20,
        paddingVertical: 14,
        marginVertical: 5,
        text : {
            textAlign : 'center',
            color : 'white',
        }
    }
})