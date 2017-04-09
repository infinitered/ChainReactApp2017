import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../Themes'

export default class PurpleGradient extends React.Component {
  render () {
    const gradient = [Colors.purple, Colors.darkPurple]
    return (
      <LinearGradient colors={gradient} style={this.props.style}>
        {this.props.children}
      </LinearGradient>
    )
  }
}
