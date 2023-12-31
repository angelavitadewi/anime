import styled from '@emotion/styled';
import colors from '../../theme/colors';
import _ from 'lodash';
import { ButtonAddToCollection } from '../ButtonAddToCollection/ButtonAddToCollection';
import { ColumnContainer } from '../AddCollection/AddCollection';
import ButtonCollectionInfo from '../ButtonCollectionInfo/ButtonCollectionInfo';

export const DetailCardWrapper = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-width: 50%;
  margin: 0.5rem 5rem;
`;
const DetailCardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  @media (min-width: 0rem) {
    width: 80%;
  }
  @media (min-width: 40rem) {
    width: 40%;
  }
  @media (min-width: 56rem) {
    width: 25%;
  }
  flex-direction: column;
  padding: 1rem;
`;
const DetailCardItemTitle = styled.div`
  color: ${colors.grayDark};
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const DetailCardItemDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
`;

interface IDetailCardProps {
  data: any;
}

export const DetailCard = ({ data }: IDetailCardProps) => (
  <DetailCardWrapper>
    <DetailCardContent>
      <img
        src={_.get(data, 'coverImage.extraLarge', '')}
        alt={_.get(data, 'title.romaji', '')}
        height='100%'
        width='100%'
      />
    </DetailCardContent>

    <DetailCardContent>
      <DetailCardItemTitle>{_.get(data, 'title.romaji', '')}</DetailCardItemTitle>
      <DetailCardItemDescription>
        <b>Description : </b>
        <br /> {_.get(data, 'description', '')}{' '}
      </DetailCardItemDescription>
      <DetailCardItemDescription>
        <b>Number of Episode : </b>
        <br /> {_.get(data, 'episodes', '')}{' '}
      </DetailCardItemDescription>
      <DetailCardItemDescription>
        <b>Genres : </b>
        <br /> {_.get(data, 'genres', []).toString()}{' '}
      </DetailCardItemDescription>
      <DetailCardItemDescription>
        <b>Popularity : </b>
        <br /> {_.get(data, 'popularity', '')}{' '}
      </DetailCardItemDescription>
      <ColumnContainer>
        <ButtonAddToCollection data={data} />
        <ButtonCollectionInfo id={data.id} />
      </ColumnContainer>
    </DetailCardContent>
  </DetailCardWrapper>
);
