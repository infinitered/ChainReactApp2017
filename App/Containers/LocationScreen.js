import React from 'react'
import { Icon } from 'react-native-elements'
import VenueMap from '../Components/VenueMap'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/LocationScreenStyle'

class LocationScreen extends React.Component {

  static navigationOptions = {
    title: 'Location',
    tabBar: {
      label: 'Location',
      icon: ({ tintColor }) => (
        <Icon
          name='map'
          type='simple-line-icon'
          color={tintColor}
        />
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
