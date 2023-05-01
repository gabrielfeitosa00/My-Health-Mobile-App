import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  pickerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    minHeight: 50,

    maxHeight: 400,
    flexGrow: 1,
  },
  pickerButton: {
    height: 40,
    backgroundColor: '#3F92C5',
    width: '85%',

    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
  },
  pickerImage: {
    resizeMode: 'contain',
    width: 200,
    height: 100,
  },
});
export {style};
