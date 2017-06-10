// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExamplesRegistry from '../../../App/Services/ExamplesRegistry';
import * as Animatable from 'react-native-animatable';
// Example
ExamplesRegistry.addPluginExample('Animatable', () => React.createElement(View, null, React.createElement(Animatable.View, { animation: 'fadeIn', iterationCount: 'infinite', direction: 'alternate', style: [styles.button, styles.fadeInButton] }, React.createElement(Text, { style: styles.fadeInButtonText }, "Faaaaaddddeeeeddd")), React.createElement(Animatable.View, { style: [styles.button, styles.jelloButton], animation: 'jello', iterationCount: 'infinite' }, React.createElement(Text, { style: styles.jelloButtonText }, "Jelloo00000000")), React.createElement(Animatable.View, { animation: 'pulse', iterationCount: 'infinite', style: [styles.button, styles.pulseButton] }, React.createElement(Text, { style: styles.pulseButtonText }, "puLsepuLsepuLse"))));
const styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fadeInButton: {
        backgroundColor: '#ff3b3a'
    },
    fadeInButtonText: {
        color: 'white'
    },
    jelloButton: {
        backgroundColor: 'white'
    },
    pulseButton: {
        backgroundColor: '#ffc700'
    },
    pulseButtonText: {
        color: 'white'
    }
});
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map 
//# sourceMappingURL=animatableExample.js.map