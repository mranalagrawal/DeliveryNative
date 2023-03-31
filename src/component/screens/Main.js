import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import AppNavigator from '../navigation/AppNavigator';
import { useDispatch } from 'react-redux';
import { addMyProducts } from '../../redux/MyProduct/MyProductSlice';






let items = [
    {
        id: 0,
        rname: "Massala Theoryy",
        imgdata: require("../../../assets/image/RESTAURANT1.jpg"),

        address: "North Indian, Biryani, Mughlai",
       
        somedata: " 1175 + order placed from here recently",
        price: 200,
        rating: "3.8 ",
               qnty:0
    },
    {
        id: 1,
        rname: "Jugaadi Adda",
        imgdata: require("../../../assets/image/RESTAURANT2.jpg"),

        address: "Street Food",
        somedata: " 2525 + order placed from here recently",
        price: 25,
        rating: "3.9",
         qnty:0
    },
    {
        id: 2,
        rname: "La Milano Pizzeria",
        imgdata: require("../../../assets/image/RESTAURANT3.jpeg"),
        address: "Pizza",
        somedata: " 650 + order placed from here recently",
        price: 70,
        rating: "4.2",
         qnty:0
    },
    {
        id: 3,
        rname: "Momoman",
        imgdata: require("../../../assets/image/RESTAURANT4.jpg"),
        
        address: "Momos",
        somedata: " 300 + order placed from here recently",
        price: 70,
        rating: "3.8",
         qnty:0
    },
    {
        id: 4,
        rname: "Jassi De Parathe",
        imgdata: require("../../../assets/image/RESTAURANT5.jpg"),

        address: "North Indian",
        somedata: "1050 + order placed from here recently",
        price: 210,
        rating: "4.0",
         qnty:0
    },
    {
        id: 5,
        rname: "Enjoy Latenight Meal",
        imgdata: require("../../../assets/image/RESTAURANT6.jpg"),
        
        address: "Wraps FastFood, Chines",
        somedata: " 1100 + order placed from here recently",
        price: 100,
        rating: "3.8",
         qnty:0
    },
    {
        id: 6,
        rname: "Hocco Eatery",
        imgdata: require("../../../assets/image/RESTAURANT7.jpg"),

        address: "North Indian, Fast Food",
        somedata: "500 + order placed from here recently",
        price: 300,
        rating: "3.8",
         qnty:0
    },
    {
        id: 7,
        rname: "Chai Wai",
        imgdata: require("../../../assets/image/RESTAURANT8.jpg"),

        address: "Tea, Coffee, Shake, Beverages",
        somedata: "500 + order placed from here recently",
        price: 100,
        rating: "3.2",
         qnty:0
    },
    {
        id: 8,
        rname: "HL Frankie",
        imgdata: require("../../../assets/image/RESTAURANT9.jpg"),
        address: "Burger, Sandwich, Fast Food",
        somedata: "2525 + order placed from here recently",
        price: 100,
        rating: "3.8",
         qnty:0
    },
];

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
    items.map(item=>{
        dispatch(addMyProducts(item))
    })
    }, [])
  return (
    <AppNavigator/>
  )
}

export default Main

const styles = StyleSheet.create({})