import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  addProductToMyCart,
  deleteMyCartItem,
  removeMyCartItem,
} from '../../redux/MyProduct/MyCartSlice';
import Icons from 'react-native-vector-icons/Entypo'
import {decreaseQty, increaseQty} from '../../redux/MyProduct/MyProductSlice';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const myCartItems = useSelector(state => state.cart);
  console.log(myCartItems);
  const getTotal = () => {
    let total = 0;
    myCartItems.map(item => {
      total = total + item.qnty * item.price;
    });
    return total;
  };

  return (
    <ScrollView style={styles.card}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 20,
          backgroundColor: '#eab710',
          elevation: 1,
        }}>
        <TouchableOpacity onPress={() => {
                        navigation.goBack('Home')
                      }}>

        <Icons name='back' size={24} color="black" />
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 25, textAlign:"center",marginLeft:15, fontWeight: '700'}}>
          Your Items
        </Text>
      </View>
      <FlatList
        data={myCartItems}
        renderItem={({item, i}) => {
          return (
            <View
              style={{
                width: '94%',
                height: 150,
                backgroundColor: 'white',
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 10,
                elevation: 1,
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 25,
                  marginHorizontal: 10,
                  borderRadius: 10,
                }}
                source={item.imgdata}
                resizeMode="cover"
              />
              <View style={{padding: 10}}>
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 25,
                    marginLeft: 100,
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  {item.rname}
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    marginTop: 10,
                    marginLeft: 100,
                    fontSize: 16,
                    color: 'green',
                  }}>
                  {item.price}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    marginLeft: 90,
                  }}>
                  {item.qnty == 0 ? null : (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseQty(myCartItems.id));
                      }}
                      style={{
                        backgroundColor: 'black',
                        borderRadius: 10,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          paddingLeft: 15,
                          paddingRight: 15,
                       
                          textAlign:"center",

                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  )}
                  {item.qnty == 0 ? null : (
                    <Text
                      style={{
                        marginLeft: 5,
                        marginRight: 5,
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      {item.qnty}
                    </Text>
                  )}
                  {item.qnty == 0 ? null : (
                    <TouchableOpacity
                      onPress={() => { 
                        if(item.qnty>1){
                          dispatch(removeMyCartItem(item));
                        dispatch(decreaseQty(item.id));
                        }else{
                          dispatch(deleteMyCartItem(item.id));
                        }
                    
                      }}
                      style={{
                        backgroundColor: 'black',
                        borderRadius: 10,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 10,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          paddingLeft: 15,
                          paddingRight: 15,
                          textAlign:"center",
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                  )}

                 

                </View>
              </View>
            </View>
          );
        }}
      />
      <View>
        {myCartItems.length > 0 ? (
          <View
            style={{
              width: '100%',
              height: 60,
              backgroundColor: 'white',
              position: 'relative',
              marginTop: 25,
              bottom: 0,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: '800', color: 'black'}}>
                {'added Items' + '(' + myCartItems.length + ')'}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '800', color: 'black'}}>
                {'Total: ' + getTotal()}
              </Text>
            </View>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    margin: 15,
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    marginBottom: 20,
  },
});
