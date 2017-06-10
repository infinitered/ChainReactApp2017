import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Images, Videos } from '../Themes';
import TimeIndicator from './TimeIndicator';
import BackgroundVideo from './BackgroundVideo';
import styles from './Styles/BreakStyle';
export default class Break extends React.Component {
    constructor(props) {
        super(props);
        this.onLayout = (event) => {
            const width = event.nativeEvent.layout.width;
            this.setState({
                imageWidth: width
            });
        };
        this.state = {
            imageWidth: 335
        };
    }
    renderContent() {
        const { type, title, duration, isCurrentDay, isActive } = this.props;
        const containerStyles = [
            styles.container,
            isCurrentDay && styles.currentDay,
            isActive && styles.active
        ];
        const background = Images[`${type}Break`];
        const video = Videos[type];
        const timeframe = duration > 89 ? `${duration / 60} Hours` : `${duration} Minutes`;
        const cellTitle = title || `${type.toUpperCase()} BREAK`;
        const imageWidth = this.state.imageWidth;
        return (React.createElement(View, null, React.createElement(View, { style: containerStyles, onLayout: this.onLayout }, React.createElement(Image, { source: background, style: [styles.background, { width: imageWidth }] }), React.createElement(BackgroundVideo, { source: video, style: styles.video, isActive: isActive }), React.createElement(View, { style: styles.contentContainer }, React.createElement(View, { style: styles.content }, React.createElement(Text, { style: styles.heading }, cellTitle), React.createElement(Text, { style: styles.duration }, timeframe)), this.renderSponsor()))));
    }
    renderSponsor() {
        const { type } = this.props;
        if (type === 'coffee') {
            return (React.createElement(View, { style: styles.sponsor }, React.createElement(Image, { source: Images.sponsor }), React.createElement(Text, { style: styles.sponsorText }, "by Qlik Playground")));
        }
    }
    renderWrapper() {
        if (this.props.onPress) {
            return (React.createElement(TouchableOpacity, { onPress: this.props.onPress }, this.renderContent()));
        }
        else {
            return this.renderContent();
        }
    }
    render() {
        const { currentTime, duration, start, isActive } = this.props;
        return (React.createElement(View, null, this.renderWrapper(), isActive && React.createElement(TimeIndicator, { start: start, duration: duration, time: currentTime })));
    }
}
Break.propTypes = {
    start: PropTypes.instanceOf(Date).isRequired,
    currentTime: PropTypes.instanceOf(Date).isRequired,
    duration: PropTypes.number.isRequired
};
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map 
//# sourceMappingURL=Break.js.map