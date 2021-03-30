import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'space-between'
    },
    mapView: {
        height: Dimensions.get('window').height - 365
    },
    bottomView : {
        height: 365
    }
});

export default styles;
