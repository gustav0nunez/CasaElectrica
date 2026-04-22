import React from "react"; 
import { View, Text, SafeAreaView } from "react-native";
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
    <SafeAreaView style={[styles.container, { backgroundColor: '#111827' }]}>
     
      <View style={styles.panelControl}>
        <Text style={styles.texto}>PANEL</Text>
        <PanelControl />
      </View>

 
      <View style={styles.habitacionesContainer}>
        <Cocina />
        <Sala />
        <Baño />
        <Dormitorio />
        <Dormitorio2 />
        <SalaJuegos />
      </View>

      
      <View style={styles.consumo}>
        <Consumo />
      </View>
    </SafeAreaView>
  );
};

export default Casa;