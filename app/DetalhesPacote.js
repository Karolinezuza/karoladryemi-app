import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';


export default function PagamentoScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#C3DFF3', // Cor de fundo igual à da imagem
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <StatusBar style="auto" />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 40, color: '#333' }}>
        Detalhes de Pagamento
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#F9C900', // Amarelo do botão
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
          Reserva Agora
        </Text>
      </TouchableOpacity>
    </View>
  );
}
                            