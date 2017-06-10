// Fair Warning:  PluginExamples has a good bit of Ignite automation in editing.
// Though robust, if you should modify this file, review your changes with us
// As to not break the automated addition/subtractions.
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Images } from './DevTheme';
// Examples Render Engine
import ExamplesRegistry from '../../App/Services/ExamplesRegistry';
import '../Examples/Components/MapsExample.js';
import '../Examples/Components/animatableExample.js';
import '../Examples/Components/i18nExample.js';
import '../Examples/Components/vectorExample.js';
// Styles
import styles from './Styles/PluginExamplesScreenStyles';
class PluginExamplesScreen extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.mainContainer }, React.createElement(Image, { source: Images.background, style: styles.backgroundImage, resizeMode: 'stretch' }), React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.goBack(null), style: {
                position: 'absolute',
                paddingTop: 30,
                paddingHorizontal: 5,
                zIndex: 10
            } }, React.createElement(Image, { source: Images.backButton })), React.createElement(ScrollView, { style: styles.container }, React.createElement(View, { style: { alignItems: 'center', paddingTop: 60 } }, React.createElement(Image, { source: Images.usageExamples, style: styles.logo }), React.createElement(Text, { style: styles.titleText }, "Plugin Examples")), React.createElement(View, { style: styles.section }, React.createElement(Text, { style: styles.sectionText }, "The Plugin Examples screen is a playground for 3rd party libs and logic proofs. Items on this screen can be composed of multiple components working in concert.  Functionality demos of libs and practices")), ExamplesRegistry.renderPluginExamples(), React.createElement(View, { style: styles.screenButtons }))));
    }
}
export default StackNavigator({
    PluginExamplesScreen: { screen: PluginExamplesScreen }
}, {
    headerMode: 'screen',
    initialRouteName: 'PluginExamplesScreen',
    navigationOptions: {
        header: {
            visible: false,
            style: {
                backgroundColor: '#3e243f'
            }
        }
    }
});
//# sourceMappingURL=PluginExamplesScreen.js.map 
//# sourceMappingURL=PluginExamplesScreen.js.map 
//# sourceMappingURL=PluginExamplesScreen.js.map 
//# sourceMappingURL=PluginExamplesScreen.js.map 
//# sourceMappingURL=PluginExamplesScreen.js.map 
//# sourceMappingURL=PluginExamplesScreen.js.map