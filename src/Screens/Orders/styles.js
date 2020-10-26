import styled from 'styled-components/native';

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  }
})`
  width: 100%;
`;

export const Col = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TextContainer = styled.View`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: white;
`;

export const P = styled.Text`
  font-size: 12px;
  color: white;
`;

export const Items = styled.View`
  align-self: center;
  width: 100%;
  color: white;
  padding: 5px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const GrayContainer = styled.View`
  background-color: #fa695f;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 190px;
  height: 90px;
  margin-bottom: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  flex-direction: row;
`;

export const BlackContainer = styled.View`
  background-color: black;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 110px;
  height: 90px;
  margin-bottom: 10px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
