import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';
interface IGreenButtonProps {
  text: string;
  onPress?: () => void;
}
export default function GreenButton({text, onPress}: IGreenButtonProps) {
  return (
    <TouchableOpacity style={style.buttonGreen} onPress={onPress}>
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
