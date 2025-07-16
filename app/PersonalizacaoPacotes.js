import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function PersonalizeViagem() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.iconLeft} onPress={() => router.back()}>
        <Image source={require('../assets/Icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconRight} onPress={() => router.navigate('/PacotesPrincipal')}>
        <Image source={require('../assets/home-05.png')} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>Personalize sua Viagem</Text>


      <TouchableOpacity style={styles.button} onPress={() => router.navigate('/Pagamento')}>
        <Text style={styles.buttonText}>Ir para Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBE8FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconLeft: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  iconRight: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
