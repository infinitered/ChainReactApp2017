import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Images } from '../Themes';
import styles from './Styles/RemindMeButtonStyle';
const RemindMeButton = props => {
    const { on, onPress } = props;
    const icon = on ? Images.activeNotificationIcon : Images.inactiveNotificationIcon;
    const buttonText = on ? 'Turn Off' : 'Remind Me';
    return (React.createElement(TouchableOpacity, { onPress: onPress }, React.createElement(View, { style: [styles.button, on && styles.activeButton] }, React.createElement(Image, { source: icon, style: styles.icon }), React.createElement(Text, { style: [styles.text, on && styles.activeText] }, buttonText))));
};
RemindMeButton.propTypes = {
    on: PropTypes.bool.isRequired,
    onPress: PropTypes.func
};
RemindMeButton.defaultProps = {
    on: false
};
export default RemindMeButton;
//# sourceMappingURL=RemindMeButton.js.map 
//# sourceMappingURL=RemindMeButton.js.map 
//# sourceMappingURL=RemindMeButton.js.map