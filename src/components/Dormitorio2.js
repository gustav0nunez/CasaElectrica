import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../styles/index'; 

const Dormitorio2 = () => {
 
  const isEnchufada = useSelector((state) => state.casa.dormitorio2);

  return (
    
    <View style={[styles.hab, { backgroundColor: isEnchufada ? 'green' : 'red' }]}>
      <Text style={styles.texto}>Dormitorio 2
      </Text>
    </View>
  );
};

export default Dormitorio2;