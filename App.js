import { Provider } from 'react-redux';
import store from './src/redux/store';
import Casa from "./src/components/Casa";
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (

<Provider store={store}>
<Casa/>
</Provider>
}
<View style={styles.container}>
      
      
      <View style={styles.panelControl}>
        <Text>Panel de Botones</Text>
      </View>

      
      <View style={styles.habitaciones}>
        <Text>Las 6 habitaciones irán aquí</Text>
      </View>

      
      <View style={styles.consumo}>
        <Text>Barra de Consumo</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Acomoda las cajas en fila horizontal
  },
  panelControl: {
    flex: 1,
    backgroundColor: '#add8e6', // Azul claro para distinguirlo
    justifyContent: 'center',
    alignItems: 'center',
  },
  habitaciones: {
    flex: 3, // Ocupa más espacio que los laterales
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  consumo: {
    flex: 1,
    backgroundColor: '#90ee90', // Verde claro
    justifyContent: 'center',
    alignItems: 'center',
  }
});