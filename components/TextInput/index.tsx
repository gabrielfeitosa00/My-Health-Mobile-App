import React from 'react';
import {TextInput} from 'react-native';
import {style} from './style';
interface IFormTextInput {
  isSecure: boolean;
  value: any;
  setValue: (value: any) => void;
  isEditable?: boolean;
}
export default function FormTextInput({
  isSecure,
  isEditable = true,
  value,
  setValue,
}: IFormTextInput) {
  return (
    <TextInput
      secureTextEntry={isSecure}
      style={style.input}
      editable={isEditable}
      value={value}
      onChangeText={setValue}
    />
  );
}
