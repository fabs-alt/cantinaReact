import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fa695f;
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

export const Text = styled.Text`
  color: white;
  font-size: 13px;
`;

export const ItemContainer = styled.TouchableOpacity`
  background-color: #fa695f;
  width: 90px;
  height: 90px;
  border-radius: 10px;
  margin: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  }
})`
  width: 100%;
`;
