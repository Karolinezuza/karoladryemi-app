import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleCadastrar() {
    if (!nome || !cpf || !telefone || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={require('../assets/avião.img(1).png')} style={styles.image} />
      <Image source={require('../assets/coqueiro.png')} style={styles.coqueiroTop} />
      <Image source={require('../assets/coqueiro2.png')} style={styles.coqueiroBottom} />
      <Image source={require('../assets/Icon.png')} style={styles.iconLeft} />
      <Image source={require('../assets/home-05.png')} style={styles.iconRight} />

      <View style={styles.header}>
        <Text style={styles.logo}>Explorar Tour</Text>
        <Text style={styles.subtitle}>Agência de turismo</Text>
      </View>

      <Text style={styles.title}>Cadastre-se</Text>

      <TextInput placeholder="Nome" placeholderTextColor="#000" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="CPF" placeholderTextColor="#000" style={styles.input} value={cpf} onChangeText={setCpf} keyboardType="numeric" />
      <TextInput placeholder="Telefone" placeholderTextColor="#000" style={styles.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />
      <TextInput placeholder="E-mail" placeholderTextColor="#000" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput placeholder="Senha" placeholderTextColor="#000" style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.register}>Voltar para o login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2edff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
    marginTop: -120,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -30,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2f4f60',
    padding: 16,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  register: {
    color: '#6c63ff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  iconLeft: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 26,
    height: 26,
    resizeMode: 'contain',
    zIndex: 10,
  },
  iconRight: {
    position: 'absolute',
    top: 20,
    right: 290,
    width: 30,
    height: 26,
    resizeMode: 'contain',
    zIndex: 10,
  },
  coqueiroTop: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 200,
    height: 200,
  },
  coqueiroBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 180,
    height: 180,
    zIndex: 1,
  },
});
