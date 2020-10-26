import React from 'react';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Text, P } from './styles';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  const handleRegisterClick = () => {
    navigation.navigate('Register');
  };

  const handleHomeClick = () => {
    navigation.navigate('Home');
  };

  const image = { uri: "https://i.pinimg.com/originals/02/f6/b5/02f6b51906e833019ddebc723eea404d.jpg" };

  return(
    <Container source={image}>
      <Text>Bem-vindo de Volta</Text>
      <Input placeholder='Seu nome' placeholderTextColor="white" width={200} height={35} />
      <Input placeholder='Senha' secureTextEntry={true} width={200} placeholderTextColor="white" height={35} />

      <Button background={'d99800'} marginY={10} width={220} height={40} onPress={handleHomeClick}>Entrar</Button>

      <TouchableOpacity>
        <P>Esqueci minha senha</P>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegisterClick}>
        <P>Crie uma conta</P>
      </TouchableOpacity>

    </Container>
  );
}

export default Home;