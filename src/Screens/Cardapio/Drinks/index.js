import React from 'react';

import Menu from '../../../Components/Menu';
import Header from '../../../Components/Header';
import Cart from '../../../Components/Cart';

import NumericInput from 'react-native-numeric-input'

import { Scroll } from '../styles';

import { Products, Text, Col } from './styles';

const Drinks = () => {

  return(
    <>
      <Header icon={'arrow-left'} background={'fff'} color={'#000'} height={60}>Bebidas</Header>

      <Scroll>
        <Products>
          <Text>FOTO</Text>
          <Col>
            <Text>Coca-Cola 2l</Text>
            <Text>Preço: 10,50</Text>
          </Col>

          <NumericInput
           leftButtonBackgroundColor='red' 
           rightButtonBackgroundColor='green' 
           type={'plus-minus'} 
           minValue={0}
           totalWidth={100} 
           rounded={true}
           iconStyle={{ color: 'white' }} 
          />

        </Products>
        
      </Scroll>

      <Cart/>

      <Menu />
    </>
  );
}

export default Drinks;
