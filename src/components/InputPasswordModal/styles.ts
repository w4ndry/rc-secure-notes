import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.11)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 6,
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
  },
});

export default styles;
