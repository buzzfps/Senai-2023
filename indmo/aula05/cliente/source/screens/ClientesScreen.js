import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Clientes from '../mocks/clientesMocks'
import ItemLista from '../components/ItemLista';

export default function ClientesScreen({ navigation }) {

    const abrirDetalhes = (dados) =>{
        navigation.navigate('Detalhes',{dados});
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Clientes}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item)}>
                        <ItemLista item={item} />
                </TouchableOpacity>}
            />
        </View >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item:{
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        margin: 10,
    },
    img:{
        width: 100,
        height: 100,
        margin: '5',
    }

});