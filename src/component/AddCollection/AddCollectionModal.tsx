import { useState } from 'react';
import { FlexContainer } from '../Pagination/SubcomponentPagination/SubcomponentPagination';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import AddCollection from './AddCollection';

export const AddCollectionModal = (props: any) => {
  const [show, setShow] = useState(false);
  const onClosed = () => {
    setShow(false);
  };
  const onOpen = () => {
    setShow(true);
  };
  return (
    <>
      <FlexContainer>
        <Button onClick={onOpen}>Add a Collection</Button>
        <Modal show={show} onClosed={onClosed} modalTitle='Add New Collection'>
          <AddCollection onClosed={onClosed} />
        </Modal>
      </FlexContainer>
    </>
  );
};
