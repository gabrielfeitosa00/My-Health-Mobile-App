import {FlatList, Text} from 'react-native';
import NextVaccineCard, {INextVaccineCardProps} from '../NextVaccineCard';
interface ICardContainer {
  data: INextVaccineCardProps[];
}
export default function NextVaccineCardContainer({data}: ICardContainer) {
  return (
    <FlatList
      data={data}
      style={{height: 450, width: '100%'}}
      contentContainerStyle={{
        rowGap: 13,
      }}
      keyExtractor={item => item.id}
      renderItem={({item}) => <NextVaccineCard {...item} />}
      ListEmptyComponent={
        <Text
          style={{
            color: '#419ED7',
            fontSize: 25,
            fontFamily: 'AveriaLibre-Regular',
            alignSelf: 'center',
          }}>
          Não há próximas vacinas!
        </Text>
      }
    />
  );
}
