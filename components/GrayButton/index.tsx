import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';
interface IGrayButtonProps {
  text: string;
}
export default function GrayButton({text}: IGrayButtonProps) {
  return (
    <TouchableOpacity style={style.buttonGray}>
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
