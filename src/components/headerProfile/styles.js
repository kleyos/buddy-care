import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: '#7758C4'
  },
  topContainer: {
    paddingHorizontal: 10,
    height: 70,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 140,
    height: 60
  },
  bottomContainer: {
    height: 35,
    backgroundColor: '#7758C4',
  },
  btnContainer: {
    flex: 1,
    backgroundColor: '#7758C4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnStyle: {
    height: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7758C4',
  },
  selectedBtnStyle: {
    borderBottomColor: '#fff',
    borderBottomWidth: 3
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    opacity: 0.7,
    textAlign: 'center',
  },
  shadow: {
    shadowColor: '#9B9B9B',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3
  },
});
