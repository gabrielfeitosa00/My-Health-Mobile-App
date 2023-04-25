import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  title: {
    color: '#419ED7',
    fontSize: 50,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  backgroundImage: {
    width: '100%',
  },

  gradient: {
    width: '100%',

    height: '100%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  titleIcon: {width: 40, height: 40},

  description: {
    color: '#419ED7',
    fontSize: 35,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    marginBottom: 60,
    padding: 5,
  },

  container: {
    height: '100%',
  },

  contentContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  inputsGroup: {
    width: '93%',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: 250,
    marginTop: 30,
  },
});

export {style};
