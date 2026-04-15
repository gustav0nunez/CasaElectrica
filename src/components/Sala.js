import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../styles/index'; 

const Sala = () => {
 
  const isEnchufada = useSelector((state) => state.casa.sala);

  return (
    
    <View style={[styles.hab, { backgroundColor: isEnchufada ? 'green' : 'red' }]}>
      <Text style={styles.texto}>Sala</Text>
    </View>
  );
};

export default Cocina;