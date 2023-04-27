import {Image, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BlueButton from '../../components/BlueButton';
import GrayButton from '../../components/GrayButton';
import GreenButton from '../../components/GreenButton';
import InputWithLabel from '../../components/InputWithLabel';
import FormTextInput from '../../components/TextInput';
import {style} from './Login.styles';
export default function Login(props) {
  const insets = useSafeAreaInsets();
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
                <FormTextInput isSecure={false} />
              </InputWithLabel>
              <InputWithLabel label="Senha">
                <FormTextInput isSecure={true} />
              </InputWithLabel>
            </View>

            <View style={style.buttonGroup}>
              <GreenButton
                text="Entrar"
                onPress={() => {
                  props.navigation.push('Drawer');
                }}
              />
              <BlueButton text="Criar minha conta" />
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
