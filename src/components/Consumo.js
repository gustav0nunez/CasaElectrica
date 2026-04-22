import React from 'react'
import { View, Text } from "react-native"
import { useSelector } from 'react-redux'
import { styles } from '../styles'

const Consumo = () => {
  const { consumo, termicaSaltada } = useSelector((state) => state.casa);
  
  const porcentajeCarga = `${Math.min((consumo / 50) * 100, 100)}%`; 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{
            height: '70%', 
            width: 30,
            backgroundColor: '#1f2937',
            borderRadius: 15,
            overflow: 'hidden',
            justifyContent: 'flex-end', 
            borderWidth: 2,
            borderColor: termicaSaltada ? '#ef4444' : '#374151',
        }}>
            
            <View style={{
                backgroundColor: termicaSaltada ? "#ef4444" : "#10b981", 
                height: porcentajeCarga, 
                width: "100%",
            }}/>
        </View>

        
        <View style={{ alignItems: 'center', marginTop: 10, height: 40 }}>
            <Text style={[styles.texto, { fontSize: 16 }]}>{consumo}W</Text>
            
            {termicaSaltada && (
                <Text style={{ 
                    color: '#ef4444', 
                    fontSize: 10, 
                    fontWeight: 'bold',
                    position: 'absolute', 
                    bottom: -15 
                }}>
                    ¡SALTÓ!
                </Text>
            )}
        </View>
    </View>
  )
}

export default Consumo