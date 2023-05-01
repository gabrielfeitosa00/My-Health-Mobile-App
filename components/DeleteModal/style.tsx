import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,

    backgroundColor: '#FFFFFF',
    gap: 40,
    width: 350,
    height: 220,
    padding: 13,
  },
  modalText: {
    color: '#FD7979',
    fontSize: 25,
    fontFamily: 'AveriaLibre-Regular',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 15,
  },
});
export {style};
