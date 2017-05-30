import React, { Component } from 'react'
import { View } from 'react-native'
import Video from 'react-native-video'

export default class BackgroundVideo extends Component {
  render () {
    if (this.props.isActive) {
      return (
        <Video
          source={this.props.source}
          paused={!this.props.isActive}
          resizeMode='cover'
          style={this.props.style}
          muted
          repeat
        />
      )
    } else {
      return (<View />)
    }
  }
}
