import React from 'react'
import { Images, Metrics } from '../Themes'
import Announcement from './Announcement'

const ConferenceAnnouncements = (props) => {
  return (
    <Announcement
      style={{height: 350, width: Metrics.screenWidth}}
      currentDate={props.currentDate}
      preEvent={{
        title: 'WELCOME PARTY',
        subtitle: 'AT SQUARESPACE PDX',
        eventTimeInfo: 'SUNDAY, JULY 9 | 4-8PM',
        address: '311 SW WASHINGTON STREET',
        headerLogo: Images.sqspLogo,
        image: Images.squarespacePhoto,
        buttonUri: 'https://chainreact.squarespace.com',
        buttonText: 'I WANT TO GO'
      }}
      eventDays={[
        {
          title: 'HAPPY HOUR',
          subtitle: 'HERE AT THE ARMORY',
          eventTimeInfo: 'MONDAY, JULY 10 | 5-7:30PM',
          address: 'MAIN LOBBY',
          headerLogo: Images.crLogo,
          image: Images.happyHour
        }
      ]}
      postEvent={{
        title: 'THANK YOU',
        subtitle: 'WE\'LL SEE YOU AGAIN NEXT YEAR',
        eventTimeInfo: '',
        address: '',
        headerLogo: Images.crLogo,
        image: Images.thankYou
      }}
    />
  )
}

export default ConferenceAnnouncements
