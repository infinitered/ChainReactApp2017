import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Callout } from 'react-native-maps';
import Styles from './Styles/VenueMapCalloutStyles';
export default (props) => {
    const { location, onPress } = props;
    return (React.createElement(Callout, { style: Styles.callout }, React.createElement(TouchableOpacity, { onPress: onPress }, React.createElement(Text, null, location.title))));
};
//# sourceMappingURL=VenueMapCallout.js.map 
//# sourceMappingURL=VenueMapCallout.js.map 
//# sourceMappingURL=VenueMapCallout.js.map 
//# sourceMappingURL=VenueMapCallout.js.map 
//# sourceMappingURL=VenueMapCallout.js.map