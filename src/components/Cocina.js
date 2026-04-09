import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../styles/index'; // Importamos los estilos del profe

const Cocina = () => {
  // 1. "Extraemos" solo el estado de la cocina desde el store
  const isEnchufada = useSelector((state) => state.casa.cocina);

  return (
    // 2. Aplicamos el estilo condicional que charlamos antes
    <View style={[styles.hab, { backgroundColor: isEnchufada ? 'yellow' : 'red' }]}>
      <Text style={styles.texto}>Cocina</Text>
    </View>
  );
};

export default Cocina;