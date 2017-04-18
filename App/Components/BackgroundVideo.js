import React, { Component } from 'react'
import Video from 'react-native-video'

export default class BackgroundVideo extends Component {
  render () {
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
  }
}
