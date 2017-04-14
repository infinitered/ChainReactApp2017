import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'
// import VenueMap from '../Components/VenueMap'
import { Images } from '../Themes'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import styles from './Styles/LocationScreenStyle'

class LocationScreen extends React.Component {

  static navigationOptions = {
    tabBar: {
      label: 'Location',
      icon: ({ focused }) => (
        <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
      )
    }
  }

  render () {
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
