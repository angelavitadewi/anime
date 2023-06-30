import { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { VariantColor } from '../../theme/enums';
import { ColumnContainer } from '../AddCollection/AddCollection';
import { Center } from '../Center/Center';
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';
import { removeCollectionById } from '../../helper/helper';
import { setCollection } from '../../config/redux/Action/collectionAction';

const RemoveCollection = (props: any) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const onClosed = () => {
    setShow(false);
  };
  const onOpen = () => {
    setShow(true);
  };
  const handleRemove = () => {
    const newCollections = removeCollectionById(props.id, _.get(props, 'collectionList', []));
    setCollection(dispatch, newCollections);
    onClosed();
  };
  return (
    <>
      <Button variant={VariantColor.error} onClick={onOpen}>
        Remove
      </Button>
      <Modal show={show} onClosed={onClosed} modalTitle='Remove Collection'>
        <ColumnContainer>
          <Center>Are you sure you want to remove {props.name}?</Center>
          <Button onClick={handleRemove}>Yes</Button>
        </ColumnContainer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    collectionList: state.collection.collectionList,
  };
};

export default connect(mapStateToProps, null)(RemoveCollection);
