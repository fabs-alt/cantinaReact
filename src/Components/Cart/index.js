import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Info, Text } from './styles';

const Cart = () => {
  const navigation = useNavigation();

  const handleCartClick = () => {
    navigation.navigate('CheckCart');
  };

  return(
    <Info onPress={handleCartClick}>
      <Icon name={'basket'} color={'white'} size={30} />
      <Text>Ver carrinho</Text>
      <Text>R$ 21,00</Text>
    </Info>
  );
}

export default Cart;