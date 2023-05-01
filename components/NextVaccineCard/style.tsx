import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
  },
  title: {
    color: '#3F92C5',
    fontSize: 22,
    fontFamily: 'AveriaLibre-Regular',
  },
  dateText: {
    color: '#8B8B8B',
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
  },
});
export {style};
