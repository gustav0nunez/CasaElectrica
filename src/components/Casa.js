import React from "react"; 
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from '../styles/index';
import Cocina from "./Cocina";
import Consumo from "./Consumo";
import Baño from "./Baño"
import Dormitorio from "./Dormitorio";
import Dormitorio2 from "./Dormitorio2";
import PanelControl from "./PanelDeControl";
import Sala from "./Sala";
import SalaJuegos from "./SalonJuegos";

const Casa = () => {
    const { consumo } = useSelector((state) => state.casa);

    return (
        <View style={styles.container}>
           
            <View style={[styles.panelControl, { width: '20%', height: '100%', flexDirection: 'column' }]}>
                <Text style={styles.texto}>Panel</Text>
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

    |
            <View style={[styles.consumo, { width: '15%', height: '100%', flexDirection: 'column' }]}>
                <Text style={styles.texto}>Consumo</Text>
                <Text style={styles.texto}>{consumo}</Text>
            </View>
        </View>
    );
}

export default Casa;