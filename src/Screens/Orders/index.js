import React from 'react';

import Menu from '../../Components/Menu';
import Header from '../../Components/Header';

import Button from '../../Components/Button';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
  BlackContainer, 
  GrayContainer, 
  Items, 
  Scroll, 
  Title, 
  P,
  TextContainer,
  Col
} from './styles';

const Orders = () => {

  const navigation = useNavigation();

  const handleDetailsClick = () => {
    navigation.navigate('Details');
  };

  return(
    <>
      <Header background={'fa695f'} color={'#ffff'} height={60}>Pedidos</Header>
        <Scroll>
          <Items>
            <GrayContainer>
              <Icon name={'cart'} color={'white'} size={30}/>
              <Col>
              
                <Title>Pedido número: 001</Title>

                <TextContainer>
                  <P>Valor do pedido: R$ 4,00</P>
                </TextContainer>

              </Col>
            </GrayContainer>
            <BlackContainer>
              <Icon name={'check-bold'} color={'white'} size={30}/>
              <Button onPress={handleDetailsClick} background={'fa695f'} width={100} height={30}><P>Ver detalhes</P></Button>
            </BlackContainer>
            
          </Items>
        </Scroll>
      <Menu />
    </>
  );
}

export default Orders;
