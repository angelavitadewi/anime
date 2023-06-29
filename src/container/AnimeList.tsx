import { useQuery } from '@apollo/client';
import { GET_ANIME } from '../queries/AnimeQueries';
import Wrapper from '../component/Wrapper/Wrapper';
import _ from 'lodash';
import { Card } from '../component/Card/Card';
import usePagination from '../hooks/usePagination';
import { Pagination } from '../component/Pagination/Pagination';
import { Center } from '../component/Center/Center';

const AnimeList = () => {
  const { meta, handlePageChanged } = usePagination();

  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { ...meta, perPage: 10 },
  });
  return (
    <>
      <Wrapper loading={loading} error={error?.message} />
      {data && (
        <>
          <Center>
            {_.get(data, 'Page.media', []).map((item: any, index: number) => (
              <Card
                key={index}
                image={_.get(item, 'coverImage.large', '')}
                title={_.get(item, 'title.userPreferred', '')}
                link={`anime/${item.id}`}
              />
            ))}
          </Center>
          <br />
          <Pagination
            handlePageChanged={handlePageChanged}
            page={_.get(data, 'Page.pageInfo.currentPage', 0)}
            total={_.get(data, 'Page.pageInfo.total', 0)}
            perPage={_.get(data, 'Page.pageInfo.perPage', 0)}
          />
        </>
      )}
    </>
  );
};

export default AnimeList;
