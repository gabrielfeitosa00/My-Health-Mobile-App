import {FlatList} from 'react-native';
import Card, {ICardProps} from '../Card';
interface ICardContainer {
  data: ICardProps[];
}
export default function CardContainer({data}: ICardContainer) {
  return (
    <FlatList
      data={data}
      style={{height: 380}}
      columnWrapperStyle={{
        gap: 8,
      }}
      contentContainerStyle={{rowGap: 10}}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Card {...item} />}
      numColumns={2}
    />
  );
}
