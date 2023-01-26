import { StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import products from './../shared/products.json'
import ProductCard from '../components/product/ProductCard';
import SearchBar from '../components/layout/SearchBar';
import Header from '../components/layout/Header';

export default function ProductList() {

    const renderProduct = ({ item }) => (
        <ProductCard product={item}/>
    );

    return (
        <> 
            <SafeAreaView style={styles.container}>
                <Header title="Ürün Listesi" />
                <SearchBar />
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                    columnWrapperStyle={styles.row} 
                    keyExtractor={item => item.id}
                    style={styles.flatlist}
                />
            </SafeAreaView>
        </>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    flatlist: {
        row: {
            flex: 1,
            justifyContent: "space-around"
        }
    },
})