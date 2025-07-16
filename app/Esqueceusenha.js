import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function EsqueceuSenha() {
  const router = useRouter();
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const enviarCodigo = () => {
    // Simula o envio do código
    setMensagemSucesso('Código enviado com sucesso!');

    // Se quiser que a mensagem desapareça depois de um tempo
    setTimeout(() => {
      setMensagemSucesso('');
    }, 4000);
  };

  return (
    <View style={styles.container}>
      {/* Seta para voltar */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Image source={require('../assets/Icon.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Esqueceu sua senha?</Text>

      {/* Botão Enviar Código */}
      <TouchableOpacity style={styles.sendButton} onPress={enviarCodigo}>
        <Text style={styles.buttonText}>Enviar Código</Text>
      </TouchableOpacity>
      

      {/* Mensagem de Sucesso */}
      {mensagemSucesso !== '' && (
        <Text style={styles.successMessage}>{mensagemSucesso}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBE8FF',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#000',
  },
  sendButton: {
    backgroundColor: '#3DA23D',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  successMessage: {
    marginTop: 20,
    color: '#FF6600',
    fontSize: 14,
    fontWeight: '500',
  },
});
