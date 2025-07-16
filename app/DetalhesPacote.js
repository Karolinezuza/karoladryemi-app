import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function PagamentoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Seta no topo esquerdo */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Image source={require('../assets/Icon.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>Detalhes de Pacote</Text>

      <TouchableOpacity
        onPress={() => router.navigate('Pagamento')}
        style={styles.reserveButton}
      >
        <Text style={styles.reserveText}>Reserva Agora</Text>
      </TouchableOpacity>

      {/* Botão Preciso de Ajuda - Fica fixo no final */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          onPress={() => router.navigate('/AjudaSuporte')}
          style={styles.helpButton}
        >
          <Text style={styles.helpText}>Preciso de ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3DFF3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  reserveButton: {
    backgroundColor: '#F9C900',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  reserveText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  helpButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  helpText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
