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
import { Images, Metrics } from '../Themes'
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

  constructor (props) {
    super(props)

    this.state = {
      activeTab: 'liveHelp'
    }
  }

  tweetWithHashtag () {
    const appURL = 'twitter://post?hashtags=ChainReactConf'
    const webURL = 'https://twitter.com/intent/tweet?hashtags=ChainReactConf'
    Linking.canOpenURL(appURL).then((supported) =>
      supported ? Linking.openURL(appURL) : Linking.openURL(webURL)
    )
  }

  setActiveTab (tab) {
    this.setState({activeTab: tab})
  }

  renderSlack () {
    const gradient = ['#136EB5', 'rgba(1,192,182,0.88)']

    return (
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
    )
  }

  renderWelcomeParty () {
    return (
      <View>
        <Image source={Images.squarespacePhoto} style={{width: Metrics.screenWidth}}>
          <View style={styles.afterPartyContainer}>
            <View style={styles.partyHeader}>
              <Image source={Images.sqspLogo} />
              <Text style={styles.welcomeParty}>WELCOME PARTY</Text>
              <Text style={styles.partyDescription}>AT SQUARESPACE PDX</Text>
            </View>
            <View style={styles.partyInfo}>
              <Text style={styles.partyDescription}>SUNDAY, JULY 9 | 4-8PM</Text>
              <Text style={styles.partyDescription}>311 SW WASHINGTON STREET</Text>
            </View>
          </View>
        </Image>
        <RoundedButton
          onPress={() => Linking.openURL('https://chainreact.squarespace.com')}
          style={styles.partyButton}
        >
          <Text style={styles.partyButtonText}>I WANT TO GO</Text>
        </RoundedButton>
      </View>
    )
  }

  renderHashtag () {
    return (
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
    )
  }

  renderTabs () {
    const { activeTab } = this.state

    const liveHelpStyles = [styles.tab, activeTab === 'liveHelp' && styles.activeTab]
    const sponsorStyles = [styles.tab, activeTab === 'sponsors' && styles.activeTab]
    const liveHelpTextStyles = [styles.tabText, activeTab === 'liveHelp' && styles.activeTabText]
    const sponsorTextStyles = [styles.tabText, activeTab === 'sponsors' && styles.activeTabText]

    return (
      <View style={styles.tabsContainer}>
        <View style={styles.tabs}>
          <TouchableOpacity style={liveHelpStyles} onPress={() => { this.setActiveTab('liveHelp') }}>
            <Text style={liveHelpTextStyles} >Live Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={sponsorStyles} onPress={() => { this.setActiveTab('sponsors') }}>
            <Text style={sponsorTextStyles}>Sponsors</Text>
          </TouchableOpacity>
        </View>
        {this.renderTabsContent()}
      </View>
    )
  }

  renderTabsContent () {
    const { activeTab } = this.state

    if (activeTab === 'liveHelp') {
      return (this.renderLiveHelp())
    } else {
      return (this.renderSponsors())
    }
  }

  renderLiveHelp () {
    return (
      <View>
        <Text style={{color: 'white'}}> Live Help </Text>
      </View>
    )
  }

  renderSponsor (url, image, style) {
    return (
      <TouchableOpacity
        style={styles.sponsor}
        onPress={() => Linking.openURL(url)}>
        <Image style={style} source={image} />
      </TouchableOpacity>
    )
  }

  renderSponsors () {
    return (
      <View style={styles.sponsors}>
        <Text style={styles.heading}>Our Sponsors</Text>
        <Text style={styles.description}>
          We love the sponsors we got for this conference.
          They make all of this fun stuff possible, and we
          couldn’t have done it without them.
        </Text>

        <Text style={styles.sponsorTierTitle}>Platinum Level</Text>
        <View style={styles.sponsorTier}>
          {this.renderSponsor('https://www.squarespace.com/', Images.squarespaceSponsor, styles.squarespaceSponsor)}
        </View>

        <Text style={styles.sponsorTierTitle}>Gold Level</Text>
        <View style={styles.sponsorTier}>
          {this.renderSponsor('https://nativebase.io/', Images.nativeBaseSponsor, styles.goldSponsor)}
          {this.renderSponsor('https://formidable.com/', Images.formidableSponsor, styles.goldSponsor)}
          {this.renderSponsor('https://moduscreate.com/', Images.modusSponsor, styles.goldSponsor)}
        </View>

        <Text style={styles.sponsorTierTitle}>Silver Level</Text>
        <View style={styles.sponsorTier}>
          {this.renderSponsor('https://aws.amazon.com/', Images.amazonSponsor)}
          {this.renderSponsor('http://reactnative.training/', Images.trainingSponsor)}
          {this.renderSponsor('https://gudog.co.uk/', Images.gudogSponsor)}
          {this.renderSponsor('https://rangle.io/', Images.rangleSponsor)}
        </View>

        <Text style={styles.sponsorTierTitle}>Bronze Level</Text>
        <View style={styles.sponsorTier}>
          {this.renderSponsor('https://echobind.com/', Images.echobindSponsor)}
          {this.renderSponsor('https://www.salesforce.com/', Images.salesforceSponsor)}
          {this.renderSponsor('https://www.capitalone.com/', Images.capitalOneSponsor)}
          {this.renderSponsor('https://www.instrument.com/', Images.instrumentSponsor)}
          {this.renderSponsor('https://www.paypal.com/us/home', Images.paypalSponsor)}
          {this.renderSponsor('http://www.qlik.com/us/', Images.qlikSponsor)}
        </View>

      </View>
    )
  }

  render () {
    return (
      <PurpleGradient style={[styles.linearGradient, {flex: 1}]}>
        <ScrollView>
          <View style={styles.container}>
            {this.renderSlack()}
            {this.renderWelcomeParty()}
            {this.renderHashtag()}
            {this.renderTabs()}
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
