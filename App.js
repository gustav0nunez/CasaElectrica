import { Provider } from 'react-redux';
import store from './src/redux/store';
import Casa from "./src/components/Casa";
import { StyleSheet, View, Text } from 'react-native';
import {styles} from './src/styles/index'

export default function App() {
  return (
    <Provider store={store}>
      <Casa/>
    </Provider>
  );
}

function casa() {
  return (
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

