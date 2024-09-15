// Importando cosas necesarias de React y nuestros componentes.
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';
import Contador from './componentes/contador';
import Botones from './componentes/botones';

// Este es nuestro componente principal.
export default function App() {
  // Aquí tenemos el contador que empieza en 5.
  const [contador, setContador] = useState(5);

  // Función para añadir uno al contador.
  const manejarPresionar = () => setContador(contador + 1);

  // Función para poner el contador en cero.
  const manejarReiniciar = () => setContador(0);

  // Lo que se ve en la app.
  return (
    <View style={estilos.contenedor}>
      <StatusBar barStyle="light-content" />
      <Image source={require('./logo/logofreeCode.png')} style={estilos.logo} /> 
      <Contador cuenta={contador} />
      <Botones alIncrementar={manejarPresionar} alReiniciar={manejarReiniciar} />
    </View>
  );
}

// Estilos para que todo se vea bien.
const estilos = StyleSheet.create({
  contenedor: {
    flex: 1, // Usa todo el espacio disponible
    backgroundColor: '#000000', // Fondo negro
    alignItems: 'center', // Centra los hijos horizontalmente
    justifyContent: 'flex-start', // Empieza los hijos desde arriba
    paddingTop: 160, // Espacio arriba dentro del contenedor
  },
  logo: {
    width: '100%', // El logo ocupa todo el ancho posible
    height: 60, // Altura fija para el logo
    resizeMode: 'contain', // El logo se ajusta sin deformarse
    marginBottom: 40, // Espacio después del logo
  },
});
