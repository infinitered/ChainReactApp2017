import React from 'react'
import MapView from 'react-native-maps'
import { View, TouchableOpacity } from 'react-native'
import VenueMapCallout from './VenueMapCallout'
import { Images, Colors } from '../Themes'
import styles from './Styles/VenueMapStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

// Generate this MapHelpers file with `ignite generate map-utilities`
// You must have Ramda as a dev dependency to use this.
import { calculateRegion } from '../Lib/MapHelpers'

/* ***********************************************************
* IMPORTANT!!! Before you get started, if you are going to support Android,
* PLEASE generate your own API key and add it to android/app/src/main/AndroidManifest.xml
* https://console.developers.google.com/apis/credentials
* Also, you'll need to enable Google Maps Android API for your project:
* https://console.developers.google.com/apis/api/maps_android_backend/
*************************************************************/

interface VenueMapProps {
  scrollEnabled: boolean
  mapViewMode: boolean
  style: StyleSheet
  onCloseMap (): void
}

interface VenueMapState {
  region: object
  locations: object[]
  showUserLocation: boolean
}

class VenueMap extends React.Component<VenueMapProps, VenueMapState> {
  /* ***********************************************************
  * This generated code is only intended to get you started with the basics.
  * There are TONS of options available from traffic to buildings to indoors to compass and more!
  * For full documentation, see https://github.com/lelandrichardson/react-native-maps
  *************************************************************/
  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * Set the array of locations to be displayed on your map. You'll need to define at least
    * a latitude and longitude as well as any additional information you wish to display.
    *************************************************************/
    const locations = [
      { title: 'The Armory', latitude: 45.524166, longitude: -122.681645 }
    ]
    /* ***********************************************************
    * STEP 2
    * Set your initial region either by dynamically calculating from a list of locations (as below)
    * or as a fixed point, eg: { latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1}
    * You can generate a handy `calculateRegion` function with
    * `ignite generate map-utilities`
    *************************************************************/
    const region = calculateRegion(locations, { latPadding: 0.01, longPadding: 0.01 })
    this.state = {
      region,
      locations,
      showUserLocation: true
    }
    this.renderMapMarkers = this.renderMapMarkers.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
  }

  componentWillReceiveProps (newProps) {
    /* ***********************************************************
    * STEP 3
    * If you wish to recenter the map on new locations any time the
    * props change, do something like this:
    *************************************************************/
    // this.setState({
    //   region: calculateRegion(newProps.locations, { latPadding: 0.1, longPadding: 0.1 })
    // })
  }

  onRegionChange (newRegion) {
    /* ***********************************************************
    * STEP 4
    * If you wish to fetch new locations when the user changes the
    * currently visible region, do something like this:
    *************************************************************/
    // const searchRegion = {
    //   ne_lat: newRegion.latitude + newRegion.latitudeDelta,
    //   ne_long: newRegion.longitude + newRegion.longitudeDelta,
    //   sw_lat: newRegion.latitude - newRegion.latitudeDelta,
    //   sw_long: newRegion.longitude - newRegion.longitudeDelta
    // }
    // Fetch new data...
  }

  calloutPress (location) {
    /* ***********************************************************
    * STEP 5
    * Configure what will happen (if anything) when the user
    * presses your callout.
    *************************************************************/

    // console.tron.log(location) // Reactotron
  }

  renderMapMarkers (location) {
    /* ***********************************************************
    * STEP 6
    * Customize the appearance and location of the map marker.
    * Customize the callout in ./VenueMapCallout.js
    *************************************************************/

    return (
      <MapView.Marker
        key={location.title}
        image={Images.markerIcon}
        coordinate={{latitude: location.latitude, longitude: location.longitude}}>
        <VenueMapCallout location={location} onPress={this.calloutPress} />
      </MapView.Marker>
    )
  }

  renderMapCloseButton = () => {
    // Warning GROSS hack for Android render bug on maps
    const left = this.props.mapViewMode ? 0 : -100

    return (
      <TouchableOpacity
        onPress={this.props.onCloseMap}
        style={[styles.mapCloseButton, {left}]}
      >
        <Icon
          ref='mapCloseButton'
          name='times-circle'
          size={26}
          color={Colors.purple}
          style={[styles.mapCloseButton]}
        />
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View>
        <MapView
          scrollEnabled={this.props.scrollEnabled}
          style={this.props.style}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.onRegionChange}
          showsUserLocation={this.state.showUserLocation}
        >
          {this.state.locations.map((location) => this.renderMapMarkers(location))}
        </MapView>
        {this.renderMapCloseButton()}
      </View>
    )
  }
}

export default VenueMap
