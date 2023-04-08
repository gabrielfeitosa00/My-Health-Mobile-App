import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './Login.styles';

export default function Login() {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../resources/vaccine-doctor.jpg')}
        style={{height: '100%', width: '100%'}}>
        <LinearGradient
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
          colors={['rgba(245, 246, 252, 0.52)', 'rgba(185, 166, 181, 0.73)']}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 60,
            }}>
            <Image
              source={require('../resources/icon-vaccine.png')}
              style={{width: 40, height: 40}}
            />
            <Text style={style.title}>MyHealth</Text>
          </View>
          <Text style={style.description}>
            Controle as suas vacinas e fique seguro
          </Text>

          <View
            style={{
              width: '93%',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <View style={style.inputContainer}>
              <Text style={style.label}>E-Mail</Text>

              <TextInput style={style.input} />
            </View>
            <View style={style.inputContainer}>
              <Text style={style.label}>Senha</Text>

              <TextInput secureTextEntry={true} style={style.input} />
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',

              height: 250,
              marginTop: 30,
            }}>
            <TouchableOpacity style={style.buttonGreen}>
              <Text style={style.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonBlue}>
              <Text style={style.buttonText}>Criar minha conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonGray}>
              <Text style={style.buttonText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
