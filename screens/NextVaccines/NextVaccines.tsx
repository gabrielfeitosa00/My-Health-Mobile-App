import {View} from 'react-native';
import GreenButton from '../../components/GreenButton';
import NextVaccineCardContainer from '../../components/NextVaccineContainer';
import {style} from './NextVaccines.styles';

export default function NextVaccines(props) {
  const data = [
    {
      id: '1',
      name: 'BCG',
      nextDose: new Date(),
    },
    {
      id: '2',
      name: 'Febre amarela',
      nextDose: new Date(),
    },
    {
      id: '3',
      name: 'Hepatite B',
      nextDose: new Date(),
    },
    {
      id: '4',
      name: 'Poliomelite',
      nextDose: new Date(),
    },
    {
      id: '5',
      name: 'Poliomelite',
      nextDose: new Date(),
    },
    {
      id: '6',
      name: 'Poliomelite',
      nextDose: new Date(),
    },
    {
      id: '6',
      name: 'Poliomelite',
      nextDose: new Date(),
    },
    {
      id: '7',
      name: 'Poliomelite',
      nextDose: new Date(),
    },
    {
      id: '8',
      name: 'Poliomelite',
      nextDose: new Date(),
    },
    {
      id: '9',
      name: 'Poliomelite',
      nextDose: new Date(),
    },
  ];
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <NextVaccineCardContainer data={data} />
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
  );
}
