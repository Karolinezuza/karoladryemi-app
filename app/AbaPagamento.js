import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function ResumoViagemScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#C3DFF3', // Cor azul claro da imagem
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <StatusBar style="auto" />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 40, color: '#333' }}>
        Resumo da Viagem
      </Text>

      <TouchableOpacity  onPress={() => router.navigate('/Pagamento')}
        style={{
          backgroundColor: '#7CC37C', // Verde do botão da imagem
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
          Ir para Pagamento
        </Text>
      </TouchableOpacity>
    </View>
  );
}
