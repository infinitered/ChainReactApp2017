import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './Styles/RoundedButtonStyles';
import ExamplesRegistry from '../Services/ExamplesRegistry';
// Example
ExamplesRegistry.addComponentExample('Rounded Button', () => React.createElement(RoundedButton, { text: 'real buttons have curves', onPress: () => window.alert('Rounded Button Pressed!') }));
const RoundedButton = props => {
    const getText = () => {
        return props.text || props.children || '';
    };
    return (React.createElement(TouchableOpacity, { style: [styles.button, props.style], onPress: props.onPress }, React.createElement(Text, { style: styles.buttonText }, getText())));
};
RoundedButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    navigator: PropTypes.object,
    style: View.propTypes.style
};
export default RoundedButton;
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map 
//# sourceMappingURL=RoundedButton.js.map