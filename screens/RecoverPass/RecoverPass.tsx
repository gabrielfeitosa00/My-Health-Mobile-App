import {useState} from 'react';
import {View} from 'react-native';
import GreenButton from '../../components/GreenButton';
import InputWithLabel from '../../components/InputWithLabel';
import FormTextInput from '../../components/TextInput';
import {style} from './RecoverPass.styles';

export default function RecoverPass(props) {
  const [email, setEmail] = useState('');
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <View style={style.inputsGroup}>
          <InputWithLabel label="E-mail">
            <FormTextInput isSecure={false} value={email} setValue={setEmail} />
          </InputWithLabel>
        </View>

        <View style={style.buttonGroup}>
          <GreenButton
            text="Recuperar Senha"
            onPress={() => {
              props.navigation.pop();
            }}
          />
        </View>
      </View>
    </View>
  );
}
