import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import products from './../../shared/products.json'
import CustomButton from '../formcontrol/CustomButton';
import { emptyCart } from '../../store/reducers';

const ListPrice = () => {

    const cart = useSelector(state => state.appReducer.cart)
    const discountRate = 30;
    const dispatch = useDispatch()

    let total = 0;
    let discount = 0;
    let netTotal = 0;

    const checkout = () => dispatch(emptyCart())

    const cartProducts = products.filter(item => {
        return cart.find(cartItem => cartItem.id === item.id)
    }).map(item => {
        item.quantity = cart.find(cartItem => cartItem.id === item.id).quantity
        return item
    })

    for (const [key, value] of Object.entries(cartProducts)) {
        total += value.price * value.quantity
    }

    // 1'den fazla ürün varsa indirim uygula
    if (cart.length > 1)
        discount = (total * discountRate) / 100

    netTotal = total - discount

    return (
        <View style={styles.container}>
            <View style={styles.summary}>
                <Text style={styles.price}>Fiyat : {total.toFixed(2)} TL</Text>
                {discount > 0 && <Text style={styles.discount}>İndirim : {discount.toFixed(2)} TL</Text>}
                <View style={styles.totalView}>
                    <Text style={styles.total}>Toplam : {netTotal.toFixed(2)} TL</Text>
                </View>
            </View>
            <View>
                <CustomButton onPress={checkout} disabled={false} title={`${netTotal.toFixed(2)} TL Satın Al`} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'space-between',
        justifyContent: 'center',
        marginBottom: 10,
    },
    price: {
        fontSize: 20
    },
    discount: {
        fontSize: 20,
        marginTop: 10
    },
    total: {
        fontSize: 20,
        width: '100%'
    },
    summary: {
        paddingHorizontal: 30,
        marginBottom: 20
    },
    totalView: {
        borderTopColor: '#dedede',
        borderTopWidth: 2,
        paddingTop: 10,
        marginTop: 10
    }
})

export default ListPrice