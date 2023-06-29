import styled from '@emotion/styled';
import { Button } from '../Button/Button';
import colors from '../../theme/colors';
import { useState } from 'react';
import { addCollections, checkIfDuplicated } from '../../helper/helper';
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';
import { setCollection } from '../../config/redux/Action/collectionAction';
import { Alert } from '../Alert/Alert';
import { VariantColor } from '../../theme/enums';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Input = styled.input`
  border: 1px solid ${colors.grayLight};
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
`;

const AddCollection = (props: any) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const addCollection = (event: any) => {
    event.preventDefault();
    if (checkIfDuplicated(value, _.get(props, 'collectionList', []))) {
      setError('Name of Collection Must Unique');
    } else if (value && !error) {
      const newCollections = addCollections(value, _.get(props, 'collectionList', []));
      setCollection(dispatch, newCollections);
      setValue('');
      props.onClosed();
    }
  };

  const handleOnChange = (e: any) => {
    setError('');
    setValue(e.target.value);
  };

  return (
    <ColumnContainer>
      {error && (
        <Alert variant={VariantColor.error} fullWidth={true}>
          {error}
        </Alert>
      )}
      <Form onSubmit={addCollection}>
        <Input
          value={value}
          onChange={handleOnChange}
          pattern='[a-zA-Z0-9 ]+'
          title='No special character are allowed'
        />

        <Button>Submit</Button>
      </Form>
    </ColumnContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    collectionList: state.collection.collectionList,
  };
};

export default connect(mapStateToProps, null)(AddCollection);
