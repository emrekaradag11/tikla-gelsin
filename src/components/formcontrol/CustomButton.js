import { StyleSheet, View, Pressable, Text } from 'react-native';
import themeStyle from '../../assets/styles/theme.style';
import PropTypes from 'prop-types';

const CustomButton = ({ title, onPress, disabled }) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                disabled={disabled}
                style={styles.btn}>
                <Text style={styles.btn.text}>{title}</Text>
            </Pressable>
        </View>
    )
}

CustomButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
}

CustomButton.defaultProps = {
    title: "Button Title",
    onPress: () => { },
    disabled: true
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
        text: {
            textAlign: 'center',
            color: 'white',
        }
    }
})

export default CustomButton