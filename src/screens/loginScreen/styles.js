import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions;

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
    width,
    height,
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    width: 165,
    height: 153,
    marginVertical: 50
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Helvetica',
    color: '#fff',
    backgroundColor: 'transparent'
  },
  guestBtnContainer: {
    // flex: 1,
    alignItems: 'center'
  },
  guestBtn: {
    height: 50,
    width: 300,
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#fff'
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  privasyText: {
    color: '#fff',
    fontSize: 12,
    width: 250,
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
});
