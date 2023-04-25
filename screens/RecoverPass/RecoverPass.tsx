import {Text, View} from 'react-native';
import GreenButton from '../../components/GreenButton';
import InputWithLabel from '../../components/InputWithLabel';
import FormTextInput from '../../components/TextInput';
import {style} from './RecoverPass.styles';

export default function RecoverPass(props) {
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <InputWithLabel label="E-mail">
          <FormTextInput isSecure={false} />
        </InputWithLabel>

        <GreenButton
          text="Recuperar Senha"
          onPress={() => {
            props.navigation.pop();
          }}
        />
      </View>
      <Text>RecoverPass</Text>
    </View>
  );
}
