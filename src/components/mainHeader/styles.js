import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: '#7758C4'
  },
  topContainer: {
    paddingHorizontal: 10,
    height: 50,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 140,
    height: 60
  },
  shadow: {
    shadowColor: '#9B9B9B',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3
  },
});
