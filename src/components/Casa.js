import React from "react"; 
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from '../styles/index';
import Cocina from "./Cocina";

const Casa = () => {
    const { consumo } = useSelector((state) => state.casa);

    return (
        <View style={styles.container}>
           
            <View style={[styles.panelControl, { width: '20%', height: '100%', flexDirection: 'column' }]}>
                <Text style={styles.texto}>Panel</Text>
            </View>

           
            <View style={styles.habitacionesContainer}>
                <Cocina />
              
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