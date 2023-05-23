import React from 'react';
import { View, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import Item from '../components/Item';
import Cursos from '../mocks/mocks';

export default function ClientesScreen({ navigation }) {

    const abrirDetalhes = (dados) => {
        navigation.navigate('Cursos', { dados });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Cursos}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item)}>
                    <Item item={item} />
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
    item: {
        flex: 1,
        flexDirection: 'row',
    },
});