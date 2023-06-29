import styled from '@emotion/styled';
import colors from '../../theme/colors';
import { Link } from 'react-router-dom';
import empty from '../../assets/image/empty.png';

const CardItem = styled.li`
  display: flex;
  padding: 1rem;
  @media (min-width: 0rem) {
    width: 80%;
  }
  @media (min-width: 40rem) {
    width: 40%;
  }
  @media (min-width: 56rem) {
    width: 25%;
  }
`;
const CardWrapper = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;
export const CardItemTitle = styled.div`
  color: ${colors.grayDark};
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
`;

export interface ICardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  link: string;
}

export const Card = ({ title, link, image }: ICardProps) => (
  <CardItem>
    <CardWrapper>
      <Link to={link}>
        <img src={image ? image : empty} alt={title} width='100%' />
      </Link>
      <CardContent>
        <CardItemTitle>{title}</CardItemTitle>
      </CardContent>
    </CardWrapper>
  </CardItem>
);
