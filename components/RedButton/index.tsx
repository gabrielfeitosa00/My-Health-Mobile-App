import { Text, TouchableOpacity } from 'react-native';
import { style } from './style';
interface IRedButtonProps {
  text: string;
  icon?:React.ReactNode
}
export default function RedButton({text,icon}: IRedButtonProps) {
  return (
   
      <TouchableOpacity style={style.buttonRed}>
       {icon} <Text style={style.buttonText}> {text}</Text>
      </TouchableOpacity>
      ;
    
  );
}
