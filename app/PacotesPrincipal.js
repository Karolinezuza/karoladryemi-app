import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function PacotesPrincipal() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      
      <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
        <Image source={require('../assets/Icon.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>Pacotes Principal</Text>

      <TouchableOpacity
        style={styles.pacoteButton}
        onPress={() => router.navigate('DetalhesPacote')}
      >
        <Text style={styles.buttonText}>Pacote</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.pacoteButton}
        onPress={() => router.navigate('DetalhesPacote')}
      >
        <Text style={styles.buttonText}>Pacote</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.pacoteButton}
        onPress={() => router.navigate('DetalhesPacote')}
      >
        <Text style={styles.buttonText}>Pacote</Text>
      </TouchableOpacity>

 
      <TouchableOpacity
        style={styles.personalizarButton}
        onPress={() => router.navigate('PersonalizacaoPacotes')}
      >
        <Text style={styles.buttonText}>Personalizar Viagens</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBE8FF',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  pacoteButton: {
    backgroundColor: '#FF7700',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  personalizarButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
});
