import React from 'react'
import {Text, View} from "react-native"
import { styles } from '../styles'
import Boton from './Boton'

export const PanelControl = () => {
  return (
    <View styles = {styles.panelControl}>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
    </View>
  )
}

export default PanelControl