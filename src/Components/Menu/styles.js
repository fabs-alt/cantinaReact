import styled from 'styled-components/native';

export const Navbar = styled.View`
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
  border-top-color: #e3e3e3;
  border-top-width: 1px;
`; 

export const Info = styled.View`
  width: 100%;
  height: 35%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: white;
  position: absolute;
  bottom: 0;
  margin-bottom: 52px;
  justify-content: space-around;
  padding: 10px;
  flex-direction: row;
`;

export const BlackContainer = styled.TouchableOpacity`
  background-color: black;
  width: 90px;
  border-radius: 10px;
`;

export const RedContainer = styled.TouchableOpacity`
  background-color: #bf0000;
  width: 90px;
  border-radius: 10px;
`;

export const YellowContainer = styled.TouchableOpacity`
  background-color: #e3df00;
  width: 90px;
  border-radius: 10px;
`;
