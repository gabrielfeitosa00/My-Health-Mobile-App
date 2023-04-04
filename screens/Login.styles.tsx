import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  title: {
    color: '#419ED7',
    fontSize: 50,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  description: {
    color: '#419ED7',
    fontSize: 35,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    marginBottom: 60,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    color: '#3F92C5',
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export {style};
