import React from 'react';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Text, P } from './styles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const image = { uri: "https://i.pinimg.com/originals/02/f6/b5/02f6b51906e833019ddebc723eea404d.jpg" };

  const navigation = useNavigation();

  const handleHomeClick = () => {
    navigation.navigate('Home');
  };

  return(
    <Container source={image}>
      <Text>Cadastre seu cartao</Text>
      <Input placeholder='Numero do cartão' placeholderTextColor="white" width={200} height={35} />
      <Input placeholder='Nome do cartão' placeholderTextColor="white" width={200} height={35} />
      <Input placeholder='Expira' placeholderTextColor="white" width={200} height={35} />
      <Input placeholder='Tipo do cartão' placeholderTextColor="white" width={200} height={35} />

      <Button background={'d99800'} marginY={10} width={220} height={40}>Cadastrar cartão</Button>

      <TouchableOpacity onPress={handleHomeClick}>
        <P>ENTRAR NA CONTA</P>
      </TouchableOpacity>

    </Container>
  );
}

export default Home;
