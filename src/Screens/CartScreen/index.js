import React from 'react';

import Menu from '../../Components/Menu';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import Total from '../../Components/Total';

import { Products, Text, Col, Scroll } from './styles';

const CartScreen = () => {

  return(
    <>
      <Header iconColor={'white'} icon={'arrow-left'} background={'fa695f'} color={'#fff'} height={60}>Carrinho</Header>

      <Scroll>
        <Products>
          <Text>FOTO</Text>
          <Col>
            <Text>Coca-Cola 2L</Text>
            <Text>R$ 10,50</Text>
            <Text>2 unidades</Text>
          </Col>
          
          <Col>
            <Button background={'ccc'} color={'white'} marginX={-10} marginY={10} width={80} height={20} >Alterar</Button>
            <Text>R$ 21,00</Text>
          </Col>

        </Products>
        
      </Scroll>

      <Total/>

      <Menu />
    </>
  );
}

export default CartScreen;
