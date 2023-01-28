import { StyleSheet, SafeAreaView, FlatList, StatusBar, View, Text } from 'react-native';
import ProductCard from '../components/cart/product/ProductCard';
import products from './../shared/products.json'
import ListPrice from '../components/cart/ListPrice';
import CustomButton from '../components/formcontrol/CustomButton';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'

export default function ProductList() {

    const navigation = useNavigation()
    const cart = useSelector(state => state.appReducer.cart)

    const cartProducts = products.filter(item => {
        return cart.find(cartItem => cartItem.id === item.id)
    }).map(item => {
        item.quantity = cart.find(cartItem => cartItem.id === item.id).quantity
        return item
    })

    const handleLocate = () => navigation.navigate('ProductList')
    const renderProduct = ({ item }) => <ProductCard product={item} />;

    return (
        <>
            <SafeAreaView style={styles.container}>
                {cartProducts.length ? (
                    <>
                        <FlatList
                            data={cartProducts}
                            renderItem={renderProduct}
                            columnWrapperStyle={styles.row}
                            keyExtractor={item => item.id}
                            style={styles.flatlist} />
                        <View style={styles.ListPrice}>
                            <ListPrice />
                        </View>
                    </>
                ) : (
                    <>
                        <Text style={styles.text}>Sepetiniz Boş</Text>
                        <CustomButton onPress={handleLocate} disabled={false} title="Hemen alışverişe başla" />
                    </>

                )}
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignContent: 'space-between',
        justifyContent: 'center',
    },
    flatlist: {
        flex: 1,
        row: {
            justifyContent: "space-around"
        }
    },
    ListPrice: {
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    }
})