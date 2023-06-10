import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import CardContainer from '../../components/CardContainer';
import GreenButton from '../../components/GreenButton';
import InputWithLabel from '../../components/InputWithLabel';
import FormTextInput from '../../components/TextInput';
import {VaccineData} from '../../data/mockVaccine';
import {style} from './VaccineList.style';
export default function VaccineList(props) {
  const [search, setSearch] = useState('');
  const [currentData, setCurrentData] = useState(VaccineData);
  const insets = useSafeAreaInsets();
  const data = [
    {
      id: '1',
      name: 'BCG',
      dose: '1a. dose',
      dateTaken: new Date(),

      nextDose: new Date(),
    },
    {
      id: '2',
      name: 'Febre amarela',
      dose: 'Dose única',
      dateTaken: new Date(),
    },
    {
      id: '3',
      name: 'Hepatite B',
      dose: '2a. dose',
      dateTaken: new Date(),
    },
    {
      id: '4',
      name: 'Poliomelite',
      dose: 'Dose única',
      dateTaken: new Date(),
      nextDose: new Date(),
    },
    {
      id: '5',
      name: 'Hepatite B',
      dose: '2a. dose',
      dateTaken: new Date(),
    },
    {
      id: '6',
      name: 'Poliomelite',
      dose: 'Dose única',
      dateTaken: new Date(),
      nextDose: new Date(),
    },
    {
      id: '7',
      name: 'Hepatite B',
      dose: '2a. dose',
      dateTaken: new Date(),
    },
    {
      id: '8',
      name: 'Poliomelite',
      dose: 'Dose única',
      dateTaken: new Date(),
      nextDose: new Date(),
    },
  ];
  const user = useSelector(state => state.user);
  const vaccines = useSelector(state => state.vaccine);
  console.log('here', user);
  console.log('vaccine', vaccines);
  useEffect(() => {
    if (search) {
      let filteredVaccine = VaccineData.filter(item =>
        item.name.includes(search),
      );
      console.log(filteredVaccine);
      setCurrentData(filteredVaccine);
    } else {
      setCurrentData(VaccineData);
    }
  }, [search, VaccineData]);

  return (
    <View
      style={{
        ...style.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <View style={style.contentContainer}>
        <View style={style.inputsGroup}>
          <InputWithLabel label="">
            <FormTextInput
              isSecure={false}
              value={search}
              setValue={setSearch}
              placeHolder="PESQUISAR VACINA..."
            />
            <Icon
              name="search"
              size={28}
              style={{position: 'absolute', right: 0}}
              color="#8B8B8B"
            />
          </InputWithLabel>
          <CardContainer data={currentData} />
          <View style={style.buttonGroup}>
            <GreenButton
              text="Nova vacina"
              onPress={() => {
                props.navigation.navigate('NewVaccine');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
