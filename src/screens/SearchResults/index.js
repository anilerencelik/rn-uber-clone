import React, {useState} from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

import { useRoute } from '@react-navigation/native';
import { createOrder } from '../../../graphql/mutations'

const SearchResultsScreen = () => {
    const typeState = useState(null)

    const onSubmit = async() => {
        const [type] = typeState
        if(!type){
            return
        }
        try {
            const userInfo = await Auth.currentAuthenticatedUser()

            const input = {
                type,
                originLatitude : router.params.originPlace.data.geometry.location.lat,
                originLongitude : router.params.originPlace.data.geometry.location.lng,
                destLatitude : router.params.destinationPlace.data.geometry.location.lat,
                destLongitude : router.params.destinationPlace.data.geometry.location.lng,
                userId: userInfo.attributes.sub,
                carId: ""
            }
            const response = await API.graphql(
                graphqlOperation(createOrder, input)
            )
            console.debug(response)
        } catch (error) {
            console.error(error)
        }

    }

    const router = useRoute()
    return (
        <View style={styles.container}>
            <View style={styles.mapView}>
                <RouteMap 
                    origin={router.params.originPlace.data.geometry.location}
                    destination={router.params.destinationPlace.data.geometry.location}
                />
            </View>
            <View style={styles.bottomView}>
                <UberTypes typeState={typeState} onSubmit={onSubmit}/>
            </View>
        </View>
    )
}

export default SearchResultsScreen;