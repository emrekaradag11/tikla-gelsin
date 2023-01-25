import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/formcontrol/CustomInput';
import CustomButton from '../components/formcontrol/CustomButton';
import themeStyle from '../assets/styles/theme.style';

export default function SignIn() {
    return (
        <>
            <View style={styles.top}>
                <Text style={styles.top.topText}>Tıkla Gelsin</Text>
            </View>
            <View style={styles.center}>
                <CustomInput placeholder="E-Mail" />
                <CustomInput placeholder="Şifre" secureTextEntry={true} />
            </View>
            <View style={styles.bottom}>
                <CustomButton />
            </View>
        </>
    );
} 

const styles = StyleSheet.create({
    top: {
        flex: 2,
        backgroundColor: themeStyle.THEME_COLOR,
        alignItems: 'center',
        justifyContent: 'flex-end',
        topText: {
            color: "white",
            marginBottom: 10,
            fontSize: 30
        },
    },
    center: {
        flex: 4,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    }
})