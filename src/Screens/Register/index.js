import React from 'react';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Text, P } from './styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  const handleRegisterCardClick = () => {
    navigation.navigate('RegisterCard');
  };

  const image = { uri: "https://i.pinimg.com/originals/02/f6/b5/02f6b51906e833019ddebc723eea404d.jpg" };

  return(
    <Container source={image}>
      <Text>Seja bem-vindo</Text>
      <Input placeholder='Seu nome' width={200} placeholderTextColor="white" height={35} />
      <Input placeholder='Email' width={200} placeholderTextColor="white" height={35} />
      <Input placeholder='Senha' width={200} secureTextEntry={true} placeholderTextColor="white" height={35} />
      <Input placeholder='Confirme sua senha' width={200} secureTextEntry={true} placeholderTextColor="white" height={35} />

      <Button background={'d99800'} marginY={10} width={220} height={40} onPress={handleRegisterCardClick}>Cadastrar</Button>

    </Container>
  );
}

export default Home;
