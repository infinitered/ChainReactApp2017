import React from 'react'
import { Image, TouchableOpacity, View, Text, Linking } from 'react-native'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import Config from '../Config/AppConfig'
import DebugConfig from '../Config/DebugConfig'
import { Images } from '../Themes'
import styles from './Styles/AnnouncementStyle'
import RoundedButton from './RoundedButton'
import { format, isBefore, isAfter } from 'date-fns'
import { contains, indexOf, last } from 'ramda'

// Example
ExamplesRegistry.addComponentExample('Announcement', () =>
  <Announcement
    style={{height: 350}}
    // preEvent={}
    eventDays={[
      {
        title: 'Happy Hour',
        subtitle: 'Come for the fun',
        eventTimeInfo: 'Stay for the cats',
        address: '#1 Happy St',
        buttonUri: 'https://chainreact.squarespace.com',
        image: {uri: 'https://assets.rbl.ms/4314213/980x.jpg'},
        buttonText: 'wassaa party'
      }
    ]}
    // postEvent={}
  />
)

interface AnnouncementProps {
  style?: StyleSheet | Object
  preEvent?: AnnouncementEvent
  eventDays: Array<AnnouncementEvent>
  postEvent?: AnnouncementEvent
}

interface AnnouncementEvent {
  title: string
  subtitle: string
  eventTimeInfo: string
  address: string
  image: any
  buttonUri: string
  buttonText: string
}

const correctProps = (props) => {
  const { hotwireDate } = DebugConfig
  const { conferenceDates } = Config
  const { preEvent, eventDays, postEvent } = props

  const today = format(new Date(), 'M/D/YYYY')
  if (hotwireDate) return eventDays[0]
  if (contains(today, conferenceDates)) {
    const index = indexOf(today, conferenceDates)
    return eventDays[index]
  } else if (isBefore(today, conferenceDates[0])) {
    return preEvent
  } else if (isAfter(today, last(conferenceDates))) {
    return postEvent
  } else {
    return postEvent
  }
}

const Announcement = (props: AnnouncementProps) => {
  const { style, preEvent, postEvent } = props
  if (!preEvent || !postEvent) return null
  const { title, subtitle, eventTimeInfo, address, image, buttonUri, buttonText } = correctProps(props)
  return (
    <View>
      <Image source={image} style={style}>
        <View style={styles.afterPartyContainer}>
          <View style={styles.partyHeader}>
            <Text style={styles.welcomeParty}>{title.toUpperCase()}</Text>
            <Text style={styles.partyDescription}>{subtitle && subtitle.toUpperCase()}</Text>
          </View>
          <View style={styles.partyInfo}>
            <Text style={styles.partyDescription}>{eventTimeInfo && eventTimeInfo.toUpperCase()}</Text>
            <Text style={styles.partyDescription}>{address && address.toUpperCase()}</Text>
          </View>
        </View>
      </Image>
      <RoundedButton
        onPress={() => Linking.openURL(buttonUri)}
        style={styles.partyButton}
      >
        <Text style={styles.partyButtonText}>{buttonText.toUpperCase()}</Text>
      </RoundedButton>
    </View>
  )
}

export default Announcement
