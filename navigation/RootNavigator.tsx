import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateVaccine from '../screens/CreateVaccine/CreateVaccine';
import EditVaccine from '../screens/EditVaccine/EditVaccine';
import Login from '../screens/Login/Login';
import NewAccount from '../screens/NewAccount/NewAccount';
import RecoverPass from '../screens/RecoverPass/RecoverPass';
import DrawerNavigation from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecoverPass"
          component={RecoverPass}
          options={{
            title: 'Recuperar Senha',
            navigationBarHidden: true,
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
        />

        <Stack.Screen
          name="NewAccount"
          component={NewAccount}
          options={{
            title: 'Nova Conta',
            navigationBarHidden: true,
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
        />
        <Stack.Screen
          name="NewVaccine"
          component={CreateVaccine}
          options={{
            title: 'Nova Vacina',
            navigationBarHidden: true,
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
        />

        <Stack.Screen
          name="EditVaccine"
          component={EditVaccine}
          options={{
            title: 'Editar Vacina',
            navigationBarHidden: true,
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
