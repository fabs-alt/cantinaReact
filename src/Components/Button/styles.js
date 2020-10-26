import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  margin: ${({ marginX, marginY }) => `${marginY || 0}px ${marginX || 0}px`};

  ${({ width }) => width && css`
    width: ${`${width}px`};
  `}
  ${({ height }) => height && css`
    height: ${`${height}px`};
  `}

  ${({ background }) => background && css`
    background: ${`#${background || d99800}`};
  `}

  padding: 1px 0;
  border-radius: 100px;
  align-self: center;
`;

export const Text = styled.Text`
  color: ${({ textColor }) => textColor || 'white' };
  font-size: 14px;
`;
