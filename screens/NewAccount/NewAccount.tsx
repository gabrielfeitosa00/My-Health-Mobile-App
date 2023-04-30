import {useState} from 'react';
import {View} from 'react-native';
import GreenButton from '../../components/GreenButton';
import InputWithLabel from '../../components/InputWithLabel';
import RadioButtons from '../../components/RadioButton';
import FormTextInput from '../../components/TextInput';
import {style} from './NewAccount.styles';

export default function NewAccount() {
  const radioButtomItems = [{value: 'Masculino'}, {value: 'Feminino'}];
  const [checked, setChecked] = useState('Masculino');
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <View style={style.inputsGroup}>
          <InputWithLabel label="Nome Completo">
            <FormTextInput isSecure={false} />
          </InputWithLabel>
          <InputWithLabel label="Sexo">
            <RadioButtons
              items={radioButtomItems}
              checked={checked}
              setChecked={setChecked}
            />
          </InputWithLabel>
        </View>

        <View style={style.buttonGroup}>
          <GreenButton
            text="Cadastrar"
            onPress={() => {
              props.navigation.pop();
            }}
          />
        </View>
      </View>
    </View>
  );
}
