import React from 'react'
import {
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Text,
  LayoutAnimation
} from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'
import InfiniteRed from '../Components/InfiniteRed'
import SeeProcess from '../Components/SeeProcess'
import Twitter from '../Components/Twitter'
import Sponsors from '../Components/Sponsors'
import LiveHelp from '../Components/LiveHelp'
import ConferenceAnnouncements from '../Components/ConferenceAnnouncements'
import { Images } from '../Themes'
import { connect } from 'react-redux'
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

  setActiveTab (tab) {
    LayoutAnimation.configureNext({...LayoutAnimation.Presets.linear, duration: 250})
    this.setState({activeTab: tab})
  }

  renderTabs () {
    const { activeTab } = this.state
    const liveHelpStyles = [
      styles.tab, activeTab === 'liveHelp' && styles.activeTab
    ]
    const sponsorStyles = [
      styles.tab, activeTab === 'sponsors' && styles.activeTab
    ]
    const liveHelpTextStyles = [
      styles.tabText, activeTab === 'liveHelp' && styles.activeTabText
    ]
    const sponsorTextStyles = [
      styles.tabText, activeTab === 'sponsors' && styles.activeTabText
    ]

    return (
      <View style={styles.tabsContainer}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={liveHelpStyles}
            onPress={() => this.setActiveTab('liveHelp')}>
            <Text style={liveHelpTextStyles}>
              Live Help
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sponsorStyles}
            onPress={() => this.setActiveTab('sponsors')}>
            <Text style={sponsorTextStyles}>
              Sponsors
            </Text>
          </TouchableOpacity>
        </View>
        {this.renderTabsContent()}
      </View>
    )
  }

  renderTabsContent () {
    const { activeTab } = this.state
    return activeTab === 'liveHelp' ? <LiveHelp /> : <Sponsors />
  }

  render () {
    return (
      <PurpleGradient style={[styles.linearGradient, {flex: 1}]}>
        <ScrollView>
          <View style={styles.container}>
            <InfiniteRed />
            <SeeProcess />
            <ConferenceAnnouncements currentDate={this.props.currentTime} />
            <Twitter />
            {this.renderTabs()}
          </View>
        </ScrollView>
      </PurpleGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTime: new Date(state.schedule.currentTime)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
