import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';
interface IBlueButtonProps {
  text: string;
}
export default function BlueButton({text}: IBlueButtonProps) {
  return (
    <TouchableOpacity style={style.buttonBlue}>
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
