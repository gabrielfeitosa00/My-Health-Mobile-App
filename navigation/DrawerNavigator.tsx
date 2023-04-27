import {createDrawerNavigator} from '@react-navigation/drawer';
import NextVaccines from '../screens/NextVaccines/NextVaccines';
import VaccineList from '../screens/VaccineList/VaccineList';
import CustomDrawer from './CustomDrawerComponent';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: 'darkblue',
        drawerLabelStyle: {color: 'white'},
        drawerStyle: {backgroundColor: 'lightblue', width: '60%'},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Minhas Vacinas" component={VaccineList} />
      <Drawer.Screen name="Próximas Vacinas" component={NextVaccines} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
