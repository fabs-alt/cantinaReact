import styled, {css} from 'styled-components/native';

export const Container = styled.View`

  ${({ background }) => background && css`
    background: ${`#${background || 'fa695f'}`};
  `}

  ${({ height }) => height && css`
    height: ${`${height}px`};
  `}

  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-color: white;
  border-bottom-width: 1px;
`;

export const Text = styled.Text`
  align-self: center;

  color: ${({ color }) => color };

  font-size: 20px;
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  left: 10;
  position: absolute;
  align-items: center;
  margin: 8px;
`;
