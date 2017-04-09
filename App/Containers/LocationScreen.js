import React from 'react'
import { Image } from 'react-native'
import VenueMap from '../Components/VenueMap'
import { Images } from '../Themes'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/LocationScreenStyle'

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
      <VenueMap style={{flex: 1}} />
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
