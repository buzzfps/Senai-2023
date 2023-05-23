import React from 'react';
import { View, StyleSheet, Text} from 'react-native';


export default function DetalhesCursosScreen({ route }) {
    const item = route.params.dados.detalhes
    console.log(item)
    return (
        <View style={styles.container}>
            <View style={styles.div}>
                <Text style={styles.nomecurso}>{item.nomecurso}</Text>
                <Text style={styles.ensino}>{item.ensino}</Text>
                <Text style={styles.carga}>{item.carga}</Text>
            </View>
            <View style={styles.divresumo}>
                <Text style={styles.tituloresumo}>Resumo</Text>
                <Text style={styles.resumo}>{item.resumo}</Text>
            </View>
            <View style={styles.divrequisito}>
                <Text style={styles.titulorequisito}>Requisito</Text>
                <Text style={styles.requisito}>{item.requisito}</Text>
            </View>
            <View style={styles.detalhes}>
                <Text style={styles.text}>{item.unidade}</Text>
                <Text style={styles.text}>{item.telefone}</Text>
                <Text style={styles.text}>{item.email}</Text>
                <Text style={styles.text}>{item.valor}</Text>
            </View>
            <View style={styles.matricula}>
                <Text style={styles.textmatricula}>Faça sua Matricula:</Text>
                <Text style={styles.textmaticulalink}>{item.matricula}</Text>
            </View>

            
        </View >);
};

const styles = StyleSheet.create({
    div:{
        width: '100%',
        height: '100',
        backgroundColor: '#FFFF',
        padding: 12,
        borderRadius: 23,
        margin: 4,
        borderBottomColor: '#ff2200',
        borderBottomWidth: 1,
    },
    nomecurso:{
        fontSize: 29,
        paddingLeft: 20,
        gap: 20,
    },
    carga:{
        fontSize: 15,
        paddingLeft: 20,
        gap: 20,
        borderRadius: 10,
    },
    ensino:{
        fontSize: 20,
        paddingLeft: 20,
        gap: 20,
    },
    divresumo:{
        width: '100%',
        height: '100',
        backgroundColor: '#FFFF',
        marginTop: 20,
        padding: 12,
        borderRadius: 23,
        borderBottomColor: '#ff2200',
        borderBottomWidth: 1,
    },
    divrequisito:{
        width: '100%',
        height: '100',
        backgroundColor: '#FFFF',
        marginTop: 20,
        padding: 12,
        borderRadius: 23,
        borderBottomColor: '#ff2200',
        borderBottomWidth: 1,
    },
    tituloresumo:{
        fontSize: 25,
        paddingLeft: 20,
    },
    titulorequisito:{
        fontSize: 25,
        paddingLeft: 20,
    },
    resumo:{
        fontSize: 16,
        paddingTop: 20,
        paddingLeft: 20,
        gap: 20,
    },
    requisito:{
        fontSize: 16,
        paddingTop: 20,
        paddingLeft: 20,
        gap: 20,
    },
    text: {
        fontSize: 13,
        paddingTop: 1,
        paddingLeft: 20,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        padding: 5,
        borderRadius: 23,
        borderBottomColor: '#ff2200',
        borderBottomWidth: 1,
    },
    detalhes:{
        width: '100%',
        height: '50',
        backgroundColor: '#FFFF',
        padding: 12,
        marginTop: 20,
        fontSize: 9,
        borderBottomColor: '#ff2200',
        borderBottomWidth: 1,
    },
    matricula:{
        width: '100%',
        height: '100',
        backgroundColor: '#FFFF',
        padding: 12,
        fontSize: 12,
        borderBottomColor: '#ff2200',
        borderBottomWidth: 1,
    },
    textmaticulalink:{
        color: '#c21404',
    },
});