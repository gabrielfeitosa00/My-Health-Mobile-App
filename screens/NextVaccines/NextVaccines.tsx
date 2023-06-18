import {collection, onSnapshot, query, where} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import GreenButton from '../../components/GreenButton';
import NextVaccineCardContainer from '../../components/NextVaccineContainer';
import {db} from '../../firebase/firebaseApp';
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
  const [nextVaccines, setNextVaccines] = useState([]);
  const user = useSelector(state => state.user);
  useEffect(() => {
    const q = query(
      collection(db, 'user', user.userId, 'vaccine'),
      where('nextDose', '!=', null),
    );
    onSnapshot(q, snapshot => {
      const vaccine = [];

      snapshot.forEach(doc => {
        console.log(doc.data().dateTaken);
        vaccine.push({
          id: doc.id,
          name: doc.data().name,
          dose: doc.data().dose,
          dateTaken: doc.data().dateTaken.toDate(),
          nextDose: doc.data().nextDose ? doc.data().nextDose.toDate() : null,
          imageUri: doc.data().url,
        });
      });

      setNextVaccines(vaccine);
    });
  }, []);

  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <NextVaccineCardContainer data={nextVaccines} />
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
