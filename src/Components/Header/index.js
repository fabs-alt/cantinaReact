import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Text,
  IconContainer
} from './styles';

const Button = ({ nav = useNavigation(), iconColor, icon, children, height, background, color }) => (
  <Container height={height} background={background}>
    {icon && (
      <IconContainer onPress={nav.goBack}>
        <Icon name={icon} color={iconColor || '#000'} size={20}/>
      </IconContainer>
    )}
    {children && <Text color={color}>{children}</Text>}
  </Container>
);

export default Button;
