import React from 'react';
import { AppState, View, ListView, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PurpleGradient from '../Components/PurpleGradient';
import Talk from '../Components/Talk';
import Break from '../Components/Break';
import ScheduleActions from '../Redux/ScheduleRedux';
import { connect } from 'react-redux';
import { compareAsc, isSameDay, addMinutes, isWithinRange } from 'date-fns';
import { merge, groupWith, contains, assoc, map } from 'ramda';
import NotificationActions from '../Redux/NotificationRedux';
import Config from '../Config/AppConfig';
// Styles
import { Images } from '../Themes';
import styles from './Styles/TalksScreenStyle';
const isCurrentDay = (currentTime, activeDay) => isSameDay(currentTime, new Date(Config.conferenceDates[activeDay]));
const addSpecials = (specialTalksList, talks) => map((talk) => assoc('special', contains(talk.title, specialTalksList), talk), talks);
class ScheduleScreen extends React.Component {
    constructor(props) {
        super(props);
        this.onEventPress = (rowData) => {
            const { navigation, setSelectedEvent } = this.props;
            setSelectedEvent(rowData);
            rowData.type === 'talk'
                ? navigation.navigate('TalkDetail')
                : navigation.navigate('BreakDetail');
        };
        this.renderRow = (rowData) => {
            const { currentTime, isCurrentDay } = this.state;
            const { eventDuration, eventStart, eventEnd, special } = rowData;
            const isActive = isWithinRange(currentTime, eventStart, eventEnd);
            const isFinished = currentTime > eventEnd;
            if (rowData.type === 'talk') {
                return (React.createElement(Talk, { name: rowData.speaker, avatarURL: `https://infinite.red/images/chainreact/${rowData.image}.png`, title: rowData.title, start: eventStart, duration: eventDuration, onPress: () => this.onEventPress(rowData), onPressTwitter: () => this.props.onPressTwitter(rowData.speakerInfo[0].twitter), onPressGithub: () => this.props.onPressGithub(rowData.speakerInfo[0].github), talkSpecial: () => this.props.onTalkSpecial(rowData.title), talkNotSpecial: () => this.props.onTalkNotSpecial(rowData.title), currentTime: currentTime, isCurrentDay: isCurrentDay, isActive: isActive, isSpecial: special, isFinished: isFinished, showWhenFinished: true }));
            }
            else {
                return (React.createElement(Break, { type: rowData.type, title: rowData.title, start: eventStart, duration: eventDuration, onPress: () => this.onEventPress(rowData), currentTime: currentTime, isCurrentDay: isCurrentDay, isActive: isActive }));
            }
        };
        this._handleAppStateChange = (nextAppState) => {
            if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
                this.props.getScheduleUpdates();
            }
            this.setState({ appState: nextAppState });
        };
        const mergeTimes = (e) => {
            const eventDuration = Number(e.duration);
            const eventStart = new Date(e.time);
            const eventEnd = addMinutes(eventStart, eventDuration - 1);
            return merge(e, { eventStart, eventEnd, eventDuration });
        };
        const sorted = [...this.props.schedule].map(mergeTimes).sort((a, b) => {
            return compareAsc(a.eventStart, b.eventStart);
        });
        const eventsByDay = groupWith((a, b) => isSameDay(a.eventStart, b.eventStart), sorted);
        const rowHasChanged = (r1, r2) => {
            const { currentTime } = this.state;
            const { eventStart, eventEnd } = r2;
            const isActive = isWithinRange(currentTime, eventStart, eventEnd);
            return r1 !== r2 || isActive;
        };
        const ds = new ListView.DataSource({ rowHasChanged });
        // Datasource is always in state
        this.state = {
            currentTime: props.currentTime,
            eventsByDay: eventsByDay,
            dataSource: ds.cloneWithRows(addSpecials(this.props.specialTalks, eventsByDay[0])),
            isCurrentDay: isCurrentDay(this.props.currentTime, 0),
            activeDay: 0,
            appState: AppState.currentState
        };
    }
    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }
    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }
    componentWillReceiveProps(newProps) {
        const { activeDay, eventsByDay, dataSource } = this.state;
        // Update currentTime before updating dataSource
        if (newProps.currentTime) {
            this.setState({
                currentTime: newProps.currentTime
            }, () => {
                this.setState({
                    dataSource: dataSource.cloneWithRows(addSpecials(this.props.specialTalks, eventsByDay[activeDay].slice())),
                    isCurrentDay: isCurrentDay(newProps.currentTime, activeDay)
                });
            });
        }
    }
    // returns true if the dataSource is empty
    noRowData() {
        return this.state.dataSource.getRowCount() === 0;
    }
    setActiveDay(day) {
        const { eventsByDay, dataSource } = this.state;
        const { currentTime } = this.props;
        this.setState(() => ({
            dataSource: dataSource.cloneWithRows(addSpecials(this.props.specialTalks, eventsByDay[day])),
            activeDay: day,
            isCurrentDay: isCurrentDay(currentTime, day)
        }));
        // Scroll to top on tab change or press of current tab
        this.refs.listView.scrollTo({ y: 0, animated: false });
    }
    renderDayToggle() {
        const { activeDay } = this.state;
        return (React.createElement(LinearGradient, { start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, locations: [0.0, 0.38, 1.0], colors: ['#46114E', '#521655', '#571757'], style: styles.headerGradient }, React.createElement(View, { style: styles.dayToggle }, React.createElement(TouchableOpacity, { onPressIn: () => this.setActiveDay(0) }, React.createElement(Text, { style: activeDay === 0 ? styles.activeDay : styles.inactiveDay }, "Monday")), React.createElement(TouchableOpacity, { onPressIn: () => this.setActiveDay(1) }, React.createElement(Text, { style: activeDay === 1 ? styles.activeDay : styles.inactiveDay }, "Tuesday")))));
    }
    render() {
        return (React.createElement(PurpleGradient, { style: styles.linearGradient }, this.renderDayToggle(), this.state.isCurrentDay && React.createElement(View, { style: styles.timeline }), React.createElement(ListView, { ref: 'listView', contentContainerStyle: styles.listContent, dataSource: this.state.dataSource, onLayout: this.onLayout, renderRow: this.renderRow, enableEmptySections: true })));
    }
}
ScheduleScreen.navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (React.createElement(Image, { source: focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon }))
};
const mapStateToProps = (state) => {
    return {
        currentTime: new Date(state.schedule.currentTime),
        schedule: state.schedule.speakerSchedule,
        specialTalks: state.notifications.specialTalks
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getScheduleUpdates: () => dispatch(ScheduleActions.getScheduleUpdates()),
        setSelectedEvent: (data) => dispatch(ScheduleActions.setSelectedEvent(data)),
        onPressGithub: url => dispatch(ScheduleActions.visitGithub(url)),
        onPressTwitter: url => dispatch(ScheduleActions.visitTwitter(url)),
        onTalkSpecial: title => dispatch(NotificationActions.addTalk(title)),
        onTalkNotSpecial: title => dispatch(NotificationActions.removeTalk(title))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen);
//# sourceMappingURL=ScheduleScreen.js.map 
//# sourceMappingURL=ScheduleScreen.js.map 
//# sourceMappingURL=ScheduleScreen.js.map 
//# sourceMappingURL=ScheduleScreen.js.map 
//# sourceMappingURL=ScheduleScreen.js.map 
//# sourceMappingURL=ScheduleScreen.js.map 
//# sourceMappingURL=ScheduleScreen.js.map 
//# sourceMappingURL=ScheduleScreen.js.map