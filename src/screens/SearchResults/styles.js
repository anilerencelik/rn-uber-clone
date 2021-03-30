import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'space-between'
    },
    mapView: {
        height: Dimensions.get('window').height - 400
    },
    bottomView : {
        height: 380,
    }
});

export default styles;
