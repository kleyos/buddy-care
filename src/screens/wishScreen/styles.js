import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions;

export default StyleSheet.create({
  bgImage: {
    width,
    height: 310
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#6B54A3',
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Helvetica',
    backgroundColor: 'transparent'
  },
  btnImage: {
    justifyContent: 'center',
    width: 280,
    height: 45,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 35,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderColor: '#C1B6EA',
    borderWidth: 1,
    backgroundColor: '#FBFAFF',
    borderRadius: 5,
    padding: 10
  },
  charText: {
    color: '#000',
    fontSize: 12,
    backgroundColor: 'transparent',
    textAlign: 'right',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  skipBtn: {
    position: 'absolute',
    top: 35,
    right: 20,
  },
  skipText: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'transparent'
  }
});
