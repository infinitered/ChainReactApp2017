import React, { PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/TalkStyle'

export default class Talk extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.infoText}>
            <Text style={styles.name}>
              {this.props.name}
            </Text>
            <Text style={styles.title}>
              {this.props.title}
            </Text>
          </View>
          <Image
            style={styles.avatar}
            source={{uri: this.props.avatarURL}}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>
              Start
            </Text>
            <Text style={styles.detailText}>
              {this.props.start}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>
              Duration
            </Text>
            <Text style={styles.detailText}>
              {this.props.duration}
            </Text>
          </View>
        </View>
      </View>
    )
  }

}

Talk.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
}
