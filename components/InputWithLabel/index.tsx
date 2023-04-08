import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style';
interface IInputWithLabelProps {
  children: React.ReactNode;
  label: string;
}
export default function InputWithLabel({
  children,
  label,
}: IInputWithLabelProps) {
  return (
    <View style={style.inputContainer}>
      <Text style={style.label}>{label}</Text>
      {children}
    </View>
  );
}
