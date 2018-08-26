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
    backgroundColor: 'transparent'
  },
  text: {
    color: '#6B54A3',
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 40,
    fontFamily: 'Helvetica',
    backgroundColor: 'transparent'
  },
  btnImage: {
    justifyContent: 'center',
    width: 280,
    height: 45,
  },
  inputContainer: {
    flexGrow: 1,
    paddingHorizontal: 35,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    borderColor: '#C1B6EA',
    borderWidth: 1,
    backgroundColor: '#FBFAFF',
    borderRadius: 5,
    padding: 10,
    maxHeight: height / 2
  },
  charText: {
    color: '#000',
    fontSize: 12,
    backgroundColor: 'transparent',
    textAlign: 'right'
  },
  warningText: {
    color: 'red',
    fontSize: 12,
    backgroundColor: 'transparent',
    textAlign: 'center'

  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  skipBtn: {
    position: 'absolute',
    top: 30,
    right: 20
  },
  backBtn: {
    position: 'absolute',
    top: 15,
    left: 0
  },
  skipText: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'transparent'
  }
});
