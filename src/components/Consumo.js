import React from 'react'
import { View, Text } from "react-native"
import { useSelector } from 'react-redux'
import { styles } from '../styles'

const Consumo = () => {
  const { consumo, termicaSaltada } = useSelector((state) => state.casa);
  
 
  const porcentajeCarga = `${Math.min((consumo / 50) * 100, 100)}%`; 

  return (
    
    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        
        <View style={{
            height: '65%', 
            width: 20,     
            backgroundColor: '#1f2937',
            borderRadius: 10,
            overflow: 'hidden',
            justifyContent: 'flex-end', 
            borderWidth: 1,
            borderColor: termicaSaltada ? '#ef4444' : '#374151',
        }}>
            
            <View style={{
                backgroundColor: termicaSaltada ? "#ef4444" : "#10b981", 
                height: porcentajeCarga, 
                width: "100%",
            }}/>
        </View>

        
        <View style={{ alignItems: 'center', marginTop: 8 }}>
            <Text style={[styles.texto, { fontSize: 12 }]}>{consumo}W</Text>
            
            {termicaSaltada && (
                <Text style={{ 
                    color: '#ef4444', 
                    fontSize: 8, 
                    fontWeight: 'bold',
                    marginTop: 2
                }}>
                    ¡SALTÓ!
                </Text>
            )}
        </View>
    </View>
  )
}

export default Consumo