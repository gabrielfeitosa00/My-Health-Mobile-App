import dayjs from 'dayjs';
import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style';
export interface INextVaccineCardProps {
  id: string;
  name: string;
  nextDose: Date;
}
export default function NextVaccineCard({
  name,
  nextDose,
}: INextVaccineCardProps) {
  return (
    <View style={style.container}>
      <Text style={style.title}>{name}</Text>
      <Text style={style.dateText}>{dayjs(nextDose).format('DD/MM/YY')}</Text>
    </View>
  );
}
