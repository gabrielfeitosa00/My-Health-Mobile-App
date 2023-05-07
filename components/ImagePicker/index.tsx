import {Image, Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';
interface IImagePicker {
  onPress: () => void;
  uri?: string;
}
export default function ImagePicker({onPress, uri}: IImagePicker) {
  return (
    <View style={style.pickerContainer}>
      <TouchableOpacity onPress={onPress} style={style.pickerButton}>
        <Text style={style.pickerText}>Selecionar imagem...</Text>
      </TouchableOpacity>
      {uri ? <Image source={{uri: uri}} style={style.pickerImage} /> : null}
    </View>
  );
}
