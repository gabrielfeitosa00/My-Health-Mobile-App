import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import Navigation from './navigation/RootNavigator';
import {store} from './redux/store';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}

export default App;
