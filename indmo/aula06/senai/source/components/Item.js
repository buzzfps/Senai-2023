import { View, Image, StyleSheet, Text } from "react-native";
import Cursos from "../mocks/mocks";

export default function Item({ item }) {
    return (
        <View style={styles.item}>
            <View style={styles.div}>
                <Text style={styles.abv}>{item.abv}</Text>
                <Text style={styles.text}>{item.categoria}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    abv:{
        fontSize: 34,
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
        borderRadius: 20,
        borderBottomColor: '#ff2200',
        borderBottomWidth: 1,
        borderLeftColor: '#ff2200',
        borderLeftWidth: 1,
        borderRightColor: '#ff2200',
        borderRightWidth: 1,
        borderTopColor: '#ff2200',
        borderTopWidth: 1,
    },
});