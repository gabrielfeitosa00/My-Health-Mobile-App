import {TextInput} from 'react-native';
import {style} from './style';
interface IFormTextInput {
  isSecure: boolean;
  value: any;
  setValue: (value: any) => void;
  isEditable?: boolean;
  placeHolder?: string;
}
export default function FormTextInput({
  isSecure,
  isEditable = true,
  value,
  setValue,
  placeHolder,
}: IFormTextInput) {
  return (
    <TextInput
      secureTextEntry={isSecure}
      style={style.input}
      editable={isEditable}
      value={value}
      onChangeText={setValue}
      placeholder={placeHolder}
    />
  );
}
