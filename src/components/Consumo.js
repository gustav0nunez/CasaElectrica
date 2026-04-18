import React from 'react'
import {View, Text} from "react-native"
import { styles } from '../styles'
import { useSelector } from 'react-redux'


const Consumo = () => {
  const { consumo, termicaSaltada } = useSelector((state) => state.casa);
  const altoBarra = (consumo / 100) * 100 + "%";

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
   
      <View style={{
        height: '80%',
        width: 30,
        backgroundColor: '#1e293b',
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: '#475569'
      }}>
        
        <View style={{
          height: altoBarra,
          width: '100%',
          backgroundColor: termicaSaltada ? '#ef4444' : '#22c55e',
        }} />
      </View>

      
      <View style={{ marginTop: 10, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 10 }}>WATTS</Text>
        <Text style={{ color: termicaSaltada ? '#ef4444' : '#22c55e', fontSize: 18, fontWeight: 'bold' }}>
          {consumo}
        </Text>
      </View>
      
      {termicaSaltada && (
        <Text style={{ color: '#ef4444', fontSize: 8, fontWeight: 'bold', marginTop: 5 }}>SALTÓ!</Text>
      )}
    </View>
  );
};

export default Consumo