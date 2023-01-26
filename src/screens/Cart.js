import { StyleSheet, SafeAreaView, FlatList, StatusBar, View } from 'react-native';
import ProductCard from '../components/cart/product/ProductCard';
import products from './../shared/products.json'
import ListPrice from '../components/cart/ListPrice';
import CustomButton from '../components/formcontrol/CustomButton';

export default function ProductList() {

    const renderProduct = ({ item }) => (
        <ProductCard product={item} />
    );

    return (
        <>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                    columnWrapperStyle={styles.row}
                    keyExtractor={item => item.id}
                    style={styles.flatlist}
                />
                <View style={styles.ListPrice}>
                    <ListPrice />
                </View>
                <View style={styles.bottom}>
                    <CustomButton title="40 TL Satın Al" />
                </View>
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

    },
    bottom: {

    }
})