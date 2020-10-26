import React from 'react';

import {
  Container,
  Text,
} from './styles';

const Button = ({ color, background, width, height, marginX, marginY, children, onPress }) => (
  <Container color={color} background={background} width={width} height={height} marginX={marginX} marginY={marginY} onPress={onPress} >
    {children && <Text>{children}</Text>}
  </Container>
);

export default Button;
