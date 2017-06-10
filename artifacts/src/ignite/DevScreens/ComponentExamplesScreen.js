// An All Components Screen is a great way to dev and quick-test components
import React from 'react';
import { Platform, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Images } from './DevTheme';
import styles from './Styles/ComponentExamplesScreenStyles';
// Examples Render Engine
import ExamplesRegistry from '../../App/Services/ExamplesRegistry';
class ComponentExamplesScreen extends React.Component {
    renderAndroidWarning() {
        if (Platform.OS === 'android') {
            return (React.createElement(Text, { style: styles.sectionText }, "Android only: Animations are slow? You are probably running the app in debug mode. It will run more smoothly once your app will be built."));
        }
        return null;
    }
    render() {
        return (React.createElement(View, { style: [styles.container, styles.mainContainer] },
            React.createElement(Image, { source: Images.background, style: styles.backgroundImage, resizeMode: 'stretch' }),
            React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.goBack(), style: {
                    position: 'absolute',
                    paddingTop: 30,
                    paddingHorizontal: 5,
                    zIndex: 10
                } },
                React.createElement(Image, { source: Images.backButton })),
            React.createElement(ScrollView, { showsVerticalScrollIndicator: false, style: styles.container },
                React.createElement(View, { style: { alignItems: 'center', paddingTop: 60 } },
                    React.createElement(Image, { source: Images.components, style: styles.logo }),
                    React.createElement(Text, { style: styles.titleText }, "Components")),
                React.createElement(View, { style: styles.description },
                    this.renderAndroidWarning(),
                    React.createElement(Text, { style: styles.sectionText }, "Sometimes called a 'Style Guide', or 'Pattern Library', Examples Screen is filled with usage examples of fundamental components for a given application.  Use this merge-friendly way for your team to show/use/test components.  Examples are registered inside each component's file for quick changes and usage identification.")),
                ExamplesRegistry.renderComponentExamples())));
    }
}
export default ComponentExamplesScreen;
//# sourceMappingURL=ComponentExamplesScreen.js.map