import React from 'react';
import ListItem from './ListItem';
import { ColumnContainer } from '../AddCollection/AddCollection';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';
import { addMovieToCollection, checkIfCollected, removeMovieToCollection } from '../../helper/helper';
import { setCollection } from '../../config/redux/Action/collectionAction';

const Multicheckbox = (props: any) => {
  const dispatch = useDispatch();
  const handleCheckboxChange = (e: any, item: any) => {
    const oldCollection = _.get(props, 'collectionList', []);
    let newCollections = [];
    if (e.target.checked) {
      newCollections = _.uniqBy([...oldCollection, addMovieToCollection(props.movieDetail, item)], 'id');
      setCollection(dispatch, newCollections);
    } else {
      newCollections = _.uniqBy([...oldCollection, removeMovieToCollection(props.movieDetail, item)], 'id');
    }
    setCollection(dispatch, newCollections);
  };

  const checkboxItems = () => {
    return (
      <>
        {_.get(props, 'collectionList', []).map((item: any, index: number) => (
          <ListItem
            key={index}
            text={item.name}
            handleOnChange={(e) => handleCheckboxChange(e, item)}
            selected={checkIfCollected(props.movieDetail.id, item)}
          ></ListItem>
        ))}
      </>
    );
  };

  return <ColumnContainer>{checkboxItems()}</ColumnContainer>;
};

const mapStateToProps = (state: any) => {
  return {
    collectionList: state.collection.collectionList,
  };
};

export default connect(mapStateToProps, null)(Multicheckbox);
