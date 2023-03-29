import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

import ButtonCadastrar from './src/components/button-cadastrar/index';

export default function App() {
  const [numero, setNumero] = new useState(0);
  const [nome, setNome] = new useState("");

  const [vali, setVali] = new useState(0);
  const [valii, setValii] = new useState(0);
  const [resultado, setResultado] = new useState(0);

  const tituloBotao = "Cadastrar";
  const texto = "Meu número é: ";

  const incrementar = () => {
    let valor = numero + 1;
    setNumero(valor)
  }

  const cadastrar = () => {
    console.log(nome, numero);
    setNome("")
  }

  const somar = () => {
    setResultado(vali + valii);
    setVali(0);
    setValii(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{texto + numero}</Text>
      <TextInput style={styles.input} onChangeText={ (val) => setNome(val) } value={nome}/>
      <Button title={tituloBotao} onPress={ () => cadastrar() }/>
      <TouchableOpacity style={styles.button} onPress={ () =>  incrementar()  }>
        <Text style={styles.textButton}>Autenticar</Text>
      </TouchableOpacity>
      <ButtonCadastrar />

      <TextInput style={styles.input} value={vali} onChangeText={ (val) => setVali(Number(val))}/>
      <TextInput style={styles.input} value={valii} onChangeText={ (val) => setValii(Number(val))}/>
      <Button title="Somar" onPress={ () => somar()}/>
      <Text style={styles.title}>O resultado da soma é: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5426FF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  },
  title:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  input:{
    borderRadius: '5px',
    borderBottomWidth: '1px',
    borderBottomColor: '#333',
    backgroundColor: '#E5E5E5',
    padding: '5px'
  },
  button:{
    padding: '15px',
    backgroundColor: '#DF5800',
    borderRadius: '7px'
},
textButton:{
  color: '#333',
  fontWeight: 'bold',
  fontSize: '1.2rem'
}
});
