import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#FFF'
  },
  itemContent: {
    padding: 10
  },
  line: {
    width: width - 20,
    height: 4
  },
  itemShadow: {
    shadowColor: '#EBEAEA',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  
  itemRowBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemWish: {
    width: 80,
    height: 40,
    marginLeft: -20
  },
  itemOffer: {
    width: 60,
    height: 20
  },
  btn: {
    width: 100,
    height: 45
  },
  itemText: {
    padding: 5,
    fontSize: 17,
    color: '#5F5D70'
  },
  itemName: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10
  },
  profilePicture: {
    width,
    height: 220
  },
  profileName: {
    backgroundColor: 'transparent',
    left: 20,
    top: 180,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff'
  },
  tabContainer: {
    height: 40,
    backgroundColor: '#7758C4'
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
    justifyContent: 'center',
    backgroundColor: '#7758C4'
  },
  selectedBtnStyle: {
    borderBottomColor: '#fff',
    borderBottomWidth: 3
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    opacity: 0.7,
    textAlign: 'center'
  },
  divider: {
    height: 1,
    width,
    backgroundColor: '#7758C4',
    opacity: 0.3
  },
  addBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  roundBtn: {
    width: 100,
    height: 100
  },
  addBntContainer: {
    position: 'absolute',
    right: 5,
    bottom: 75
  },
  roundAddBtn: {
    width: 90,
    height: 90
  }

});
