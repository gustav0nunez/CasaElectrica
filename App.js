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


