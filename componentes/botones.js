// Importamos lo básico de React y React Native.
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// Componente para los botones de la app.
const Botones = ({ alIncrementar, alReiniciar, estaClicActivo, estaReinicioActivo }) => {
  // Renderizamos dos botones.
  return (
    <View>
      <TouchableOpacity style={estilos.boton} onPress={alIncrementar}>
        <Text style={[estilos.textoBoton, estaClicActivo && estilos.textoActivo]}>Clic</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botonReiniciar} onPress={alReiniciar}>
        <Text style={[estilos.textoBoton, estaReinicioActivo && estilos.textoActivo]}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos para que los botones se vean bonitos.
const estilos = StyleSheet.create({
  boton: {
    backgroundColor: '#0000FF', // Azul para el botón de clic.
    paddingHorizontal: 30, // Padding horizontal para comodidad.
    paddingVertical: 10, // Padding vertical para comodidad.
    borderRadius: 5, // Esquinas redondeadas.
    width: 200, // Ancho fijo para todos los botones.
    alignItems: 'center', // Centra el texto en el botón.
    marginBottom: 10, // Espacio debajo del botón.
  },
  botonReiniciar: {
    backgroundColor: '#008000', // Verde para el botón de reiniciar.
    paddingHorizontal: 30, // Igual padding horizontal.
    paddingVertical: 10, // Igual padding vertical.
    borderRadius: 5, // Esquinas igualmente redondeadas.
    width: 200, // Mismo ancho.
    alignItems: 'center', // Texto también centrado.
  },
  textoBoton: {
    color: '#FFFFFF', // Texto blanco para contraste.
    fontSize: 18, // Tamaño de letra legible.
  },
  textoActivo: {
    color: '#FFFF00', // Amarillo cuando el botón está activo.
  }
});

// Exportamos el componente para que pueda ser usado en la app.
export default Botones;
