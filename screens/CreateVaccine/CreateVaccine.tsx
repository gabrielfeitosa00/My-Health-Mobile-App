import dayjs from 'dayjs';
import {addDoc, collection} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {useCallback, useState} from 'react';
import {Alert, View} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';
import 'react-native-get-random-values';
import {DatePickerModal} from 'react-native-paper-dates';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import GreenButton from '../../components/GreenButton';
import ImagePicker from '../../components/ImagePicker';
import InputWithLabel from '../../components/InputWithLabel';
import RadioButtons from '../../components/RadioButton';
import FormTextInput from '../../components/TextInput';
import {db, storage} from '../../firebase/firebaseApp';
import {reducerSetvaccine} from '../../redux/vacineSlice';
import {style} from './CreateVaccine.style';
export default function CreateVaccine(props) {
  const radioButtomItems = [
    {value: '1.a Dose'},
    {value: '2.a Dose'},
    {value: '3.a Dose'},
    {value: 'Dose única'},
  ];
  const [vacina, setVacina] = useState('');

  const [checked, setChecked] = useState('1.a Dose');
  const [dateVaccineString, setDateVaccineString] = useState('');
  const [nextDateVaccineString, setNextDateVaccineString] = useState('');
  const [dateVaccine, setDateVaccine] = useState(undefined);
  const [nextDateVaccine, setNextDateVaccine] = useState<any>(undefined);
  const [open, setOpen] = useState(false);
  const [nextOpen, setNextOpen] = useState(false);
  const [fileResponse, setFileResponse] = useState(undefined);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onDismissNextSingle = useCallback(() => {
    setNextOpen(false);
  }, [setNextOpen]);

  const onConfirmSingle = useCallback(
    params => {
      setOpen(false);
      setDateVaccine(params.date);
      const formatedDate = dayjs(params.date).format('DD/MM/YY');
      setDateVaccineString(formatedDate);
    },
    [setOpen, setDateVaccine],
  );

  const onConfirmNextSingle = useCallback(
    params => {
      setNextOpen(false);
      setNextDateVaccine(params.date);
      const formatedDate = dayjs(params.date).format('DD/MM/YY');
      setNextDateVaccineString(formatedDate);
    },
    [setNextOpen, setNextDateVaccine],
  );
  const handleImageSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        type: [types.images],
      });
      setFileResponse(response.uri as any);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const handleSubmitVaccine = async () => {
    if (!fileResponse) {
      Alert.alert('Erro ao cadastrar vacina', 'O comprovante é obrigatório', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    try {
      if (!!vacina && !!dateVaccineString) {
        const file = await fetch(fileResponse);
        const blob = await file.blob();
        const filePath = `images/${uuidv4()}`;
        await uploadBytes(ref(storage, filePath), blob);
        const url = await getDownloadURL(ref(storage, filePath));
        const newVaccine = {
          id: uuidv4(),
          name: vacina,
          dose: checked,
          dateTaken: dateVaccine,
          nextDose: nextDateVaccine || null,
          url,
          filePath,
        };
        await addDoc(
          collection(db, 'user', user.userId, 'vaccine'),
          newVaccine,
        );
        const {dateTaken, nextDose, ...rest} = newVaccine;
        const serializedDate = dateTaken!.toString();
        const serializedNextDate = nextDose ? nextDose!.toString() : null;
        dispatch(
          reducerSetvaccine({
            ...rest,
            dateTaken: serializedDate,
            nextDose: serializedNextDate,
          }),
        );

        props.navigation.pop();
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao cadastrar vacina', JSON.stringify(error), [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <View style={style.inputsGroup}>
          <InputWithLabel label="Data de Vacinação">
            <FormTextInput
              isSecure={false}
              isEditable={false}
              value={dateVaccineString}
              setValue={setDateVaccineString}
            />
            <Icon
              name="calendar"
              size={28}
              style={{position: 'absolute', right: 0}}
              onPress={() => setOpen(true)}
            />
            <DatePickerModal
              mode="single"
              visible={open}
              onDismiss={onDismissSingle}
              date={dateVaccine}
              onConfirm={onConfirmSingle}
              label={undefined}
            />
          </InputWithLabel>
          <InputWithLabel label="Vacina">
            <FormTextInput
              isSecure={false}
              value={vacina}
              setValue={setVacina}
            />
          </InputWithLabel>

          <InputWithLabel label="Dose">
            <RadioButtons
              items={radioButtomItems}
              checked={checked}
              setChecked={setChecked}
            />
          </InputWithLabel>

          <InputWithLabel label="Comprovante">
            <ImagePicker onPress={handleImageSelection} uri={fileResponse} />
          </InputWithLabel>

          <InputWithLabel label="Próxima Vacinação">
            <FormTextInput
              isSecure={false}
              isEditable={false}
              value={nextDateVaccineString}
              setValue={setNextDateVaccineString}
            />
            <Icon
              name="calendar"
              size={28}
              style={{position: 'absolute', right: 0}}
              onPress={() => setNextOpen(true)}
            />
            <DatePickerModal
              mode="single"
              visible={nextOpen}
              onDismiss={onDismissNextSingle}
              date={nextDateVaccine}
              onConfirm={onConfirmNextSingle}
              label={undefined}
            />
          </InputWithLabel>
        </View>

        <View style={style.buttonGroup}>
          <GreenButton text="Cadastrar" onPress={handleSubmitVaccine} />
        </View>
      </View>
    </View>
  );
}
