import React from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import {style} from './style';
interface IRadioButtonItem {
  value: string;
}
interface IRadioButtonProps {
  items: IRadioButtonItem[];
  checked: string;
  setChecked: (value: string) => void;
}
export default function RadioButtons({
  items,
  checked,
  setChecked,
}: IRadioButtonProps) {
  return (
    <View style={style.inputContainer}>
      {items.map(item => {
        return (
          <View style={style.radioOption}>
            <Text style={style.radioOptionLabel}> {item.value} </Text>
            <RadioButton
              value={item.value}
              status={checked === item.value ? 'checked' : 'unchecked'}
              onPress={() => setChecked(item.value)}
              color="#419ED7"
              uncheckedColor="#FFFFFF"
            />
          </View>
        );
      })}
    </View>
  );
}
