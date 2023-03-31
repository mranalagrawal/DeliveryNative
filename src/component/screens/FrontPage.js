import { StyleSheet, Text, View, Image,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'


const FrontPage = ({navigation}) => {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#eab710" />

 <View style={styles.imageConatiner}>
 <Image style={styles.image} source={require('../../../assets/image/splash.jpg')}/>
 <View style={styles.card}>
    <Text style={styles.text}> Personalised{'\n'} Nutrition {'\n'} at your doorstep</Text>
     <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.btnText}>GET STARTED</Text>
     </TouchableOpacity>
 </View>
 </View>
 <View>
    
 </View>
    </View>

  )
}

export default FrontPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        heightL:"100%"
    },
    imageConatiner:{
        width:"100%",
        height:"100%"
    },
    image:{
        width:"100%",
        height:"100%",
        // marginVertical:50,
        resizeMode:"cover" 
    },
    card:{
width:"80%",
height:"30%",
borderRadius:20,
borderColor:"transparent",
borderWidth:0.2,
backgroundColor:"#F3CF4F",
zIndex:1,
position:"absolute",
bottom:70,
left:55
 },
 text:{
    fontSize:35,
    fontWeight:"500",
    color:"black",
    marginHorizontal:15,
    marginTop:15,
    fontFamily:"Voyage-Regular"

 },
 btn:{
    backgroundColor:"black",
    borderColor:"black",
    borderWidth:0.5,
    borderRadius:10,
    padding:15,
    marginHorizontal:30,
    marginTop:25

 },
 btnText:{
    fontFamily:"montserrat",
    fontSize:25,
    textAlign:"center"
 }
})