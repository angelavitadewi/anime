import { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import Multicheckbox from '../Multicheckbox/Multicheckbox';
import { AddCollectionModal } from '../AddCollection/AddCollectionModal';
import { ColumnContainer } from '../AddCollection/AddCollection';

export const ButtonAddToCollection = (props: any) => {
  const [show, setShow] = useState(false);
  const onClosed = () => {
    setShow(false);
  };
  const onOpen = () => {
    setShow(true);
  };
  return (
    <>
      <Button onClick={onOpen}>Add To Collection</Button>
      <Modal show={show} onClosed={onClosed} modalTitle='Add To Collection'>
        <ColumnContainer>
          <AddCollectionModal />
          <Multicheckbox onClosed={onClosed} movieDetail={props.data} />
        </ColumnContainer>
      </Modal>
    </>
  );
};
