import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import PurpleGradient from '../Components/PurpleGradient';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { format, addMinutes } from 'date-fns';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes';
import styles from './Styles/BreakDetailScreenStyle';
class BreakDetail extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = () => {
            this.props.navigation.dispatch(NavigationActions.back());
        };
        this.onCardLayout = (event) => {
            const width = event.nativeEvent.layout.width;
            this.setState({
                imageWidth: width - 20
            });
        };
        this.renderMainImage = () => {
            const { type, duration, eventStart } = this.props;
            const mainImage = type === 'lunch' ? Images.lunch : Images.lunch;
            const eventDuration = Number(duration);
            const prettyStartTime = format(eventStart, 'h:mm');
            const endTime = addMinutes(eventStart, eventDuration);
            const prettyEndTime = format(endTime, 'h:mm');
            const meridiem = format(endTime, 'A');
            return (React.createElement(View, { style: styles.mainImageContainer }, React.createElement(Image, { style: [styles.mainImage, { width: this.state.imageWidth }], source: mainImage }), React.createElement(View, { style: styles.mainHeadingContainer }, React.createElement(Text, { style: styles.breakHeading }, this.props.type.toUpperCase(), " BREAK"), React.createElement(Text, { style: styles.breakDuration }, React.createElement(Text, null, prettyStartTime, " - ", prettyEndTime), React.createElement(Text, { style: styles.meridiem }, meridiem)))));
        };
        this.renderOption = (option, index) => {
            return (React.createElement(Text, { key: index, style: styles.description }, `\u2022  ${option}`));
        };
        this.renderOptions = (options) => {
            return (React.createElement(View, { style: styles.descriptionContainer }, options.map((option, index) => this.renderOption(option, index))));
        };
        this.state = {
            imageWidth: 315
        };
    }
    render() {
        const { options, veganOptions } = this.props;
        return (React.createElement(PurpleGradient, { style: styles.linearGradient }, React.createElement(ScrollView, null, React.createElement(View, { style: styles.container }, React.createElement(TouchableOpacity, { style: styles.backButton, onPress: this.goBack }, React.createElement(Image, { style: styles.backButtonIcon, source: Images.arrowIcon }), React.createElement(Text, { style: styles.backButtonText }, "Back")), React.createElement(View, { style: styles.cardShadow1 }), React.createElement(View, { style: styles.cardShadow2 }), React.createElement(View, { style: styles.card, onLayout: this.onCardLayout }, this.renderMainImage(), React.createElement(View, { style: styles.content }, React.createElement(Text, { style: styles.heading }, this.props.type === 'lunch' ? 'Lunch' : 'Refreshment', " Options"), React.createElement(View, { style: styles.descriptionContainer }, this.renderOptions(options)), React.createElement(Text, { style: styles.heading }, "Vegan Options"), React.createElement(View, { style: styles.descriptionContainer }, this.renderOptions(veganOptions))))))));
    }
}
BreakDetail.navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (React.createElement(Image, { source: focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon }))
};
const mapStateToProps = (state) => {
    return Object.assign({}, state.schedule.selectedEvent);
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(BreakDetail);
//# sourceMappingURL=BreakDetailScreen.js.map 
//# sourceMappingURL=BreakDetailScreen.js.map 
//# sourceMappingURL=BreakDetailScreen.js.map 
//# sourceMappingURL=BreakDetailScreen.js.map