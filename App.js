import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import store from './src/store';
import { Provider } from 'react-redux';


import Main from './src/component/screens/Main';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
 
let persistor =persistStore(store)
const App = () => {
  return (

    <Provider store={store}>
    <PersistGate persistor={persistor}>

<Main/>
    </PersistGate>

    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})