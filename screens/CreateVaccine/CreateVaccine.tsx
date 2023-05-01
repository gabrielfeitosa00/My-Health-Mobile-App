import dayjs from 'dayjs';
import {useCallback, useState} from 'react';
import {View} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';
import {DatePickerModal} from 'react-native-paper-dates';
import Icon from 'react-native-vector-icons/FontAwesome';
import GreenButton from '../../components/GreenButton';
import ImagePicker from '../../components/ImagePicker';
import InputWithLabel from '../../components/InputWithLabel';
import RadioButtons from '../../components/RadioButton';
import FormTextInput from '../../components/TextInput';
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
              locale="pt"
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
              locale="pt"
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
