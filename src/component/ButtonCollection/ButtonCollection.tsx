import { Button } from '../Button/Button';

interface IButtonCollectionProps {
  data: any;
}

export const ButtonCollection = ({ data }: IButtonCollectionProps) => {
  const handleAddToCollection = () => {
    console.log(data);
  };
  return <Button onClick={handleAddToCollection}>Add To Collection</Button>;
};
