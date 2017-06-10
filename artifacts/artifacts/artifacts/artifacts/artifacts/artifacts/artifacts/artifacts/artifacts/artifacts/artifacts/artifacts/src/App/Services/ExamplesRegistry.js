import React from 'react';
import { Text, View } from 'react-native';
import R from 'ramda';
import { ApplicationStyles } from '../Themes';
import DebugConfig from '../Config/DebugConfig';
let globalComponentExamplesRegistry = [];
let globalPluginExamplesRegistry = [];
export const addComponentExample = (title, usage = () => { }) => {
    if (DebugConfig.includeExamples)
        globalComponentExamplesRegistry.push({ title, usage });
}; // eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
export const addPluginExample = (title, usage = () => { }) => {
    if (DebugConfig.includeExamples)
        globalPluginExamplesRegistry.push({ title, usage });
}; // eslint-disable-line
const renderComponentExample = (example) => {
    return (React.createElement(View, { key: example.title }, React.createElement(View, { style: ApplicationStyles.darkLabelContainer }, React.createElement(Text, { style: ApplicationStyles.darkLabel }, example.title)), example.usage.call()));
};
const renderPluginExample = (example) => {
    return (React.createElement(View, { key: example.title }, React.createElement(View, { style: ApplicationStyles.darkLabelContainer }, React.createElement(Text, { style: ApplicationStyles.darkLabel }, example.title)), example.usage.call()));
};
export const renderComponentExamples = () => R.map(renderComponentExample, globalComponentExamplesRegistry);
export const renderPluginExamples = () => R.map(renderPluginExample, globalPluginExamplesRegistry);
// Default for readability
export default {
    renderComponentExamples,
    addComponentExample,
    renderPluginExamples,
    addPluginExample
};
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map 
//# sourceMappingURL=ExamplesRegistry.js.map