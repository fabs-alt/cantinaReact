import React from 'react';

import Menu from '../../Components/Menu';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Cart from '../../Components/Cart';

import { Container, Pfp, Row } from './styles';

const Profile = () => {

  return(
    <>
      <Header background={'fa695f'} color={'#ffff'} height={60}>Perfil</Header>

      <Container>
        <Pfp />
        <Input icon={'user'} placeholder='Seu nome' placeholderTextColor="#00000050" width={230} height={35} />
        <Input icon={'envelope'} placeholder='Email' placeholderTextColor="#00000050" width={230} height={35} />
        <Input icon={'phone'} placeholder='Telefone' placeholderTextColor="#00000050" width={230} height={35} />
        <Input icon={'credit-card'} placeholder='Cartão' placeholderTextColor="#00000050" width={230} height={35} />

        <Row>
          <Button width={130} marginX={10}  marginY={10} height={30} background={'bfbfbf'}>Cancelar</Button>
          <Button width={130} marginX={10}  marginY={10} height={30} background={'fa695f'}>Salvar</Button>
        </Row>
      </Container>

      <Cart/>

      <Menu />
    </>
  );
}

export default Profile;
