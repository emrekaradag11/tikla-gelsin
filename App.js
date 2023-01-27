import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import AppNavigation from './src/navigations/AppNavigation';
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <AppNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})