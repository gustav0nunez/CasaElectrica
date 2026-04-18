import React from 'react'
import {View, Text} from "react-native"
import { styles } from '../styles'
import { useSelector } from 'react-redux'


const Consumo = () => {

  const {consumo} = useSelector((state) => state.casa);
  const altoBarra = consumo * 4;

  return (
    <View style={styles.consumo}>
        <View style={{flexDirection: "row", backgroundColor: "red", height: 30, width: "100%", borderRadius: 5}}/>

      <Text style={[styles.texto, { fontSize: 14 }]}>{consumo}W</Text>
        </View>

    </View>
  )
}

export default Consumo