import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import themeStyle from '../../../assets/styles/theme.style';


const CardProduct = ({ product }) => {
    return (
        <View style={styles.container}>
            <View style={styles.start}>
                <Image style={styles.image} source={{ uri: "https://www.tiklagelsin.com/static/tgLogoRed-2e68a5b6e5c0f2f37c792597e8e820f6.png" }} />
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.titleSm} numberOfLines={1}>İçindekiler :  {product.contents.join(',')}</Text>
            </View>
            <View style={styles.end}>
                <Pressable style={[styles.btn, styles.plus]}>
                    <Text style={styles.btn.text}>+</Text>
                </Pressable>
                <Text style={styles.quantity}>3 adet</Text>
                <Pressable style={[styles.btn, styles.minus]}>
                    <Text style={styles.btn.text}>-</Text>
                </Pressable>
            </View>
        </View>
    );
};
export default CardProduct;

const styles = StyleSheet.create({
    start: {
        flex: 2
    },
    center: {
        flex: 5
    },
    end: {
        flex: 3,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    minus: {

    },
    plus: {

    },
    quantity: {
        color: 'white',
        fontSize: 10,
        marginHorizontal: 5
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 2,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: themeStyle.THEME_COLOR,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
        marginBottom: 5
    },
    titleSm: {
        color: 'white',
        fontSize: 10,
    },
    price: {
        padding: 5,
        fontSize: 10,
        backgroundColor: '#fff',
        color: '#000',
        fontWeight: 'bold',
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 1
    },
    btn: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        text: {
            textAlign: 'center',
            color: '#000',
            fontSize: 14,
            padding: 0
        }
    }
});