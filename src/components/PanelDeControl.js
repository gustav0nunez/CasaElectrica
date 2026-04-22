import React from 'react'
import {View} from "react-native"
import { styles } from '../styles'
import Boton from './Boton'

export const PanelControl = () => {
  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={[styles.texto, { marginBottom: 15, fontSize: 12, color: '#9ca3af' }]}>
            CONTROLES
        </Text>
        <Boton habitacion="cocina" />
        <Boton habitacion="sala" />
        <Boton habitacion="dormitorio" />
        <Boton habitacion="dormitorio2" />
        <Boton habitacion="baño" />
        <Boton habitacion="salaJuegos" />
        <View style={{ marginTop: 10, width: '100%', alignItems: 'center' }}>
             <Boton habitacion="RESET" isReset={true} />
        </View>
    </View>
  )
}
export default PanelControl