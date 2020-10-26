import React from 'react';

import Menu from '../../../Components/Menu';
import Header from '../../../Components/Header';

import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Text,
  Container,
  Center,
  Products,
  Col,
  Scroll,
  Total,
  P
} from './styles';

const Details = () => {

  return(
    <>
      <Header background={'ffff'} color={'#000000'} height={60}>
        Ver detalhes
      </Header>

      <Container>
        <Text>Cliente: Fabiola de Faria</Text>
        <Text>Número do pedido: 001</Text>
        <Text>Data de criação: 07/07/2020</Text>
      </Container>

        <Center>
          <Text>Situação do pedido:</Text>
          <Text>Concluído</Text>
        </Center>

        <Scroll>
          <Products>
            <Text>FOTO</Text>
            <Col>
              <Text>Cod: 001</Text>
              <Text>Hamburguer c/ Cheddar</Text>
              <Text>R$ 4,00</Text>
            </Col>
          </Products>
    
        </Scroll>
          <Total>
            <P>Valor total do pedido: </P>
            <P>R$ 4,00</P>
          </Total>

      <Menu/>
    </>
  );
}

export default Details;
