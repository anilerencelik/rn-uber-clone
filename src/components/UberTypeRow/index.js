import React from 'react';
import { View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';

import Ionicons from 'react-native-vector-icons/Ionicons'

const UberTypeRow = (props) => {
    const {type, onPress, isSelected} = props

    const getImage = () => {
        switch (type.type) {
            case 'UberX':
                return require('../../assets/images/UberX.jpeg') 
            case 'Comfort':
                return require('../../assets/images/Comfort.jpeg') 
            case 'UberXL': 
                return require('../../assets/images/UberXL.jpeg') 
            default:
                return null;
        }
    }


    return (
        <Pressable style={[styles.container, isSelected ? {backgroundColor: '#aaa'}: {}]}
            onPress={onPress}
            >
            <Image 
                source={getImage()}
                style={styles.image}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{' '}
                    <Ionicons name={'person'} size={16} />
                    3   
                </Text>
                <Text style={styles.time}>
                    8:03 PM drop off
                </Text>
            </View>

            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
                <Text style={styles.price}>
                    est. ${type.price}
                </Text>
            </View>
        </Pressable>
    )
}

export default UberTypeRow;