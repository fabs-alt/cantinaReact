import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Navbar, Info, BlackContainer, RedContainer, YellowContainer } from './styles';

const Menu = () => {

  const navigation = useNavigation();

  const handleCardapioClick = () => {
    navigation.navigate('Cardapio');
  };

  const handleHomeClick = () => {
    navigation.navigate('Home');
  };

  const handleOrdersClick = () => {
    navigation.navigate('Orders');
  };

  const handleProfileClick = () => {
    navigation.navigate('Profile');
  };
  
  return(
    <>
    <Navbar>
      <TouchableOpacity onPress={handleHomeClick}>
        <Icon name={'home'} size={30}  color={'gray'}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCardapioClick}>
        <Icon name={'book-open'} size={30} color={'gray'} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleOrdersClick}>
        <Icon name={'cart'} size={30}  color={'gray'}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfileClick}>
        <Icon name={'account'} size={30} color={'gray'} />
      </TouchableOpacity>
    </Navbar>
    </>
  );
}

export default Menu;
