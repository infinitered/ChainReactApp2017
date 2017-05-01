import React from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  Linking
} from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'
import VenueMap from '../Components/VenueMap'
import Gallery from '../Components/Gallery'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Secrets from 'react-native-config'
import styles from './Styles/LocationScreenStyle'

const VENUE_LATITUDE = 45.524166
const VENUE_LONGITUDE = -122.681645
const { UBER_CLIENT_ID } = Secrets

class LocationScreen extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      showRideOptions: false
    }
  }

  static navigationOptions = {
    tabBar: {
      label: 'Location',
      icon: ({ focused }) => (
        <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
      )
    }
  }

  openMaps () {
    const daddr = 'daddr=128+NW+Eleventh+Ave+Portland,+OR+97209'
    const googleMaps = `comgooglemaps://?${daddr}`
    const appleMaps = `http://maps.apple.com?${daddr}`

    Linking.canOpenURL(googleMaps).then((supported) => {
      if (supported) {
        Linking.openURL(googleMaps)
      } else {
        Linking.canOpenURL(appleMaps).then((supported) =>
          supported
          ? Linking.openURL(appleMaps)
          : window.alert('Unable to find maps application.')
        )
      }
    })
  }

  openLyft () {
    const lat = `destination[latitude]=${VENUE_LATITUDE}`
    const lng = `destination[longitude]=${VENUE_LONGITUDE}`
    const lyft = `lyft://ridetype?${lat}&${lng}`

    Linking.canOpenURL(lyft).then((supported) => {
      if (supported) {
        Linking.openURL(lyft)
      } else {
        window.alert('Unable to open Lyft.')
      }
    })
  }

  openUber () {
    const pickup = 'action=setPickup&pickup=my_location'
    const client = `client_id=${UBER_CLIENT_ID}`
    const lat = `dropoff[latitude]=${VENUE_LATITUDE}`
    const lng = `dropoff[longitude]=${VENUE_LONGITUDE}`
    const nick = `dropoff[nickname]=The%20Armory`
    const daddr = `dropoff[formatted_address]=128%20NW%20Eleventh%20Ave%2C%20Portland%2C%20OR%2097209`
    const uber = `uber://?${pickup}&${client}&${lat}&${lng}&${nick}&${daddr}`

    Linking.canOpenURL(uber).then((supported) => {
      if (supported) {
        Linking.openURL(uber)
      } else {
        window.alert('Unable to open Uber.')
      }
    })
  }

  toggleRides = () => {
    this.refs.scrolly.scrollTo({x: 0, y: 180, animated: true})
    this.setState({showRideOptions: !this.state.showRideOptions})
  }

  render () {
    const { showRideOptions } = this.state
    return (
      <PurpleGradient style={[styles.linearGradient, {flex: 1}]}>
        <ScrollView ref='scrolly'>
          <View style={styles.container}>
            <View style={styles.headingContainer}>
              <Text style={styles.mainHeading}>The Armory</Text>
              <Text style={styles.address}>
                128 NW Eleventh Ave{'\n'}
                Portland, OR 97209
              </Text>
            </View>
            <Image style={styles.venue} source={Images.theArmory} />
            <VenueMap style={styles.map} />
            <View style={styles.mapActions}>
              <TouchableOpacity onPress={() => this.openMaps()}>
                <View style={styles.getDirections}>
                  <View>
                    <Text style={styles.venueName}>
                      The Armory
                    </Text>
                    <Text style={styles.venueAddress}>
                      128 NW Eleventh Ave, Portland, OR, 97209
                    </Text>
                  </View>
                  <View style={styles.directionsIcon}>
                    <Image source={Images.directionsIcon} />
                    <Text style={styles.directionsLabel}>Directions</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.toggleRides()}>
                <View style={styles.getRide}>
                  <Text style={styles.getRideLabel}>
                    Taking an Uber or Lyft?
                  </Text>
                  <Image
                    style={[styles.getRideIcon, showRideOptions && styles.flip]}
                    source={Images.chevronIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.rideOptions, showRideOptions && {height: 200}]}>
              <TouchableOpacity onPress={() => this.openLyft()}>
                <Image source={Images.lyftButton} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openUber()}>
                <Image source={Images.uberButton} />
              </TouchableOpacity>
            </View>
            <View style={styles.nearby}>
              <Text style={styles.mainHeading}>
                Nearby
              </Text>
              <Gallery data={require('../Fixtures/nearby.json')} />
            </View>
          </View>
        </ScrollView>
      </PurpleGradient>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen)
