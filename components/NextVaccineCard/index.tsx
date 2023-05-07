import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';
export interface INextVaccineCardProps {
  id: string;
  name: string;
  nextDose: Date;
}
export default function NextVaccineCard({
  name,
  nextDose,
  id,
}: INextVaccineCardProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        navigation.navigate('EditVaccine', {id});
      }}>
      <Text style={style.title}>{name}</Text>
      <Text style={style.dateText}>{dayjs(nextDose).format('DD/MM/YY')}</Text>
    </TouchableOpacity>
  );
}
