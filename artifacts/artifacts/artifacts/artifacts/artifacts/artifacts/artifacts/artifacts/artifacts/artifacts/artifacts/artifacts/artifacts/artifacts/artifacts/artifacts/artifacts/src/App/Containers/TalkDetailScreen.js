import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import PurpleGradient from '../Components/PurpleGradient';
import TalkInfo from '../Components/TalkInfo';
import SocialMediaButton from '../Components/SocialMediaButton';
import { NavigationActions } from 'react-navigation';
import ScheduleActions from '../Redux/ScheduleRedux';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes';
import styles from './Styles/TalkDetailScreenStyle';
import NotificationActions from '../Redux/NotificationRedux';
import PushNotification from 'react-native-push-notification';
import PNHelpers from '../Lib/PushNotificationHelpers';
import { contains } from 'ramda';
class TalkDetail extends React.Component {
    constructor() {
        super(...arguments);
        this.goBack = () => {
            this.props.navigation.dispatch(NavigationActions.back());
        };
        this.renderSpeaker = (speaker, index) => {
            return (React.createElement(View, { key: index }, React.createElement(Text, { style: styles.heading }, speaker.name), React.createElement(Text, { style: styles.description }, speaker.bio), React.createElement(View, { style: styles.social }, React.createElement(SocialMediaButton, { network: 'twitter', spacing: 'right', onPress: () => this.props.onPressTwitter(speaker.twitter) }), React.createElement(SocialMediaButton, { network: 'github', spacing: 'right', onPress: () => this.props.onPressGithub(speaker.github) }))));
        };
        this.isSpecial = () => contains(this.props.title, this.props.specialTalks);
        this.renderSpeakers = () => {
            const { speakerInfo } = this.props;
            return (speakerInfo.map((speaker, index) => this.renderSpeaker(speaker, index)));
        };
        this.toggleReminder = () => {
            const { title, eventStart } = this.props;
            // Make a copy otherwise could be modified!!!
            const startCopy = new Date(eventStart.valueOf());
            LayoutAnimation.easeInEaseOut();
            // turn off reminder
            // possible issues on Android: https://github.com/zo0r/react-native-push-notification/issues/368
            if (this.isSpecial()) {
                this.props.talkNotSpecial(title);
                PushNotification.cancelLocalNotifications({
                    id: PNHelpers.pushMessage(title, startCopy)
                });
            }
            else {
                // turn on reminder
                this.props.talkSpecial(title);
                PushNotification.localNotificationSchedule({
                    message: PNHelpers.pushMessage(title, startCopy),
                    date: PNHelpers.notificationTime(startCopy),
                    userInfo: { id: PNHelpers.pushMessage(title, startCopy) }
                });
            }
        };
    }
    render() {
        return (React.createElement(PurpleGradient, { style: styles.linearGradient }, React.createElement(ScrollView, null, React.createElement(View, { style: styles.container }, React.createElement(TouchableOpacity, { style: styles.backButton, onPress: this.goBack }, React.createElement(Image, { style: styles.backButtonIcon, source: Images.arrowIcon }), React.createElement(Text, { style: styles.backButtonText }, "Back")), React.createElement(View, { style: styles.cardShadow1 }), React.createElement(View, { style: styles.cardShadow2 }), React.createElement(Image, { style: styles.avatar, source: { uri: `https://infinite.red/images/chainreact/${this.props.image}.png` } }), React.createElement(View, { style: styles.card }, React.createElement(Text, { style: styles.sectionHeading }, "TALK"), React.createElement(Text, { style: styles.heading }, this.props.title), React.createElement(Text, { style: styles.description }, this.props.description), React.createElement(Text, { style: styles.sectionHeading }, "ABOUT"), this.renderSpeakers()), React.createElement(TalkInfo, { start: new Date(this.props.eventStart), duration: Number(this.props.duration), remindMe: this.isSpecial(), toggleRemindMe: this.toggleReminder, onPressGithub: this.props.onPressGithub, onPressTwitter: this.props.onPressTwitter, isFinished: this.props.currentTime > this.props.eventStart, showWhenFinished: false })))));
    }
}
TalkDetail.navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (React.createElement(Image, { source: focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon }))
};
const mapStateToProps = (state) => {
    return Object.assign({}, state.schedule.selectedEvent, { currentTime: new Date(state.schedule.currentTime), specialTalks: state.notifications.specialTalks });
};
const mapDispatchToProps = (dispatch) => {
    return {
        onPressGithub: url => dispatch(ScheduleActions.visitGithub(url)),
        onPressTwitter: url => dispatch(ScheduleActions.visitTwitter(url)),
        talkSpecial: title => dispatch(NotificationActions.addTalk(title)),
        talkNotSpecial: title => dispatch(NotificationActions.removeTalk(title))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TalkDetail);
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map 
//# sourceMappingURL=TalkDetailScreen.js.map