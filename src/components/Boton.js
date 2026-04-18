import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLuz } from '../redux/casaSlice';
import { styles } from '../styles';

const Boton = ({ habitacion }) => {
  const dispatch = useDispatch();
  const { termicaSaltada } = useSelector((state) => state.casa);

  const manejarPresion = () => {
    if (!termicaSaltada) {
      dispatch(toggleLuz(habitacion));
    }
  };

  return (
    <TouchableOpacity 
  style={[styles.boton, { opacity: termicaSaltada ? 0.5 : 1 }]} 
  onPress={manejarPresion} 
>
  <Text style={{color: 'white', fontSize: 10}}>{habitacion}</Text>
</TouchableOpacity>
  );
};

export default Boton;