import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  padding: 15px;
`;

export const Center = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-top-color: #e3e3e3;
  border-top-width: 1px;
  border-bottom-color: #e3e3e3;
  border-bottom-width: 1px;
  padding: 20px;
  flex-direction: column;
`;

export const Text = styled.Text`
  font-size: 15px;
`;

export const P = styled.Text`
  font-size: 15px;
  color: white;
`;

export const Products = styled.View`
  width: 190px;
  height: 90px;
  margin-bottom: 10px;
  margin-left: 24px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const Col = styled.View`
  margin-left: 10px;
  padding: 15px;
  flex-direction: column;
  justify-content: space-around;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  }
})`
  width: 100%;
  height: 100%;
`;

export const Total = styled.View`
  background: #fa695f;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;
  position: relative;
  margin-bottom: 50px;
`;
