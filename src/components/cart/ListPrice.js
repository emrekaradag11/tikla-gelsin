import { StyleSheet, Text, View } from 'react-native';

function ListPrice() {
    return (
        <View style={styles.container}>
            <Text style={styles.price}>Fiyat : 10 TL</Text>
            <Text style={styles.discount}>İndirim : 5 TL</Text>
            <View style={styles.totalView}>
                <Text style={styles.total}>Toplam : 20 TL</Text>
            </View>
        </View>
    )
}

export default ListPrice

const styles = StyleSheet.create({
    container: {
        alignContent: 'space-between',
        justifyContent: 'center',
        marginBottom: 30,
        paddingHorizontal: 20
    },
    price: {
        fontSize: 30
    },
    discount: {
        fontSize: 30,
        marginTop: 10
    },
    total: {
        fontSize: 30,
        width: '100%'
    },
    totalView: {
        borderTopColor: '#dedede',
        borderTopWidth: 2,
        paddingTop: 10,
        marginTop: 10
    }
})