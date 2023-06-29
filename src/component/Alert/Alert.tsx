import styled from '@emotion/styled';
import colors from '../../theme/colors';
import { VariantColor } from '../../theme/enums';
import { ReactNode } from 'react';

interface IAlertProps {
  variant: VariantColor;
  children?: ReactNode;
  fullWidth?: boolean;
}
export const Alert = styled.div`
  color: white;
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: ${(props: IAlertProps) => (props.fullWidth ? '100%' : '50%')};
  text-align: center;
  background: ${(props: IAlertProps) => colors[props.variant]};
`;
