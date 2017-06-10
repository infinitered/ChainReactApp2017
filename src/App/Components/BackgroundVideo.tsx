import React from 'react'
import { View } from 'react-native'
import Video from 'react-native-video'

interface BackgroundProps {
  source: string,
  isActive: boolean,
  style: StyleSheet
}

export default ({source, isActive, style}: BackgroundProps) => {
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
