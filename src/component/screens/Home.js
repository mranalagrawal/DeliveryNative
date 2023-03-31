import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  StatusBar,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {useDispatch, useSelector} from 'react-redux';

import {SliderBox} from 'react-native-image-slider-box';
import {increaseQty} from '../../redux/MyProduct/MyProductSlice';
import {
  addProductToMyCart,
  removeMyCartItem,
} from '../../redux/MyProduct/MyCartSlice';
import Cart from './Cart';

const Home = ({navigation}) => {
  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 90;
  const Header_Min_Height = 50;

  const animatedHeaderBackgroinColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['rgb(234,183,16)', 'rgb(234,183,16)'],
    extrapolate: 'clamp',
  });

  const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const images = [
    require('../../../assets/image/RESTAURANT1.jpg'),
    require('../../../assets/image/RESTAURANT2.jpg'),
    require('../../../assets/image/RESTAURANT3.jpeg'),
    require('../../../assets/image/RESTAURANT4.jpg'),
    require('../../../assets/image/RESTAURANT5.jpg'),
    require('../../../assets/image/RESTAURANT6.jpg'),
    require('../../../assets/image/RESTAURANT7.jpg'),
    require('../../../assets/image/RESTAURANT8.jpg'),
    require('../../../assets/image/RESTAURANT9.jpg'),
  ];

  const dispatch = useDispatch();

  const myCartItems = useSelector(state => state.cart);

  const myProducts = useSelector(state => state.product);
  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Yay Item Added Successfully!',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      50,
      50,
    );
  };

  return (
    <View>
      <StatusBar backgroundColor="#eab710" />
      <Animated.View
        style={[
          styles.header,
          {
            height: animatedHeaderHeight,
            backgroundColor: animatedHeaderBackgroinColor,
          },
        ]}>
        <Icons
          style={{margin: 10}}
          name="menu-open"
          size={30}
          color="#232B2B"
        />

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icons
            style={{margin: 10, marginLeft: 15}}
            name="shopping-cart"
            size={30}
            color="#232B2B"
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              position: 'absolute',
              top: 0,
              right: 12,
            }}>
            {myCartItems.length}
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
          {useNativeDriver: false},
        )}>
        <View>
          <Text
            style={{
              fontSize: 35,
              color: 'black',
              fontWeight: '500',
              marginTop: 10,
              alignSelf: 'center',
            }}>
            Delicious Items
          </Text>
        </View>
        <View style={{marginTop: 20, marginHorizontal: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: '600',
              marginLeft: 5,
            }}>
            Featured
          </Text>
          <SliderBox
            images={images}
            dotColor="tomato"
            inactiveDotColor="black"
            dotStyle={{
              height: 15,
              width: 15,
              borderRadius: 5,
            }}
            resizeMode="cover"
            autoplay={true}
            autoplayInterval={2500}
            circleLoop={true}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 40,
              left: '40%',
              backgroundColor: '#E8DDCA',
              borderRadius: 15,
              borderWidth: 0.2,
              borderColor: 'transparent',
              padding: 12,
            }}>
            <Text style={{color: 'black'}}>Shop Now</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            width: '100%',
            backgroundColor: 'transparent',
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: '600',
              marginLeft: 5,
              marginVertical: 15,
            }}>
            TODAY'S MEAL⏺
          </Text>

          <FlatList
            data={myProducts}
            keyExtractor={(item)=>`key-${item.id}`}
            renderItem={({item}) => {
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
                        marginLeft: 20,
                        color: 'black',
                        fontWeight: '600',
                      }}>
                      {item.rname}
                    </Text>
                    <Text
                      style={{
                        fontWeight: '600',
                        marginTop: 10,
                        marginLeft: 20,
                        fontSize: 16,
                        color: 'green',
                      }}>
                      Price: ₹ {item.price}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                        marginLeft: 13,
                      }}>
                      <TouchableOpacity
                        style={{
                          marginLeft: 5,
                          backgroundColor: 'black',
                          borderRadius: 10,
                          height: 27,
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            paddingLeft: 10,
                            paddingRight: 10,
                            marginLeft: 10,
                          }}
                          onPress={() => {
                            dispatch(addProductToMyCart(item));
                            dispatch(increaseQty(item.id));
                            showToast();
                          }}>
                          Add To Cart
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      marginLeft: 30,
                      marginTop: 40,
                    }}>
                    <Text style={{fontSize: 20, color: 'black'}}>
                      {' '}
                      Rating:{' '}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        marginLeft: 5,
                        marginTop: 10,
                      }}>
                      {' '}
                      {item.rating} ⭐
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#eab710',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 0.1,
  },
});
