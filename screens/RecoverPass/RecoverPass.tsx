import {sendPasswordResetEmail} from 'firebase/auth';
import {useState} from 'react';
import {View} from 'react-native';
import GreenButton from '../../components/GreenButton';
import InputWithLabel from '../../components/InputWithLabel';
import FormTextInput from '../../components/TextInput';
import {auth} from '../../firebase/firebaseApp';
import {style} from './RecoverPass.styles';

export default function RecoverPass(props) {
  const [email, setEmail] = useState('');
  const handleResetPass = async () => {
    try {
      await sendPasswordResetEmail(auth, email);

      console.log('Usuário criado com sucesso: ' + JSON.stringify(user));
      props.navigation.pop();
    } catch (error) {
      console.log('Erro ao cadastrar usuário: ' + JSON.stringify(error));
    }
  };
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <View style={style.inputsGroup}>
          <InputWithLabel label="E-mail">
            <FormTextInput isSecure={false} value={email} setValue={setEmail} />
          </InputWithLabel>
        </View>

        <View style={style.buttonGroup}>
          <GreenButton text="Recuperar Senha" onPress={handleResetPass} />
        </View>
      </View>
    </View>
  );
}
