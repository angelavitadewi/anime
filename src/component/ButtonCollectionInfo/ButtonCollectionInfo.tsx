import { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { checkIfCollected } from '../../helper/helper';
import { ColumnContainer } from '../AddCollection/AddCollection';

const ButtonCollectionInfo = (props: any) => {
  const [show, setShow] = useState(false);
  const onClosed = () => {
    setShow(false);
  };
  const onOpen = () => {
    setShow(true);
  };
  return (
    <>
      <Button onClick={onOpen}>Collection Info</Button>
      <Modal show={show} onClosed={onClosed} modalTitle='Collection Info'>
        <ColumnContainer>
          {_.get(props, 'collectionList', []).map(
            (item: any, index: number) =>
              checkIfCollected(props.id, item) && (
                <Link to={`/collections/${item.id}`} key={index}>
                  {item.name}
                </Link>
              ),
          )}
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

export default connect(mapStateToProps, null)(ButtonCollectionInfo);
