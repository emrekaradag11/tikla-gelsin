import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import themeStyle from '../../assets/styles/theme.style';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'

const CardBtn = () => {

    const navigation = useNavigation()
    const handleGoToBasket = () => navigation.navigate('Cart')
    const total = useSelector(state => state.appReducer.cart)

    return (
        <Pressable style={styles.end.btn} onPress={handleGoToBasket}>
            <Text style={styles.end.btn.text}> <Icon name="shopping-basket" style={styles.icon} /> {total.length}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
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

export default CardBtn;