import React from 'react';
import {TextInput} from 'react-native';
import {style} from './style';
interface IFormTextInput {
  isSecure: boolean;
}
export default function FormTextInput({isSecure}: IFormTextInput) {
  return <TextInput secureTextEntry={isSecure} style={style.input} />;
}
