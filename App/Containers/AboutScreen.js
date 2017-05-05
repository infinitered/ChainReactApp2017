import React from 'react'
import {
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Text,
  Linking
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import RoundedButton from '../Components/RoundedButton'
import PurpleGradient from '../Components/PurpleGradient'
import { Images } from '../Themes'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutScreenStyle'

class AboutScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'General Info',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeInfoIcon : Images.inactiveInfoIcon} />
    )
  }

  tweetWithHashtag () {
    const appURL = 'twitter://post?hashtags=ChainReactConf'
    const webURL = 'https://twitter.com/intent/tweet?hashtags=ChainReactConf'
    Linking.canOpenURL(appURL).then((supported) =>
      supported ? Linking.openURL(appURL) : Linking.openURL(webURL)
    )
  }

  render () {
    const gradient = ['#136EB5', 'rgba(1,192,182,0.88)']
    return (
      <PurpleGradient style={[styles.linearGradient, {flex: 1}]}>
        <ScrollView>
          <View style={styles.container}>
            <LinearGradient
              colors={gradient}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={styles.slack}>
              <Image style={styles.slackIcon} source={Images.slack} />
              <Text style={styles.heading}>Join Us On Slack</Text>
              <RoundedButton
                text='Join the IR Slack Community'
                onPress={() => Linking.openURL('http://community.infinite.red')}
                style={styles.slackButton}
              />
            </LinearGradient>
            <View style={styles.twitter}>
              <Image style={styles.blowhorn} source={Images.blowhorn} />
              <TouchableOpacity onPress={() => this.tweetWithHashtag()}>
                <Text style={styles.heading}>
                  #ChainReactConf
                </Text>
              </TouchableOpacity>
              <Text style={styles.description}>
                Make your friends jealous by tweeting, posting,
                or whatever it is you do with the hashtag&nbsp;
                <Text style={styles.hashtag} onPress={() => this.tweetWithHashtag()}>
                  #chainreactconf
                </Text>.
              </Text>
            </View>
            <View style={styles.sponsors}>
              <Text style={styles.heading}>Our Sponsors</Text>
              <Text style={styles.description}>
                We love the sponsors we got for this conference.
                They make all of this fun stuff possible, and we
                couldn’t have done it without them.
              </Text>

              <Text style={styles.sponsorTierTitle}>Platinum Level</Text>
              <View style={styles.sponsorTier}>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
              </View>

              <Text style={styles.sponsorTierTitle}>Gold Level</Text>
              <View style={styles.sponsorTier}>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
              </View>

              <Text style={styles.sponsorTierTitle}>Silver Level</Text>
              <View style={styles.sponsorTier}>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
              </View>

              <Text style={styles.sponsorTierTitle}>Bronze Level</Text>
              <View style={styles.sponsorTier}>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sponsor}
                  onPress={() => Linking.openURL('https://www.squarespace.com/')}>
                  <Image source={Images.squarespace} />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </PurpleGradient>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
