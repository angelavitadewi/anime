import styled from '@emotion/styled';
import colors from '../../theme/colors';
import { ReactNode } from 'react';
import { CardItemTitle } from '../Card/Card';

interface IModalProps {
  show: boolean;
  onClosed: () => void;
  children?: ReactNode;
  modalTitle?: string;
}

const MainModal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${colors.blackOpacity};
`;

const ModalContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  background-color: ${colors.white};
  margin: auto;
  padding: 2rem;
  border: 1px solid ${colors.grayLight};
  width: 50%;
  gap: 2rem;
`;
const ModalHeader = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
`;

const Close = styled.span`
  color: ${colors.gray};
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:active {
    color: ${colors.black};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Modal = (props: IModalProps) => {
  return (
    <>
      {props.show && (
        <MainModal>
          <ModalContent>
            <ModalHeader>
              <CardItemTitle>{props.modalTitle}</CardItemTitle> <Close onClick={props.onClosed}>&times;</Close>
            </ModalHeader>
            <div>{props.children}</div>
          </ModalContent>
        </MainModal>
      )}
    </>
  );
};
