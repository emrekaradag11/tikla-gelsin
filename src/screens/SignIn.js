import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/formcontrol/CustomInput';
import CustomButton from '../components/formcontrol/CustomButton';
import themeStyle from '../assets/styles/theme.style';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../store/reducers'

export default function SignIn() {

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const [validMail, setValidMail] = useState(true)
    const [mailErrorText, setMailErrorText] = useState('')

    const [validPass, setValidPass] = useState(true)
    const [passErrorText, setPassErrorText] = useState('')

    const [loginButtonStatus, setLoginButtonStatus] = useState(true)

    const navigation = useNavigation()
    const isLogin = useSelector(state => state.appReducer.isLogin)
    
    const dispatch = useDispatch()

    const onSignIn = async () => {
        // check email
        if (!reg.test(mail)) {
            setValidMail(false)
            setMailErrorText("Geçersiz E-Mail")
            return;
        }

        setValidMail(true)
        if (password.length < 7) {
            setValidPass(false)
            setPassErrorText("Şifre en az 7 karakter olmalıdır")
            return;
        }

        setValidPass(true)

        dispatch(setLogin(true))

        if (isLogin)
            navigation.navigate('ProductList')

    }

    useEffect(() => {
        setLoginButtonStatus((mail.length > 0 && password.length > 0) ? false : true)
    }, [mail, password])



    return (
        <>
            <View style={styles.top}>
                <Text style={styles.top.topText}>Tıkla Gelsin {isLogin}</Text>
            </View>
            <View style={styles.center}>
                <CustomInput placeholder="E-Mail" valid={validMail} value={mail} errorText={mailErrorText} setValue={setMail} />
                <CustomInput placeholder="Şifre" valid={validPass} value={password} errorText={passErrorText} setValue={setPassword} secureTextEntry={true} />
            </View>
            <View style={styles.bottom}>
                <CustomButton onPress={onSignIn} disabled={loginButtonStatus} />
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