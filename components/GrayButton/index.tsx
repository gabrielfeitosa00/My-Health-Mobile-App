import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';
interface IGrayButtonProps {
  text: string;
  onPress?: () => void;
}
export default function GrayButton({text, onPress}: IGrayButtonProps) {
  return (
    <TouchableOpacity style={style.buttonGray} on>
      <Text style={style.buttonText} onPress={onPress}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
