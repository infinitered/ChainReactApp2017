import React from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  Linking,
  Animated,
  PanResponder,
  LayoutAnimation
} from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'

import VenueMap from '../Components/VenueMap'
import Gallery from '../Components/Gallery'
import { Images, Metrics } from '../Themes'
import { connect } from 'react-redux'
import Secrets from 'react-native-config'
import styles from './Styles/LocationScreenStyle'

const VENUE_LATITUDE = 45.524166
const VENUE_LONGITUDE = -122.681645
const { UBER_CLIENT_ID } = Secrets
const MAP_TAP_THRESHOLD = 100

class LocationScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showRideOptions: false,
      scrollY: new Animated.Value(0),
      mapTouchStart: '',
      mapViewMode: false
    }

    this.scrollSpot = Metrics.screenHeight / 4.25
    this.activeMapHeight = Metrics.screenHeight - this.scrollSpot
  }

  static navigationOptions = {
    tabBarLabel: 'Location',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
    )
  }

  componentWillMount () {
    // Get the map tap check
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => this.setState({mapTouchStart: e.nativeEvent.timestamp}),
      onPanResponderRelease: this.checkMapTap
    })
  }
  checkMapTap = (e) => {
    if (e.nativeEvent.timestamp - this.state.mapTouchStart < MAP_TAP_THRESHOLD) {
      LayoutAnimation.configureNext({...LayoutAnimation.Presets.linear, duration: 500})
      this.refs.scrolly.scrollTo({y: this.scrollSpot, animated: true})
      this.setState({mapViewMode: true})
    }
    this.setState({mapTouchStart: ''})
  }

  openMaps (daddr = '128+NW+Eleventh+Ave+Portland,+OR+97209') {
    const googleMaps = `comgooglemaps://?daddr=${daddr}`
    const appleMaps = `http://maps.apple.com?daddr=${daddr}`

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

  openLink (url) {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url)
      } else {
        window.alert('Unable to open link')
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
    const { showRideOptions, scrollY } = this.state
    if (!showRideOptions && scrollY._value < 200) {
      this.refs.scrolly.scrollTo({x: 0, y: 200, animated: true})
    }
    this.setState({showRideOptions: !this.state.showRideOptions})
  }

  renderBackground = () => {
    const height = Metrics.locationBackgroundHeight
    const { scrollY } = this.state
    return (
      <Animated.Image
        style={[styles.venue, {position: 'absolute'}, {
          width: '100%',
          height: height,
          transform: [{
            translateY: scrollY.interpolate({
              inputRange: [-height, 0, height],
              outputRange: [height, 0, 0]
            })
          }, {
            scale: scrollY.interpolate({
              inputRange: [-height, 0, height],
              outputRange: [0.9, 1, 1.5]
            })
          }]
        }]}
        source={Images.theArmory}
        resizeMode='cover'
      />
    )
  }

  renderHeader = () => {
    const height = Metrics.locationBackgroundHeight - 24
    const { scrollY } = this.state
    return (
      <Animated.View style={{
        position: 'relative',
        height: height,
        padding: 0,
        opacity: scrollY.interpolate({
          inputRange: [-height, 0, height * 0.4, height * 0.9],
          outputRange: [1, 1, 1, 0]
        }),
        transform: [{
          translateY: scrollY.interpolate({
            inputRange: [-height, 0, height * 0.45, height],
            outputRange: [0, 0, height * 0.45, height * 0.4]
          })
        }]
      }}>
        <View style={styles.headingContainer}>
          <Text style={styles.mainHeading}>The Armory</Text>
          <Text style={styles.address}>
            128 NW Eleventh Ave{'\n'}
            Portland, OR 97209
          </Text>
        </View>
      </Animated.View>
    )
  }

  onCloseMap = () => {
    LayoutAnimation.configureNext({...LayoutAnimation.Presets.linear, duration: 400})
    this.setState({mapViewMode: false})
  }

  render () {
    const { showRideOptions, mapViewMode } = this.state
    const { nearbyData } = this.props
    const { event } = Animated

    return (
      <PurpleGradient style={[styles.linearGradient, {flex: 1}]}>
        <ScrollView
          ref='scrolly'
          onScroll={event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}
          scrollEventThrottle={10}
          scrollEnabled={!this.state.mapViewMode}>
          <View style={styles.container}>
            {this.renderBackground()}
            {this.renderHeader()}
            <View ref='mapContainer' {...this._panResponder.panHandlers}>
              <VenueMap mapViewMode={mapViewMode} onCloseMap={this.onCloseMap} scrollEnabled={mapViewMode} style={[styles.map, mapViewMode && {height: this.activeMapHeight}]} />
            </View>
            <View style={styles.mapActions}>
              <TouchableOpacity onPress={() => this.openMaps()}>
                <View style={styles.getDirections}>
                  <View style={styles.addressContainer}>
                    <Text style={styles.venueName}>
                      The Armory
                    </Text>
                    <Text style={styles.venueAddress}>
                      128 NW Eleventh Ave.{'\n'}Portland, OR 97209
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
            <View style={[styles.rideOptions, showRideOptions && {height: 170}]}>
              <TouchableOpacity onPress={() => this.openLyft()}>
                <Image style={styles.rideButton} source={Images.lyftButton} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openUber()}>
                <Image style={styles.rideButton} source={Images.uberButton} />
              </TouchableOpacity>
            </View>
            <View style={styles.nearby}>
              <Text style={styles.mainHeading}>
                Nearby
              </Text>
            </View>
            <Gallery
              data={nearbyData}
              onItemPress={(link) => this.openLink(link)}
            />
          </View>
        </ScrollView>
      </PurpleGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nearbyData: state.location.nearby
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen)
