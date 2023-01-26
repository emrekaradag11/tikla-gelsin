import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import themeStyle from '../../assets/styles/theme.style';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, incrementQuantity } from '../../store/reducers'

const CardProduct = ({ product }) => {

    const cart = useSelector(state => state.appReducer.cart)
    const dispatch = useDispatch()
    const handleAddCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            dispatch(incrementQuantity({
                id: id,
                quantity: 1,
            }))
        } else {
            dispatch(addCart({
                id: id,
                quantity: 1,
            }))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.start}>
                <Image style={styles.image} source={require(`./../../assets/images/hamburger-menu.png`)} />
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.titleSm} numberOfLines={1}>İçindekiler :  {product.contents.join(',')}</Text>
            </View>
            <View style={styles.end}>
                <Pressable
                    onPress={() => handleAddCart(product.id)}
                    style={styles.btn}>
                    <Text style={styles.btn.text}>{product.price} TL Sepete Ekle</Text>
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
        flex: 3
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
        paddingHorizontal: 5,
        paddingVertical: 10,
        text: {
            textAlign: 'center',
            color: '#000',
            fontSize: 8,
            padding: 0
        }
    }
});