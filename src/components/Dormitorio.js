import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../styles/index'; 

const Dormitorio = () => {
 
  const isEnchufada = useSelector((state) => state.casa.cocina);

  return (
    
    <View style={[styles.hab, { backgroundColor: isEnchufada ? 'green' : 'red' }]}>
      <Text style={styles.texto}>Dormitorio</Text>
    </View>
  );
};

export default Cocina;