// Importamos lo necesario de React y React Native.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente para mostrar el número del contador.
const Contador = ({ cuenta }) => {
  // Mostramos el número en una caja.
  return (
    <View style={estilos.contenedorContador}>
      <Text style={estilos.contador}>{cuenta}</Text>
    </View>
  );
};

// Estilos para que el contador se vea bien.
const estilos = StyleSheet.create({
  contenedorContador: {
    width: 100, // Ancho del contenedor
    height: 100, // Alto del contenedor
    backgroundColor: '#333333', // Color de fondo
    borderRadius: 5, // Bordes redondeados
    borderColor: '#FFFFFF', // Borde blanco
    borderWidth: 2, // Ancho del borde
    justifyContent: 'center', // Centra el texto verticalmente
    alignItems: 'center', // Centra el texto horizontalmente
    marginBottom: 20, // Espacio abajo del contenedor
  },
  contador: {
    color: '#FFFFFF', // Color del texto
    fontSize: 30, // Tamaño del texto
  },
});

// Exportamos el componente para usarlo en otros lugares.
export default Contador;
