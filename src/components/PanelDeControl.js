import React from 'react'
import {View, Text} from "react-native"
import { styles } from '../styles/index'
import Boton from './Boton'

export const PanelControl = () => {
  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={[styles.texto, { marginBottom: 15, fontSize: 12, color: '#9ca3af' }]}>
            CONTROLES
        </Text>
        <Boton habitacion="cocina" label="Cocina"/>
        <Boton habitacion="sala" label="Sala"/>
        <Boton habitacion="dormitorio" label="Dormitorio 1" />
        <Boton habitacion="dormitorio2" label="Dormitorio 2"/>
        <Boton habitacion="salaJuegos" label="Sala de Juegos"/>
        <Boton habitacion="baño" label="Baño"/>
        <View style={{ marginTop: 10, width: '100%', alignItems: 'center' }}>
             <Boton habitacion="Reiniciar" isReset={true} />
        </View>
    </View>
  )
}
export default PanelControl