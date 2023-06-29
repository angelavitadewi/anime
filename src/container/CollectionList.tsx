import { connect } from 'react-redux';
import _ from 'lodash';
import { Card } from '../component/Card/Card';
import { Center } from '../component/Center/Center';
import { AddCollectionModal } from '../component/AddCollection/AddCollectionModal';

const CollectionList = (props: any) => {
  return (
    <>
      <AddCollectionModal />
      <Center>
        {_.get(props, 'collectionList', []).map((item: any, index: number) => (
          <Card
            key={index}
            image={_.get(item, 'movies[0].coverImage.extraLarge', '')}
            title={_.get(item, 'name', '')}
            link={`${item.id}`}
          />
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

export default connect(mapStateToProps, null)(CollectionList);
