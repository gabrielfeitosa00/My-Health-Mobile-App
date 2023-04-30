import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    backgroundColor: '#ADD4D0',
  },
  contentContainer: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
  },

  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 80,
  },

  inputsGroup: {
    marginTop: 45,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: 10,
    width: '100%',
  },
});

export {style};
