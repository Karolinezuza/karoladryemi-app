import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image, Alert,}
  
  from 'react-native';
import { useRouter } from 'expo-router';

export default function Ajuda() {
  const router = useRouter();
  const [mensagem, setMensagem] = useState('');

  const enviarAssistencia = () => {
    Alert.alert('Mensagem enviada!', 'Nossa equipe entrará em contato pelo seu e-mail.');
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require('../assets/Icon.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate('/PacotesPrincipal')}>
          <Image source={require('../assets/home-05.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Precisa de ajuda?</Text>

      <TextInput
        style={styles.textArea}
        placeholder="Como posso te ajudar?"
        placeholderTextColor="#555"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={enviarAssistencia}>
        <Text style={styles.buttonText}>Envie para a assistência</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBE8FF',
    padding: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    marginTop: 40,
    marginBottom: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  textArea: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 15,
    fontSize: 16,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'center',
    fontSize: 14,
    color: '#444',
  },
});
