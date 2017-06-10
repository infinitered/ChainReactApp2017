import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/FullButtonStyles';
import ExamplesRegistry from '../Services/ExamplesRegistry';
// Example
ExamplesRegistry.addComponentExample('Full Button', () => React.createElement(FullButton, { text: 'Hey there', onPress: () => window.alert('Full Button Pressed!') }));
const FullButton = (props) => {
    return (React.createElement(TouchableOpacity, { style: [styles.button, props.styles], onPress: props.onPress }, React.createElement(Text, { style: styles.buttonText }, props.text.toUpperCase())));
};
FullButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    styles: PropTypes.object
};
export default FullButton;
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map 
//# sourceMappingURL=FullButton.js.map