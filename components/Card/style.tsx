import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    gap: 6,
    maxWidth: 190,
  },
  vaccineTitle: {
    color: '#3F92C5',
    fontSize: 25,
    fontFamily: 'AveriaLibre-Regular',
  },
  image: {
    resizeMode: 'contain',
    width: 175,
    height: 75,
  },
  doseContainer: {
    backgroundColor: '#3F92C5',
    borderColor: '#3F92C5',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  doseText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'AveriaLibre-Regular',
  },
  dateText: {
    color: '#8B8B8B',
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
  },

  nextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 6,
  },
  nextText: {
    color: '#FD7979',
    fontSize: 13,
    fontFamily: 'AveriaLibre-Regular',
  },
});
export {style};
