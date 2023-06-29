import { useQuery } from '@apollo/client';
import { GET_ANIME_DETAIL } from '../queries/AnimeQueries';
import Wrapper from '../component/Wrapper/Wrapper';
import _ from 'lodash';
import { Center } from '../component/Center/Center';
import { DetailCard } from '../component/DetailCard/DetailCard';
import { useParams } from 'react-router-dom';

const AnimeDetail = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_ANIME_DETAIL, { variables: params });
  return (
    <>
      <Wrapper loading={loading} error={error} />
      {data && (
        <Center>
          {_.get(data, 'Page.media', []).map((item: any, index: number) => (
            <DetailCard key={index} data={item} />
          ))}
        </Center>
      )}
    </>
  );
};

export default AnimeDetail;
