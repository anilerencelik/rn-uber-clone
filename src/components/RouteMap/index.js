import React from 'react';
import { Image, FlatList } from 'react-native';
import styles  from './styles.js';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = (props) => {
    
    const { origin, destination } = props
    

    const originPlace = {
        latitude : origin.lat,
        longitude: origin.lng
    }
    const destinationPlace = {
        latitude : destination.lat,
        longitude: destination.lng
    }

    return (
        <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: origin.lat,
                longitude: origin.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <MapViewDirections 
                origin={originPlace}
                destination={destinationPlace}
                apikey={'AIzaSyB6hbVNmZsWNSg6_XbMvOQvutizcr9YI9A'}
                strokeWidth={10}
                strokeColor='#ab48f9'
            />

            <Marker
                coordinate={originPlace}
                title='Origin'
            />
            <Marker
                coordinate={destinationPlace}
                title='Destination'
            />

        </MapView>
    )
}

export default RouteMap;
