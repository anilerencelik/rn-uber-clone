import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mapView}>
                <HomeMap />
            </View>
            <View style={styles.bottomView}>
                <CovidMessage />
                <HomeSearch />
            </View>
        </View>
    )
}

export default HomeScreen;
