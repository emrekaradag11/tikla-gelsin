import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import themeStyle from '../../assets/styles/theme.style';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/reducers'
import CartBtn from './CartBtn'
import PropTypes from 'prop-types';

const Header = ({ title }) => {

    const dispatch = useDispatch()
    const handleLogout = () => dispatch(setLogin(false))

    return (
        <View style={styles.container}>
            <Text style={styles.start}>
                <Pressable onPress={handleLogout}>
                    <Text> <Icon name="log-out" style={styles.icon} /></Text>
                </Pressable>
            </Text>
            <Text style={styles.center}>{title}</Text>
            <View style={styles.end}>
                <CartBtn />
            </View>
        </View>
    );
};

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: "Header Title"
}

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
    },
    icon: {
        fontSize: 20,
        color: themeStyle.THEME_COLOR
    },
});

export default Header;