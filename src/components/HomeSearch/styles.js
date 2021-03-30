import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container : {
    width: '100%',
    padding: 10
  },
  inputBox : {
    flexDirection: 'row',
    padding : 10,
    justifyContent : 'space-between',
    alignItems : 'center',
    backgroundColor : '#e7e7e7',
    marginBottom: 10
  },
  inputText : {
    fontSize : 20,
    fontWeight : '600',
    color : '#434343'
  },
  timeContainer : {
    flexDirection : 'row',
    width: 98,
    justifyContent : 'space-between',
    backgroundColor : 'white',
    padding : 10,
    borderRadius : 44
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth : 1,
    borderColor: '#dbdbdb',
    backgroundColor: 'white',
    paddingVertical: 5
  },
  iconContainer : {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius : 25
  },
  destinationText: {
    marginLeft: 10,
    fontWeight : '700',
    fontSize : 16
  }
});

export default styles;
