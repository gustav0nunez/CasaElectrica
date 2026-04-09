import react from "react";
import { View, StyleSheet,Text } from "react-native";
import { useSelector } from "react-redux";
import {styles} from '../styles/index'
import Cocina from "./Cocina";

const Casa = () => {

    const {consumo, termicaSaltada} = useSelector((state) => state.casa);
  return (
    <View style= {styles.container}>
        <View style={styles.panelControl}>
            <Text>Panel</Text>
        </View>

        <View style={styles.habitacionesContainer}>
            <View style={styles.texto}></View>
        </View>

        <View style={styles.barraConsumo}>
            <Text>Consumo: {consumo}</Text>
        </View>
    </View>
  )
}

export default Casa