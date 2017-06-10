import React from 'react'
import { View } from 'react-native'
import Video from 'react-native-video'

export default ({source, isActive, style}) => {
  if (isActive) {
    return (
      <Video
        source={source}
        paused={!isActive}
        resizeMode='cover'
        style={style}
        muted
        repeat
      />
    )
  } else {
    return (<View />)
  }
}
