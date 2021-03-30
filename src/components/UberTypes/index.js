import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles.js';

import UberTypeRow from '../UberTypeRow'
import uberTypes from '../../assets/data/types'

const UberTypes = ({typeState, onSubmit}) => {
    
    const [selectedType, setSelectedType] = typeState
    
    return (
        <> 
            {uberTypes.map(type => <UberTypeRow 
                type={type} 
                key={type.id} 
                onPress={() => setSelectedType(type.type)}
                isSelected={type.type ===  selectedType}
            />)}
            <View style={styles.container}>
                <Pressable 
                    style={styles.confirm}
                    onPress={onSubmit}
                >
                    <Text style={styles.confirmText}>
                        Confirm Uber
                    </Text>
                </Pressable>
            </View>
        </>
    )
}

export default UberTypes;