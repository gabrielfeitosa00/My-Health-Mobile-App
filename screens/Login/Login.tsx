import {Image, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {signInWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BlueButton from '../../components/BlueButton';
import GrayButton from '../../components/GrayButton';
import GreenButton from '../../components/GreenButton';
import InputWithLabel from '../../components/InputWithLabel';
import FormTextInput from '../../components/TextInput';
import {auth} from '../../firebase/firebaseApp';
import {style} from './Login.styles';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const insets = useSafeAreaInsets();
  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      console.log('Usuário criado com sucesso: ' + JSON.stringify(user));
      props.navigation.push('Drawer');
    } catch (error) {
      console.log('Erro ao cadastrar usuário: ' + JSON.stringify(error));
    }
  };
  return (
    <View
      style={{
        ...style.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <ImageBackground
        source={require('../../resources/vaccine-doctor.jpg')}
        style={style.backgroundImage}>
        <LinearGradient
          style={style.gradient}
          colors={['rgba(245, 246, 252, 0.52)', 'rgba(185, 166, 181, 0.73)']}>
          <View style={style.contentContainer}>
            <View style={style.titleContainer}>
              <Image
                source={require('../../resources/icon-vaccine.png')}
                style={style.titleIcon}
              />
              <Text style={style.title}>MyHealth</Text>
            </View>
            <Text style={style.description}>
              Controle as suas vacinas e fique seguro
            </Text>

            <View style={style.inputsGroup}>
              <InputWithLabel label="E-mail">
                <FormTextInput
                  value={email}
                  setValue={setEmail}
                  isSecure={false}
                />
              </InputWithLabel>
              <InputWithLabel label="Senha">
                <FormTextInput
                  value={password}
                  setValue={setPassword}
                  isSecure={true}
                />
              </InputWithLabel>
            </View>

            <View style={style.buttonGroup}>
              <GreenButton text="Entrar" onPress={handleLogin} />
              <BlueButton
                text="Criar minha conta"
                onPress={() => {
                  props.navigation.push('NewAccount');
                }}
              />
              <GrayButton
                text="Esqueci minha senha"
                onPress={() => {
                  props.navigation.push('RecoverPass');
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
