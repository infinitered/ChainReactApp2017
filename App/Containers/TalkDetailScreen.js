import React from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'
import TalkInfo from '../Components/TalkInfo'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
import styles from './Styles/TalkDetailScreenStyle'

class TalkDetail extends React.Component {

  static navigationOptions = {
    tabBar: {
      label: 'Schedule',
      icon: ({ focused }) => (
        <Image source={focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon} />
      )
    }
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render () {
    return (
      <PurpleGradient style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
              <Image style={styles.backButtonIcon} source={Images.arrowIcon} />
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.cardShadow1} />
            <View style={styles.cardShadow2} />
            <View style={styles.card}>
              <Image
                style={styles.avatar}
                source={{uri: 'https://infinite.red/images/chainreact/leland.png'}}
              />
              <Text style={styles.sectionHeading}>
                TALK
              </Text>
              <Text style={styles.heading}>
                React as a Platform: A path towards a truly cross-platform UI
              </Text>
              <Text style={styles.description}>
                Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
              </Text>
              <Text style={styles.sectionHeading}>
                ABOUT
              </Text>
              <Text style={styles.heading}>
                Leland Richardson
              </Text>
              <Text style={styles.description}>
                Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Text>
              <View style={styles.social}>
                <TouchableOpacity style={styles.socialLink} onPress={() => {}}>
                  <Image source={Images.twitterIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialLink} onPress={() => {}}>
                  <Image source={Images.githubIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <TalkInfo
              start={new Date('7/17/2017 10:00 AM')}
              duration={30}
              remindMe={false}
              toggleRemindMe={() => {}}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(TalkDetail)
