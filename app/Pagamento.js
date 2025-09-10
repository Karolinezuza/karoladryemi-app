import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { signOut } from "firebase/auth";
import { auth } from '../firebaseConfig';

export default function Pagamento() {
  const router = useRouter();

  const handleSair = async () => {
    try {
      await signOut(auth);
      router.replace('/');
    } catch (error) {
      console.error(error.code);
      console.error(error.message);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Ícones lado a lado */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require('../assets/Icon.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate('/PacotesPrincipal')}>
          <Image source={require('../assets/home-05.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Título */}
      <Text style={styles.title}>Pagamento</Text>

      {/* Seção de Forma de Pagamento */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Forma de Pagamento</Text>
      </View>

      {/* Botão Comprar */}
      <TouchableOpacity style={styles.button} onPress={() => router.navigate('/AvaliacaoComentario')}>
        <Text style={styles.buttonText}>COMPRAR</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={handleSair}>
        <Text style={styles.buttonText}>SAIR</Text>
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
    justifyContent: 'flex-end',
    marginTop: 40,
    marginBottom: 20,
    gap: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    padding: 15,
    backgroundColor: '#BEE3FF',
    borderRadius: 10,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
