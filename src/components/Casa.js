import React from "react"; 
import { View, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { styles } from '../styles/index';
import Cocina from "./Cocina";
import Consumo from "./Consumo";
import Baño from "./Baño"
import Dormitorio from "./Dormitorio";
import Dormitorio2 from "./Dormitorio2";
import PanelControl from "./PanelDeControl";
import Sala from "./Sala";
import SalaJuegos from "./SalaJuegos";

const Casa = () => {
    return (
        <SafeAreaView style={styles.container}>
    <View style={styles.panelControl}>
        
        <PanelControl/> 
    </View>

            <View style={styles.habitacionesContainer}>
                <Cocina />
                <Baño/>
                <Dormitorio/>   
                <Dormitorio2/>  
                <Sala/> 
                <SalaJuegos/>   
            </View>

            <View style={styles.consumo}>
                <Consumo />
            </View>
        </SafeAreaView>
    );
}

export default Casa; 