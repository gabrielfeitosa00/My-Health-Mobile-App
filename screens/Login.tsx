import React from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import {style} from './Login.styles';

export default function Login() {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../resources/vaccine-doctor.jpg')}
        style={{height: '100%'}}>
        <Text style={style.title}>Controle as suas vacinas e fique seguro</Text>

        <Text style={style.label}>E-Mail</Text>

        <TextInput style={style.input} />

        <Text style={style.label}>Senha</Text>

        <TextInput style={style.input} />
      </ImageBackground>
    </View>
  );
}
