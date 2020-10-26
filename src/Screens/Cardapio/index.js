import React from 'react';

import Menu from '../../Components/Menu';
import Header from '../../Components/Header';

import Input from '../../Components/Input';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Items, ItemContainer, Scroll, Text } from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Cardapio = () => {

  const navigation = useNavigation();

  const handleDrinksClick = () => {
    navigation.navigate('Drinks');
  };

  const handleFoodsClick = () => {
    navigation.navigate('Foods');
  };

  const handleCandiesClick = () => {
    navigation.navigate('Candies');
  };

  return(
    <>
      <Header background={'fa695f'} color={'#ffff'} height={60}>Cardápio</Header>

      <Container>
        <Input icon={'search'} iconColor={'white'} size={15} placeholderTextColor={'white'} placeholder={'Está com fome de que?...'} />
      </Container>

      <Scroll>
      <Items>
        <ItemContainer onPress={handleFoodsClick}>
          <Icon name={'hamburger'} size={30} color={'white'}/>
          <Text>Lanches</Text>
        </ItemContainer>
        <ItemContainer onPress={handleFoodsClick}>
          <Icon name={'hamburger'} size={30} color={'white'}/>
          <Text>Lanches</Text>
        </ItemContainer>
        <ItemContainer onPress={handleFoodsClick}>
          <Icon name={'hamburger'} size={30} color={'white'}/>
          <Text>Lanches</Text>
        </ItemContainer>

        <ItemContainer onPress={handleDrinksClick}>
          <Icon name={'cup'} size={30} color={'white'}/>
          <Text>Bebidas</Text>
        </ItemContainer>
        <ItemContainer onPress={handleDrinksClick}>
          <Icon name={'cup'} size={30} color={'white'}/>
          <Text>Bebidas</Text>
        </ItemContainer>
        <ItemContainer onPress={handleDrinksClick}>
          <Icon name={'cup'} size={30} color={'white'}/>
          <Text>Bebidas</Text>
        </ItemContainer>

        <ItemContainer onPress={handleCandiesClick}>
          <Icon name={'ice-cream'} size={30} color={'white'}/>
          <Text>Doces</Text>
        </ItemContainer>
        <ItemContainer onPress={handleCandiesClick}>
          <Icon name={'ice-cream'} size={30} color={'white'}/>
          <Text>Doces</Text>
        </ItemContainer>
        <ItemContainer onPress={handleCandiesClick}>
          <Icon name={'ice-cream'} size={30} color={'white'}/>
          <Text>Doces</Text>
        </ItemContainer>

      </Items>
      </Scroll>

      <Menu />
    </>
  );
}

export default Cardapio;
