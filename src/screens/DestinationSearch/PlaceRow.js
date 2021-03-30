import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, Text, StyleSheet } from 'react-native';

import Entypo from "react-native-vector-icons/Entypo";

const DestinationSearchScreen = (props) => {
    
    const { data } = props

    return (
        <View style={styles.container}>              
            <View style={styles.iconContainer}>
                <Entypo name='location-pin' size={20} color='white' />
            </View>
            <Text style={styles.locationText}>
                {data.description || data.vicinity}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#efefef'
    },
    iconContainer:{
        backgroundColor: '#a2a2a2',
        borderRadius: 50,
        padding: 5
    },
    locationText:{
        marginLeft: 10
    }
})

export default DestinationSearchScreen;
