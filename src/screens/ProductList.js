import { StyleSheet, Text, View } from 'react-native';
import themeStyle from '../assets/styles/theme.style';

export default function ProductList() {
    
    return (
        <>
            <View style={styles.top}>
                <Text style={styles.top.topText}>other page</Text>
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
})