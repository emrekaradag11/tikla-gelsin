import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'; 
import AppNavigation from './src/navigations/AppNavigation';


export default function App() {
  
  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  }
})