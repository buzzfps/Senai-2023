import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor, setValor] = new useState("")
  const [juros, setJuros] = new useState("")
  const [parcelas, setParcelas] = new useState("")
  const [montante, setMontante] = new useState(0)
  const [valorParcela, setvalorParcela] = new useState(0)

  const calcular = () => {
    setMontante(valor * (1 + juros/100)**parcelas)
    setvalorParcela((valor * (1 + juros/100)**parcelas) / parcelas)
    valor = new useState("")
    juros = new useState("")
    parcelas = new useState("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>viabilidade econômica</Text> 
      <TextInput style={styles.inputs} placeholder={"Valor necessário"} value={valor} onChangeText={(val) => {setValor(Number(val))}}/>
      <TextInput style={styles.inputs} placeholder={"N. de Parcelas"} value={parcelas} onChangeText={(val) => {setParcelas(Number(val))}}/>
      <TextInput style={styles.inputs} placeholder={"Taxa de juros em %"} value={juros} onChangeText={(val) => { setJuros(val) }}/>
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.texto}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.textos}>Montante: {montante.toFixed(2)}</Text>
      <Text style={styles.textos}>Valor da parcela: {valorParcela.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem'
  },
  titulo: {
    fontSize: '2rem',
    color: '#fff',
    fontWeight: 'bold',
  },
  texto: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  textos: {
    fontSize: '1.2rem',
    color: '#fff',
  },
  inputs: {
    borderBottomColor: '#ffbb',
    borderBottomWidth: '2px',
    padding: '10px',
    color: '#fff',
    fontSize: '16px',
  },
  botao:{
    alignItems: 'center',
    backgroundColor: '#327d',
    borderRadius: '10px',
    padding: '10px',
    color: '#fff',
    width: '50%'
  },
});