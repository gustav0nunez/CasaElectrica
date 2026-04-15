import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleLuz } from '../redux/casaSlice';
import { styles } from '../styles';

const Boton = ({ habitacion }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity 
      style={styles.boton} 
      onPress={() => dispatch(toggleLuz(habitacion))}
    >
      <Text style={{color: 'white', fontSize: 10}}>{habitacion}</Text>
    </TouchableOpacity>
  );
};

export default Boton;