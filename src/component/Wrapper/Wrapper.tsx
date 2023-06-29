import { VariantColor } from '../../theme/enums';
import { Alert } from '../Alert/Alert';
import { Loader } from '../Loader/Loader';
import { Center } from '../Center/Center';

interface IProps {
  loading: boolean;
  error?: any;
}

const Wrapper = ({ loading, error }: IProps) => {
  return (
    <Center>
      {loading && <Loader />}
      {error && <Alert variant={VariantColor.error}>{error}</Alert>}
    </Center>
  );
};

export default Wrapper;
