import React from 'react'
import { Image, View, Text } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutScreenStyle'

class AboutScreen extends React.Component {

  static navigationOptions = {
    tabBar: {
      label: 'About',
      icon: ({ focused }) => (
        <Image source={focused ? Images.activeInfoIcon : Images.inactiveInfoIcon} />
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>AboutScreen</Text>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
