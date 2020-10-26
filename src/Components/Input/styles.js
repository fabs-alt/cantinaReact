import styled from 'styled-components/native';

export const Touchable = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const Container = styled.View`
  border: 1px;
  margin: 5px;
  border-radius: 100px;
  padding: 4px 8px;
  border-color: #ffffff80;
  background-color: #ffffff80;
  align-self: center;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

export const Input = styled.TextInput`
  color: black;
`;
