import React from 'react';
import { View, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import Item from '../components/listar';
import Cursos from '../mocks/mocks';

export default function ClientesScreen({ navigation, route }) {
    const dados = route.params.dados.cursos

    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={dados}
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