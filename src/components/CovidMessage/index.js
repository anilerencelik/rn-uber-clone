import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const temp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>
                Proident pariatur elit excepteur dolor commodo ullamco qui aliqua nostrud qui aliqua nostrud qui aliqua nostrud qui aliqua nostrud qui sunt deserunt.
            </Text>
            <Text style={styles.learnMore}>Learn more</Text>

        </View>
    )
}

export default temp;