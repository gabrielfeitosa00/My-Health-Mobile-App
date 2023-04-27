import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {Provider as PaperProvider} from 'react-native-paper';
import Navigation from './navigation/RootNavigator';
function App(): JSX.Element {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

export default App;
