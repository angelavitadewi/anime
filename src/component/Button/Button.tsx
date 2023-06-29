import styled from '@emotion/styled';
import colors from '../../theme/colors';
import { VariantColor } from '../../theme/enums';

interface IButtonProps {
  variant?: VariantColor;
}

export const Button = styled.button`
  background-color: ${({ variant }: IButtonProps) => (variant ? colors[variant] : 'white')};
  border: 1px solid ${colors.grayLight};
  border-radius: 1rem;
  color: ${({ variant }: IButtonProps) => (variant ? 'white' : colors.grayDark)};
  padding: 0.5rem 1.5rem;
  cursor: pointer;
`;
