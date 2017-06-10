import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Images } from './DevTheme';
import R from 'ramda';
// Styles
import styles from './Styles/ThemeScreenStyles';
// Colors
const colors = R.keys(Colors);
// Font Types
const types = R.keys(Fonts.type);
// Font Styles
const fontStyles = R.keys(Fonts.style);
export default class ThemeScreen extends React.Component {
    renderColor(color) {
        return (React.createElement(View, { style: styles.colorContainer, key: `${color}Container` }, React.createElement(View, { style: styles.backgroundContainer, key: `${color}BackgroundContainer` }, React.createElement(Image, { style: styles.backerImage, source: Images.tileBg, key: `${color}BackgroundImage` }), React.createElement(View, { style: [styles.colorSquare, { backgroundColor: Colors[color] }], key: `${color}Square` })), React.createElement(Text, { style: styles.colorName, key: `${color}Text` }, color)));
    }
    renderColors() {
        return colors.map((color) => this.renderColor(color));
    }
    renderFont(font) {
        return (React.createElement(Text, { style: [styles.fontRow, { fontFamily: Fonts.type[font] }], key: font }, `${font}: ${Fonts.type[font]}`));
    }
    renderFonts() {
        return types.map((font) => this.renderFont(font));
    }
    renderStyle(fontStyle) {
        return (React.createElement(Text, { style: [styles.fontRow, Object.assign({}, Fonts.style[fontStyle])], key: fontStyle }, `This is ${fontStyle} style`));
    }
    renderStyles() {
        return fontStyles.map((fontStyle) => this.renderStyle(fontStyle));
    }
    render() {
        return (React.createElement(View, { style: styles.mainContainer }, React.createElement(Image, { source: Images.background, style: styles.backgroundImage, resizeMode: 'stretch' }), React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.goBack(), style: {
                position: 'absolute',
                paddingTop: 30,
                paddingHorizontal: 5,
                zIndex: 10
            } }, React.createElement(Image, { source: Images.backButton })), React.createElement(ScrollView, { style: styles.container }, React.createElement(View, { style: { alignItems: 'center', paddingTop: 60 } }, React.createElement(Image, { source: Images.theme, style: styles.logo }), React.createElement(Text, { style: styles.titleText }, "Themes")), React.createElement(View, { style: styles.section, key: 'colors-header' }, React.createElement(Text, { style: styles.sectionText, key: 'colors' }, "List of Theme specific settings.  Auto-generated from Themes folder.")), React.createElement(View, { style: styles.sectionHeaderContainer }, React.createElement(Text, { style: styles.sectionHeader }, "Colors")), React.createElement(View, { style: styles.colorsContainer }, this.renderColors()), React.createElement(View, { style: styles.sectionHeaderContainer }, React.createElement(Text, { style: styles.sectionHeader }, "Fonts")), this.renderFonts(), React.createElement(View, { style: styles.sectionHeaderContainer }, React.createElement(Text, { style: styles.sectionHeader }, "Styles")), this.renderStyles())));
    }
}
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map 
//# sourceMappingURL=ThemeScreen.js.map