import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const SearchBar = ({ value, setValue }) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar} >
                <Icon name="search" size={20} style={styles.icon} />
                <TextInput
                    testID="search-test"
                    value={value}
                    onChangeText={setValue}
                    style={styles.input}
                    placeholder="Arama Yap"
                    placeholderTextColor='#000'
                />
            </View>
        </View> 
    );
};

SearchBar.propTypes = {
    value: PropTypes.string,
    setValue : PropTypes.func
}

SearchBar.defaultProps = {
    value: "",
    setValue :  () => {}
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    searchBar: {
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 50,
        alignItems: "center",
    },
    input: {
        fontSize: 15,
        marginHorizontal: 5,
        width: "90%",
        color: '#000',
    },
    icon: {
        marginLeft: 0,
        marginRight: 10,
        color: '#000'
    },
});

export default SearchBar;