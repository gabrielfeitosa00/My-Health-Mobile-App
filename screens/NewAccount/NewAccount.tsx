import dayjs from 'dayjs';

import {createUserWithEmailAndPassword} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import {style} from './NewAccount.styles';

import {useCallback, useState} from 'react';
import {Alert, View} from 'react-native';
import {DatePickerModal} from 'react-native-paper-dates';
import Icon from 'react-native-vector-icons/FontAwesome';
import GreenButton from '../../components/GreenButton';
import InputWithLabel from '../../components/InputWithLabel';
import RadioButtons from '../../components/RadioButton';
import FormTextInput from '../../components/TextInput';
import {auth, db} from '../../firebase/firebaseApp';

export default function NewAccount(props) {
  const radioButtomItems = [{value: 'Masculino'}, {value: 'Feminino'}];
  const [name, setName] = useState('');
  const [dateString, setDateString] = useState('');
  const [checked, setChecked] = useState('Masculino');

  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    params => {
      setOpen(false);
      setDate(params.date);
      const formatedDate = dayjs(params.date).format('DD/MM/YY');
      setDateString(formatedDate);
    },
    [setOpen, setDate],
  );

  const handleConfirmAccount = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'user', user.user.uid), {
        id: user.user.uid,
        name,
        sex: checked,
        birthday: date,
        email,
      });

      props.navigation.pop();
    } catch (error) {
      Alert.alert('Erro ao cadastrar usuário', JSON.stringify(error), [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <View style={style.inputsGroup}>
          <InputWithLabel label="Nome Completo">
            <FormTextInput isSecure={false} value={name} setValue={setName} />
          </InputWithLabel>

          <InputWithLabel label="Sexo">
            <RadioButtons
              items={radioButtomItems}
              checked={checked}
              setChecked={setChecked}
            />
          </InputWithLabel>

          <InputWithLabel label="Data de Nascimento">
            <FormTextInput
              isSecure={false}
              isEditable={false}
              value={dateString}
              setValue={setDateString}
            />
            <Icon
              name="calendar"
              size={28}
              style={{position: 'absolute', right: 0}}
              onPress={() => setOpen(true)}
            />
            <DatePickerModal
              locale="pt"
              mode="single"
              visible={open}
              onDismiss={onDismissSingle}
              date={date}
              onConfirm={onConfirmSingle}
              label={undefined}
            />
          </InputWithLabel>
          <InputWithLabel label="E-mail">
            <FormTextInput value={email} setValue={setEmail} isSecure={false} />
          </InputWithLabel>
          <InputWithLabel label="Senha">
            <FormTextInput
              value={password}
              setValue={setPassword}
              isSecure={true}
            />
          </InputWithLabel>
          <InputWithLabel label="RepetirSenha">
            <FormTextInput
              value={passwordConfirm}
              setValue={setPasswordConfirm}
              isSecure={true}
            />
          </InputWithLabel>
        </View>

        <View style={style.buttonGroup}>
          <GreenButton text="Cadastrar" onPress={handleConfirmAccount} />
        </View>
      </View>
    </View>
  );
}
