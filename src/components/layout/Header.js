import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import themeStyle from '../../assets/styles/theme.style';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../store/reducers'
import { useNavigation } from '@react-navigation/native'

const Header = ({ title }) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const handleLogout = () => dispatch(setLogin(false))
    const handleGoToBasket = () => navigation.navigate('Cart')
    
    const total = useSelector(state => state.appReducer.cart)

    return (
        <View style={styles.container}>
            <Text style={styles.start}>
                <Pressable onPress={handleLogout}>
                    <Text> <Icon name="log-out" style={styles.icon} /></Text>
                </Pressable>
            </Text>
            <Text style={styles.center}>{title}</Text>
            <View style={styles.end}>
                <Pressable style={styles.end.btn} onPress={handleGoToBasket}>
                    <Text style={styles.end.btn.text}> <Icon name="shopping-basket" style={styles.icon} /> {total.length}</Text>
                </Pressable>
            </View>
        </View>
    );
};
export default Header;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    start: {
        flex: 1
    },
    center: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: themeStyle.THEME_COLOR
    },
    end: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        btn: {
            flex: 1 / 3,
            text: {
                textAlign: 'right',
                fontSize: 12,
                color: themeStyle.THEME_COLOR,
            }
        }
    },
    icon: {
        fontSize: 20,
        color: themeStyle.THEME_COLOR
    },
});