import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import RecoverPass from '../screens/RecoverPass/RecoverPass';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecoverPass" component={RecoverPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
