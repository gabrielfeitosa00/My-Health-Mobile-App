import {Image, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BlueButton from '../../components/BlueButton';
import GrayButton from '../../components/GrayButton';
import GreenButton from '../../components/GreenButton';
import InputWithLabel from '../../components/InputWithLabel';
import FormTextInput from '../../components/TextInput';
import {style} from './Login.styles';

export default function Login(props) {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../resources/vaccine-doctor.jpg')}
        style={style.backgroundImage}>
        <LinearGradient
          style={style.gradient}
          colors={['rgba(245, 246, 252, 0.52)', 'rgba(185, 166, 181, 0.73)']}>
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
              <FormTextInput isSecure={false} />
            </InputWithLabel>
            <InputWithLabel label="Senha">
              <FormTextInput isSecure={true} />
            </InputWithLabel>
          </View>

          <View style={style.buttonGroup}>
            <GreenButton text="Entrar" />
            <BlueButton text="Criar minha conta" />
            <GrayButton
              text="Esqueci minha senha"
              onPress={() => {
                props.navigation.push('RecoverPass');
              }}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
