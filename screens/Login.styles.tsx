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
    padding: 5,
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 13,
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
    flex: 1,
    marginLeft: 10,
    padding: 5,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  buttonGreen: {
    backgroundColor: '#37BD6D',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#37BD6D',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },

  buttonBlue: {
    backgroundColor: '#419ED7',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#419ED7',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },

  buttonGray: {
    backgroundColor: '#B0CCDE',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#B0CCDE',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export {style};
