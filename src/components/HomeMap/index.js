import React, { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import styles  from './styles.js';

import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import { API, graphqlOperation } from 'aws-amplify'
import { listCars } from '../../../graphql/queries'

//import cars from '../../assets/data/cars'

const HomeMap = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchCars = async() => {
            try {
                const response = await API.graphql(graphqlOperation(listCars))
                setCars(response.data.listCars.items)
            } catch (e) {
                console.log(e)
            }
        }
        fetchCars()
    }, [])


    const getImage = (car) => {
        switch (car) {
            case 'UberX':
                return require('../../assets/images/top-UberX.png') 
            case 'Comfort':
                return require('../../assets/images/top-Comfort.png') 
            case 'UberXL': 
                return require('../../assets/images/top-UberXL.png') 
            default:
                return null;
        }
    }

    return (
        <MapView
            style={styles.map}
           provider={PROVIDER_GOOGLE}
           showsUserLocation={true}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {cars.map((car) => (
                <Marker 
                    coordinate={{latitude: car.latitude, longitude: car.longitude}} 
                    key={car.id}>
                        <Image 
                            source={getImage(car.type)} 
                            style={[styles.image, {transform:[{rotate: `${car.heading}deg`}]}]}
                        />
                    </Marker>
            ))}
            
        </MapView>
    )
}

export default HomeMap;
