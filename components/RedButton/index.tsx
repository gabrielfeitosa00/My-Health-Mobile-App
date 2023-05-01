import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';
interface IRedButtonProps {
  text: string;
  onPress?: () => void;
  icon?: React.ReactNode;
}
export default function RedButton({text, icon, onPress}: IRedButtonProps) {
  return (
    <TouchableOpacity style={style.buttonRed} onPress={onPress}>
      {icon}
      <Text style={style.buttonText}> {text}</Text>
    </TouchableOpacity>
  );
}
