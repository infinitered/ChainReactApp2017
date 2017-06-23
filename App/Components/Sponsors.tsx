import React from 'react'
import { View, Text } from 'react-native'
import Sponsor from './Sponsor'
import { Images } from '../Themes'
import styles from './Styles/SponsorsStyles'

const Sponsors = () => {
  return (
    <View style={styles.sponsors}>
      <Text style={styles.heading}>Our Sponsors</Text>
      <Text style={styles.description}>
        We love the sponsors for this conference.
        They make all of this fun stuff possible, and we
        couldn’t have done it without them.
      </Text>

      <Text style={styles.sponsorTierTitle}>
        Platinum Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://www.squarespace.com/'} image={Images.squarespace} />
      </View>

      <Text style={styles.sponsorTierTitle}>
        Gold Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://nativebase.io/'} image={Images.nativeBase} />
        <Sponsor url={'https://formidable.com/'} image={Images.formidable} />
        <Sponsor url={'https://moduscreate.com/'} image={Images.modus} />
        <Sponsor url={'https://www.bugsnag.com/'} image={Images.bugsnag} />
      </View>

      <Text style={styles.sponsorTierTitle}>
        Silver Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://aws.amazon.com/'} image={Images.amazon} isLow />
        <Sponsor url={'http://reactnative.training/'} image={Images.training} isLow />
        <Sponsor url={'https://rangle.io/'} image={Images.rangle} isLow />
        <Sponsor url={'https://gudog.co.uk/'} image={Images.gudog} isLow />
        <Sponsor url={'http://www.oregon4biz.com'} image={Images.businessOregon} isLow />
        <Sponsor url={'http://www.healthsparq.com/'} image={Images.healthsparq} isLow />
      </View>

      <Text style={styles.sponsorTierTitle}>
        Bronze Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://echobind.com/'} image={Images.echobind} isLow />
        <Sponsor url={'https://www.capitalone.com/'} image={Images.capitalOne} isLow />
        <Sponsor url={'https://www.salesforce.com/'} image={Images.salesforce} isLow />
        <Sponsor url={'https://www.paypal.com/us/home'} image={Images.paypal} isLow />
        <Sponsor url={'https://www.instrument.com/'} image={Images.instrument} isLow />
        <Sponsor url={'http://www.qlik.com/us/'} image={Images.qlik} />
        <Sponsor url={'https://callstack.io/'} image={Images.callstack} isLow />
        <Sponsor url={'https://www.mlssoccer.com/'} image={Images.mls} isLow />
      </View>

      <Text style={styles.sponsorTierTitle}>
        Additional Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'http://www.qlik.com/us/'} image={Images.qlikCoffee} />
      </View>
    </View>
  )
}

export default Sponsors
