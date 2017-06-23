import React from 'react'
import { Images } from '../Themes'
import Announcement from './Announcement'

// If we choose to use a uri for the header image
// we will need to specify w/h on the <Image /> in Announcement.tsx
const ConferenceAnnouncements = () => {
  return (
    <Announcement
      style={{height: 350}}
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
