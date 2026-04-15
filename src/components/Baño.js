import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../styles/index'; 

const Baño = () => {
 
  const isEnchufada = useSelector((state) => state.casa.baño);

  return (
    
    <View style={[styles.hab, { backgroundColor: isEnchufada ? 'green' : 'red' }]}>
      <Text style={styles.texto}>Baño</Text>
    </View>
  );
};

export default Cocina;