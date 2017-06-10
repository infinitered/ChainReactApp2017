import React from 'react';
import { View, Modal } from 'react-native';
import DebugConfig from '../../App/Config/DebugConfig';
import RoundedButton from '../../App/Components/RoundedButton';
import PresentationScreen from './PresentationScreen';
export default class DevscreensButton extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = () => {
            this.setState({ showModal: !this.state.showModal });
        };
        this.state = {
            showModal: false
        };
    }
    render() {
        if (DebugConfig.showDevScreens) {
            return (React.createElement(View, null, React.createElement(RoundedButton, { onPress: this.toggleModal }, "Open DevScreens"), React.createElement(Modal, { visible: this.state.showModal, onRequestClose: this.toggleModal }, React.createElement(PresentationScreen, { screenProps: { toggle: this.toggleModal } }))));
        }
        else {
            return React.createElement(View, null);
        }
    }
}
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map 
//# sourceMappingURL=DevscreensButton.js.map