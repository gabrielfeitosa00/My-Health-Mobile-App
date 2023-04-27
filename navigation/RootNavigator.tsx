import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
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
            title: 'Recover Password',
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
