import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  modal: {
    position: 'absolute',
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(119, 88, 196, 0.2)'
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#FFF',
    elevation: 2
  },
  itemContent: {
    padding: 10
  },
  line: {
    width: width - 20,
    height: 4,
  },
  itemShadow: {
    shadowColor: '#EBEAEA',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  itemRow: {
    flex: 1,
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
  itemType: {
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
  tabContainer: {
    height: 40,
    backgroundColor: '#7758C4',
    paddingTop: 10
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

});
