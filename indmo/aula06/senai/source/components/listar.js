import { View, Image, StyleSheet, Text } from "react-native";
import Cursos from "../mocks/mocks";

export default function Item({ item }) {
    return (
        <View style={styles.item}>
            <View style={styles.div}>
                <Text style={styles.nomecurso}>{item.nomecurso}</Text>
                <Text style={styles.text}>{item.ensino}</Text>
                <Text style={styles.text}>{item.carga}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    div:{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFF',
        padding: 12,
        borderRadius: 23,
    },
    nomecurso:{
        fontSize: 23,
        paddingLeft: 20,
    },
    text: {
        fontSize: 16,
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
});