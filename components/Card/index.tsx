import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';

export interface ICardProps {
  id: string;
  name: string;
  dose: string;
  dateTaken: Date;
  imageUri?: string;
  nextDose?: Date;
}
export default function Card({
  name,
  dose,
  dateTaken,
  id,
  nextDose,
}: ICardProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        navigation.navigate('EditVaccine', {id});
      }}>
      <Text style={style.vaccineTitle}> {name} </Text>
      <View style={style.doseContainer}>
        <Text style={style.doseText}>{dose}</Text>
      </View>
      <Text style={style.dateText}>{dayjs(dateTaken).format('DD/MM/YY')}</Text>
      <Image
        source={require('../../resources/vaccine-exemple.jpg')}
        style={style.image}
      />
      <View style={style.nextContainer}>
        <Text style={style.nextText}>
          {nextDose
            ? `Próxima dose em: ${dayjs(dateTaken).format('DD/MM/YY')}`
            : 'Não há próxima dose'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
