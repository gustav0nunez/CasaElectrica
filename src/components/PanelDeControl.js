import React from 'react'
import {View} from "react-native"
import { styles } from '../styles'
import Boton from './Boton'

export const PanelControl = () => {
  return (
    <View style={styles.panelControl}>
        <Boton habitacion="cocina"></Boton>
        <Boton habitacion="sala"></Boton>
        <Boton habitacion="dormitorio"></Boton>
        <Boton habitacion="dormitorio2"></Boton>
        <Boton habitacion="baño"></Boton>
        <Boton habitacion="salaJuegos"></Boton>
        <Boton habitacion="REINICIAR" isReset={true}/>
    </View>
  )
}

export default PanelControl