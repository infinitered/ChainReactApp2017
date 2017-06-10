import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import RemindMeButton from './RemindMeButton';
import SocialMediaButton from './SocialMediaButton';
import { format } from 'date-fns';
import styles from './Styles/TalkInfoStyle';
const TalkInfo = props => {
    const { start, duration, remindMe, toggleRemindMe, isFinished, showWhenFinished } = props;
    const formattedStart = format(start, 'h:mmA');
    const showRemindMe = !isFinished;
    const showSocialMedia = isFinished && showWhenFinished;
    return (React.createElement(View, { style: styles.container }, React.createElement(View, { style: styles.details }, React.createElement(View, { style: styles.detail }, React.createElement(Text, { style: styles.detailLabel }, "Start"), React.createElement(Text, { style: styles.detailText }, formattedStart)), React.createElement(View, { style: styles.detail }, React.createElement(Text, { style: styles.detailLabel }, "Duration"), React.createElement(Text, { style: styles.detailText }, `${duration} Minutes`))), showRemindMe &&
        React.createElement(View, { style: styles.remindMe }, React.createElement(RemindMeButton, { onPress: toggleRemindMe, on: remindMe })), showSocialMedia &&
        React.createElement(View, { style: styles.socialButtons }, React.createElement(SocialMediaButton, { network: 'twitter', onPress: props.onPressTwitter }), React.createElement(SocialMediaButton, { network: 'github', onPress: props.onPressGithub }))));
};
TalkInfo.propTypes = {
    start: PropTypes.instanceOf(Date).isRequired,
    duration: PropTypes.number.isRequired,
    remindMe: PropTypes.bool.isRequired,
    toggleRemindMe: PropTypes.func.isRequired,
    isFinished: PropTypes.bool.isRequired,
    showWhenFinished: PropTypes.bool.isRequired,
    onPressGithub: PropTypes.func,
    onPressTwitter: PropTypes.func
};
TalkInfo.defaultProps = {
    remindMe: false,
    isFinished: false
};
export default TalkInfo;
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map 
//# sourceMappingURL=TalkInfo.js.map