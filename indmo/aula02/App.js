import { useState } from 'react'

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [comprimento, setComprimento] = new useState("");
  const [corrente, setCorrente] = new useState("");
  const [resultado220, setResultado220] = new useState(0);
  const [resultado127, setResultado127] = new useState(0);

  const somar = () => {
    setResultado220((1.73 * comprimento * corrente) / 510.4);
    setResultado127((2 * comprimento * corrente) / 294.64);
    setComprimento("");
    setCorrente("");
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <TextInput style={styles.input} placeholder="Insira o Comprimento" value={comprimento} onChangeText={ (val) => setComprimento(Number(val))}/>
      <TextInput style={styles.input} placeholder="Insira a Corrente" value={corrente} onChangeText={ (val) => setCorrente(Number(val))}/>
      <Button style={styles.button} title="Calcular" onPress={() => somar()}/>
      <Text style={styles.text}>O resultado para 220v é de: {resultado220.toFixed(2)} mm</Text>
      <Text style={styles.text}>O resultado para 127v é de: {resultado127.toFixed(2)} mm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c7780',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo:{
    margin: "10px",
    fontSize: "1.5rem",
    fontWeight: 'bold'
  },
  input:{
    borderRadius: '10px',
    borderBottomWidth: '1px',
    margin: '10px',
    borderBottomColor: '#333',
    backgroundColor: '#c8bccf',
    fontWeight: 'bold',
    padding: '5px'
  },
  text:{
    padding: '10px',
    fontWeight: 'bold'
  }
});
