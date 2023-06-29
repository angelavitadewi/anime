import styled from '@emotion/styled';
import colors from '../../../theme/colors';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PaginateCtn = styled.div`
  display: flex;
`;

interface IRoundEffectProps {
  isActive?: boolean;
}

export const RoundEffect = styled.div`
  color: ${({ isActive }: IRoundEffectProps) => (isActive ? colors.white : colors.grayDark)};
  background: ${({ isActive }: IRoundEffectProps) => (isActive ? colors.grayDark : colors.white)};
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 9px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  text-decoration: none;
  &:hover {
    text-decoration: none;
    background: ${colors.grayDark};
    color: ${colors.white};
  }
`;
