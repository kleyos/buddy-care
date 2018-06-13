import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions;

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
  }

});
