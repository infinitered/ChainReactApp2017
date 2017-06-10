import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { Images } from './DevTheme';
import ButtonBox from './ButtonBox';
import { StackNavigator } from 'react-navigation';
// Screens
import APITestingScreen from './APITestingScreen';
import ComponentExamplesScreen from './ComponentExamplesScreen';
import DeviceInfoScreen from './DeviceInfoScreen';
import PluginExamplesScreen from './PluginExamplesScreen';
import ThemeScreen from './ThemeScreen';
import FaqScreen from './FaqScreen';
// Styles
import styles from './Styles/PresentationScreenStyles';
class PresentationScreen extends React.Component {
    constructor() {
        super(...arguments);
        this.openComponents = () => {
            this.props.navigation.navigate('ComponentExamplesScreen');
        };
        this.openUsage = () => {
            this.props.navigation.navigate('PluginExamplesScreen');
        };
        this.openApi = () => {
            this.props.navigation.navigate('APITestingScreen');
        };
        this.openTheme = () => {
            this.props.navigation.navigate('ThemeScreen');
        };
        this.openDevice = () => {
            this.props.navigation.navigate('DeviceInfoScreen');
        };
        this.openFaq = () => {
            this.props.navigation.navigate('FaqScreen');
        };
    }
    render() {
        return (React.createElement(View, { style: styles.mainContainer }, React.createElement(Image, { source: Images.background, style: styles.backgroundImage, resizeMode: 'stretch' }), React.createElement(TouchableOpacity, { onPress: this.props.screenProps.toggle, style: {
                position: 'absolute',
                paddingTop: 30,
                paddingHorizontal: 10,
                zIndex: 10
            } }, React.createElement(Image, { source: Images.closeButton })), React.createElement(ScrollView, { showsVerticalScrollIndicator: false, bounces: false, style: styles.container }, React.createElement(View, { style: styles.centered }, React.createElement(Image, { source: Images.igniteClear, style: styles.logo })), React.createElement(Text, { style: styles.sectionText }, "Default screens for development, debugging, and alpha testing are available below."), React.createElement(View, { style: styles.buttonsContainer }, React.createElement(ButtonBox, { onPress: this.openComponents, style: styles.componentButton, image: Images.components, text: 'Components' }), React.createElement(ButtonBox, { onPress: this.openUsage, style: styles.usageButton, image: Images.usageExamples, text: 'Plugin Examples' })), React.createElement(View, { style: styles.buttonsContainer }, React.createElement(ButtonBox, { onPress: this.openApi, style: styles.apiButton, image: Images.api, text: 'API Testing' }), React.createElement(ButtonBox, { onPress: this.openTheme, image: Images.theme, text: 'Theme' })), React.createElement(View, { style: styles.buttonsContainer }, React.createElement(ButtonBox, { onPress: this.openDevice, style: styles.deviceButton, image: Images.deviceInfo, text: 'Device Info' }), React.createElement(ButtonBox, { onPress: this.openFaq, style: styles.usageButton, image: Images.faq, text: 'FAQ' }))), React.createElement(View, { style: styles.banner }, React.createElement(Text, { style: styles.bannerLabel }, "Made with \u2764\uFE0F by Infinite Red"))));
    }
}
export default StackNavigator({
    PresentationScreen: { screen: PresentationScreen },
    APITestingScreen: { screen: APITestingScreen },
    ComponentExamplesScreen: { screen: ComponentExamplesScreen },
    DeviceInfoScreen: { screen: DeviceInfoScreen },
    PluginExamplesScreen: { screen: PluginExamplesScreen },
    ThemeScreen: { screen: ThemeScreen },
    FaqScreen: { screen: FaqScreen }
}, {
    initialRouteName: 'PresentationScreen',
    headerMode: 'none',
    // Keeping this here for future when we can make
    navigationOptions: {
        header: {
            left: (React.createElement(TouchableOpacity, { onPress: () => window.alert('pop') }, React.createElement(Image, { source: Images.closeButton, style: { marginHorizontal: 10 } }))),
            style: {
                backgroundColor: '#3e243f'
            }
        }
    }
});
//# sourceMappingURL=PresentationScreen.js.map 
//# sourceMappingURL=PresentationScreen.js.map 
//# sourceMappingURL=PresentationScreen.js.map