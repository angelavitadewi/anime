import _ from 'lodash';
import { Card } from '../component/Card/Card';
import { Center } from '../component/Center/Center';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import RemoveMovieFromCollection from '../component/RemoveMovieFromCollection/RemoveMovieFromCollection';

const CollectionDetail = (props: any) => {
  const params = useParams();
  const getMovieList = () => {
    return _.get(getCollection(), 'movies', []);
  };

  const getCollection = () => {
    return _.find(_.get(props, 'collectionList', []), params);
  };
  return (
    <>
      <Center>
        {getMovieList().map((item: any, index: number) => (
          <Card
            key={index}
            image={_.get(item, 'coverImage.extraLarge', '')}
            title={_.get(item, 'title.userPreferred', '')}
            link={`/anime/${item.id}`}
          >
            <RemoveMovieFromCollection collection={getCollection()} movieId={item.id} />
          </Card>
        ))}
      </Center>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    collectionList: state.collection.collectionList,
  };
};

export default connect(mapStateToProps, null)(CollectionDetail);
