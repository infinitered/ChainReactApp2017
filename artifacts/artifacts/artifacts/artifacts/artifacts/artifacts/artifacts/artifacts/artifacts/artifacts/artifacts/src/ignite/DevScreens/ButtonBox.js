import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './Styles/ButtonBoxStyles';
export default class ButtonBox extends React.Component {
    render() {
        return (React.createElement(TouchableOpacity, { style: [styles.container, this.props.style], onPress: this.props.onPress }, React.createElement(Image, { resizeMode: 'contain', source: this.props.image, style: styles.image }), React.createElement(Text, { style: styles.label }, this.props.text)));
    }
}
ButtonBox.propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string
};
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map 
//# sourceMappingURL=ButtonBox.js.map