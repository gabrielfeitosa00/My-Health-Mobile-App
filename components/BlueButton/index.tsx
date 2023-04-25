import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';
interface IBlueButtonProps {
  text: string;
  onPress?: () => void;
}
export default function BlueButton({text, onPress}: IBlueButtonProps) {
  return (
    <TouchableOpacity style={style.buttonBlue} onPress={onPress}>
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
