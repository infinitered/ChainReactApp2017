import React from 'react'
import { View, ViewStyle } from 'react-native'
import Video from 'react-native-video'

interface BackgroundProps {
  source?: string,
  isActive: boolean,
  style: ViewStyle
}

export default ({source, isActive, style}: BackgroundProps) => {
  if (isActive && source) {
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
