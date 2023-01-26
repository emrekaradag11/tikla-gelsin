import { StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import products from './../shared/products.json'
import ProductCard from '../components/product/ProductCard';
import SearchBar from '../components/layout/SearchBar';
import Header from '../components/layout/Header';
import { useEffect, useState } from 'react';

export default function ProductList() {

    const [search, setSearch] = useState('')
    const [data, setData] = useState(products)

    const renderProduct = ({ item }) => (
        <ProductCard product={item} />
    );

    useEffect(() => {

        if (search.length > 0) {
            setData(products.filter(item => {
                return (item.title.toLowerCase().indexOf(search.toLowerCase()) > -1 || item.contents.join(',').toLowerCase().indexOf(search.toLowerCase()) > -1)
            }));
        }

        else
            setData(products);

    }, [search])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="Ürün Listesi" />
                <SearchBar value={search} setValue={setSearch} />
                <FlatList
                    data={data}
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