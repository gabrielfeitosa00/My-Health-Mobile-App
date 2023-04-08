import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';
interface IGreenButtonProps {
  text: string;
}
export default function GreenButton({text}: IGreenButtonProps) {
  return (
    <TouchableOpacity style={style.buttonGreen}>
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
