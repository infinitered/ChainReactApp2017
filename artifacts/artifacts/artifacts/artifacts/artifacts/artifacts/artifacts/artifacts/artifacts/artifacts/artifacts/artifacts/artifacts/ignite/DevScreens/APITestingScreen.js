import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Metrics, Images } from './DevTheme';
import FullButton from '../../App/Components/FullButton';
// For API
import API from '../../App/Services/Api';
import FJSON from 'format-json';
// Styles
import styles from './Styles/APITestingScreenStyles';
// API buttons here:
const endpoints = [
    { label: 'Get Speakers', endpoint: 'getSpeakers' }
];
export default class APITestingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.api = {};
        this.state = {
            visibleHeight: Metrics.screenHeight
        };
        this.api = API.create();
    }
    showResult(response, title = 'Response') {
        this.refs.container.scrollTo({ x: 0, y: 0, animated: true });
        if (response.ok) {
            this.refs.result.setState({ message: FJSON.plain(response.data), title: title });
        }
        else {
            this.refs.result.setState({ message: `${response.problem} - ${response.status}`, title: title });
        }
    }
    tryEndpoint(apiEndpoint) {
        const { label, endpoint, args = [''] } = apiEndpoint;
        this.api[endpoint].apply(this, args).then((result) => {
            this.showResult(result, label || `${endpoint}(${args.join(', ')})`);
        });
    }
    renderButton(apiEndpoint) {
        const { label, endpoint, args = [''] } = apiEndpoint;
        return (React.createElement(FullButton, { text: label || `${endpoint}(${args.join(', ')})`, onPress: this.tryEndpoint.bind(this, apiEndpoint), styles: { marginTop: 10 }, key: `${endpoint}-${args.join('-')}` }));
    }
    renderButtons() {
        return endpoints.map((endpoint) => this.renderButton(endpoint));
    }
    render() {
        return (React.createElement(View, { style: styles.mainContainer }, React.createElement(Image, { source: Images.background, style: styles.backgroundImage, resizeMode: 'stretch' }), React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.goBack(), style: {
                position: 'absolute',
                paddingTop: 30,
                paddingHorizontal: 5,
                zIndex: 10
            } }, React.createElement(Image, { source: Images.backButton })), React.createElement(ScrollView, { style: styles.container, ref: 'container' }, React.createElement(View, { style: { alignItems: 'center', paddingTop: 60 } }, React.createElement(Image, { source: Images.api, style: styles.logo }), React.createElement(Text, { style: styles.titleText }, "API")), React.createElement(View, { style: styles.section }, React.createElement(Text, { style: styles.sectionText }, "Testing API with Postman or APIary.io verifies the server works. The API Test screen is the next step; a simple in-app way to verify and debug your in-app API functions."), React.createElement(Text, { style: styles.sectionText }, "Create new endpoints in Services/Api.js then add example uses to endpoints array in Containers/APITestingScreen.js")), this.renderButtons(), React.createElement(APIResult, { ref: 'result' }))));
    }
}
class APIResult extends React.Component {
    constructor(props) {
        super(props);
        this.onApiPress = () => {
            this.setState({ message: false });
        };
        this.state = {
            message: false,
            title: false
        };
    }
    renderView() {
        return (React.createElement(ScrollView, { style: { top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }, overflow: 'hidden' }, React.createElement(TouchableOpacity, { style: { backgroundColor: 'white', padding: 20 }, onPress: this.onApiPress }, React.createElement(Text, null, this.state.title, " Response:"), React.createElement(Text, { allowFontScaling: false, style: { fontFamily: 'CourierNewPS-BoldMT', fontSize: 10 } }, this.state.message))));
    }
    render() {
        let messageView = null;
        if (this.state.message) {
            return this.renderView();
        }
        return messageView;
    }
}
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map 
//# sourceMappingURL=APITestingScreen.js.map