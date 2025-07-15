import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './app/TelaInicial';
import Login from './app/Login';
import Cadastro from './app/Cadastro';
import PacotesPrincipal from './app/PacotesPrincipal';
import Personalizacao from './app/Personalizacao';
import DetalhesPacote from './app/DetalhesPacote';
import AbaPagamento from './app/AbaPagamento';
import Pagamento from './app/Pagamento';
import AvaliacaoComentario from './app/AvaliacaoComentario';
import AjudaSuporte from './app/AjudaSuporte';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="PacotesPrincipal" component={PacotesPrincipal} />
        <Stack.Screen name="Personalizacao" component={Personalizacao} />
        <Stack.Screen name="DetalhesPacote" component={DetalhesPacote} />
        <Stack.Screen name="AbaPagamento" component={AbaPagamento} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="AvaliacaoComentario" component={AvaliacaoComentario} />
        <Stack.Screen name="AjudaSuporte" component={AjudaSuporte} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
