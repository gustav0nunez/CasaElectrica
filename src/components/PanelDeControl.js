import React from 'react'
import {Text, View} from "react-native"
import { styles } from '../styles'
import Boton from './Boton'
import Cocina from './Cocina'

export const PanelControl = () => {
  return (
    <View styles = {styles.panelControl}>
        <Boton habitacion="cocina"></Boton>
        <Boton habitacion="sala"></Boton>
        <Boton habitacion="dormitorio1"></Boton>
        <Boton habitacion= "dormitorio2"></Boton>
        <Boton habitacion="baño"></Boton>
        <Boton habitacion="salonJuegos"></Boton>
        <Boton></Boton>
    </View>
  )
}

export default PanelControl