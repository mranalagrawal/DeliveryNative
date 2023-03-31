import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import store from './src/store';
import { Provider } from 'react-redux';


import Main from './src/component/screens/Main';
 

const App = () => {
  return (

    <Provider store={store}>
<Main/>

    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})