import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput } from 'react-native';
import styles from './styles.js';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow'

import { useNavigation } from '@react-navigation/native'

const DestinationSearchScreen = () => {
    const navigation = useNavigation()

    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
    };
    const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
    };
    
    const goToSearchResultsPage = () => {
        if(originPlace && destinationPlace)
            navigation.navigate('SearchResults', {originPlace, destinationPlace})
    }


    useEffect(() => {
        goToSearchResultsPage()
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where from'
                    fetchDetails
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details})
                    }}
                    query={{
                        key: 'AIzaSyB6hbVNmZsWNSg6_XbMvOQvutizcr9YI9A',
                        language: 'en',
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container : styles.autoCompleteContainer,
                        listView: styles.autoCompleteListView,
                    }}
                    renderRow={(data) => (<PlaceRow data={data}/>)}
                    currentLocation={true}
                    currentLocationLabel={'Current Location'}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />    
            
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    fetchDetails
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details})
                    }}
                    query={{
                        key: 'AIzaSyB6hbVNmZsWNSg6_XbMvOQvutizcr9YI9A',
                        language: 'en',
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: {...styles.autoCompleteContainer, top: 60 }
                    }}
                    renderRow={(data) => (<PlaceRow data={data}/>)}
                    currentLocation={true}
                    currentLocationLabel={'Current Location'}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />
                <View style={styles.circle} />
                <View style={styles.line} />
                <View style={styles.square} />
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearchScreen;
