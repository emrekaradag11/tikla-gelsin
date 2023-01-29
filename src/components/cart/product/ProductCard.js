import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import themeStyle from '../../../assets/styles/theme.style';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeCart } from '../../../store/reducers';
import Icon from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

const CardProduct = ({ product }) => {

    const dispatch = useDispatch()

    const handleIncrement = (id) => dispatch(incrementQuantity({
        id: id,
        quantity: 1,
    }))

    const handleDecrement = (id) => dispatch(decrementQuantity({
        id: id,
        quantity: 1,
    }))

    const handleRemoveCart = (id) => dispatch(removeCart(id))

    return (
        <View style={styles.container}>
            <View style={styles.start}>
                <Image style={styles.image} source={require(`./../../../assets/images/hamburger-menu.png`)} />
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.titleSm} numberOfLines={1}>İçindekiler :  {product.contents.join(',')}</Text>
            </View>
            <View style={styles.end}>
                <Pressable onPress={() => handleIncrement(product.id)} style={[styles.btn, styles.plus]}>
                    <Text style={styles.btn.text}><Icon name="plus" /></Text>
                </Pressable>
                <Text style={styles.quantity}>{product.quantity} adet</Text>
                {product.quantity <= 1 ? (
                    <Pressable onPress={() => handleRemoveCart(product.id)} style={[styles.btn, styles.minus]}>
                        <Text style={styles.btn.text}><Icon name="trash" /></Text>
                    </Pressable>
                ) : (
                    <Pressable onPress={() => handleDecrement(product.id)} style={[styles.btn, styles.minus]}>
                        <Text style={styles.btn.text}><Icon name="minus" /></Text>
                    </Pressable>
                )}
            </View>
        </View >
    );
};

CardProduct.propTypes = {
    product: PropTypes.object
}

CardProduct.defaultProps = {
    product: {}
}

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

export default CardProduct;