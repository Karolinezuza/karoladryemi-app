import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";


export default function LoginScreen({ navigation }) {
  const router = useRouter();

  const [email, setEmail] = useState('aar1@aluno.ifal.edu.br')
  const [senha, setSenha] = useState('ake@887')


  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      // Signed up 
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
    }    
  }



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={require('../assets/avião.img(1).png')} style={styles.image} />
      <Image source={require('../assets/coqueiro.png')} style={styles.coqueiroTop} />
      <Image source={require('../assets/coqueiro2.png')} style={styles.coqueiroBottom} />


      <View style={styles.header}>
        <Text style={styles.logo}>Explorar Tour</Text>
        <Text style={styles.subtitle}>Agência de turismo</Text>
      </View>

      <Text style={styles.title}>Acesse sua conta</Text>

      <TextInput placeholder="E-mail" placeholderTextColor="#000" style={styles.input} />
      <TextInput placeholder="Senha" placeholderTextColor="#000" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>


        <TouchableOpacity onPress={() => router.navigate('/Esqueceusenha')}>
           <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>


      <TouchableOpacity onPress={() => router.navigate('/Cadastro')}>
  <Text style={styles.register}>Não possui cadastro?</Text>
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
  forgot: {
    color: '#6c63ff',
    fontSize: 14,
    marginBottom: 4,
  },
  register: {
    color: '#6c63ff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  
});
