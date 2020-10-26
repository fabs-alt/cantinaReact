import styled from 'styled-components/native';

export const Products = styled.View`
  width: 100%;
  height: 70px;
  margin-bottom: 5px;
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 13px;
  padding-right: 10px;
`;

export const Col = styled.View`
  margin-left: 10px;
  padding: 15px;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: -5px;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  }
})`
  width: 100%;
`;

