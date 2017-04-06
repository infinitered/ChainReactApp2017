import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutScreenStyle'

class AboutScreen extends React.Component {

  static navigationOptions = {
    title: 'About',
    tabBar: {
      label: 'About',
      icon: ({ tintColor }) => (
        <Icon
          name='info'
          type='simple-line-icon'
          color={tintColor}
        />
      )
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>About Screen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
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
