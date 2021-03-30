import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        margin: 10,
        height: '100%'
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20
    },
    autoCompleteContainer:{
        position: 'absolute',
        top: 0,
        left: 5,
        right: 5,
    },
    autoCompleteListView: {
        position: 'absolute',
        top: 120
    },
    map: {
        height: '100%',
        width : '100%'
    },
    circle:{
        width: 5,
        height: 5,
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 10,
        top: 26,
        left: 8
    },
    line: {
        width: 1,
        height: 58,
        backgroundColor: '#919191',
        position: 'absolute',
        top: 30,
        left: 10
    },
    square:{
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 87,
        left: 8
    }
});

export default styles;
