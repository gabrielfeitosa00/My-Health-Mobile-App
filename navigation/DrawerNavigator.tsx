import {createDrawerNavigator} from '@react-navigation/drawer';
import NextVaccines from '../screens/NextVaccines/NextVaccines';
import VaccineList from '../screens/VaccineList/VaccineList';
import CustomDrawer from './CustomDrawerComponent';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {
          color: '#419ED7',
          fontSize: 22,
          fontFamily: 'AveriaLibre-Regular',
        },
        drawerStyle: {backgroundColor: '#ADD4D0', width: '75%'},
        headerStyle: {
          backgroundColor: '#C1E7E3',
        },
        headerTitleStyle: {
          color: '#419ED7',
          fontWeight: '400',
          fontSize: 30,
          fontFamily: 'AveriaLibre-Regular',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Minhas Vacinas" component={VaccineList} />
      <Drawer.Screen name="Próximas Vacinas" component={NextVaccines} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
