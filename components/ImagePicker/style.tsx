import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  pickerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 13,
    height: 150,
    flex: 1,

    flexGrow: 1,
  },
  pickerButton: {
    maxHeight: 40,
    backgroundColor: '#3F92C5',
    width: '85%',
    flex: 1,

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
