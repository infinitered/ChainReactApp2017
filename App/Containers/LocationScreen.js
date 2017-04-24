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
import { Images } from '../Themes'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import styles from './Styles/LocationScreenStyle'

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
    console.tron.log('open maps app here')
  }

  toggleRides () {
    this.setState({showRideOptions: !this.state.showRideOptions})
  }

  render () {
    const { showRideOptions } = this.state
    return (
      <PurpleGradient style={[styles.linearGradient, {flex: 1}]}>
        <ScrollView>
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
              <Text style={{margin: 20}}>Lyft Button Here</Text>
              <Text style={{margin: 20}}>Uber Button Here</Text>
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
