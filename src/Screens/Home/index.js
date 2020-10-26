import React from 'react';

import Menu from '../../Components/Menu';
import InfoMenu from '../../Components/InfoMenu';
import Header from '../../Components/Header';

import { Container, Text } from './styles';

const Home = () => {

  const image = {uri: 'https://www.cakolanches.com.br/novo/wp-content/uploads/2020/02/banner_site_mobile.jpg'};

  return(
    <Container source={image}>
      <Header background={'fa695f'} color={'#ffff'} height={60}>Nome do aplicativo</Header>
      <InfoMenu/>
      <Menu />
    </Container>
  );
}

export default Home;
