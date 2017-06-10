import React, { Component, PropTypes } from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import StatusBarAlert from 'react-native-statusbar-alert';
import styles from './Styles/ModalStyle';
import { BlurView } from 'react-native-blur';
const NotificationScreen = ({ notifications, onDismissModal }) => {
    const notificationItems = notifications.map((message) => (React.createElement(Text, { style: styles.description, key: message }, message)));
    return (React.createElement(View, { style: { flex: 1 } }, React.createElement(BlurView, { style: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }, blurType: 'dark', blurAmount: 15 }), React.createElement(View, { style: styles.colorBump }, React.createElement(View, { style: styles.section }, React.createElement(Text, { style: styles.heading }, "Sessions Starting!"), notificationItems), React.createElement(TouchableOpacity, { onPress: onDismissModal, style: styles.button }, React.createElement(Text, { style: styles.text }, "Close Message")))));
};
class NotificationsBar extends Component {
    constructor(props) {
        super(props);
        this.onPressStatusBarAlert = () => {
            this.setState({ showModal: true });
        };
        this.onDismissModal = () => {
            this.setState({ showModal: false });
            this.props.clearNotifications();
        };
        this.state = { showModal: false };
    }
    render() {
        const { notifications } = this.props;
        if (notifications.length === 0) {
            return null;
        }
        return (React.createElement(View, null, React.createElement(StatusBarAlert, { visible: true, message: 'Talk coming up! (tap for details)', backgroundColor: '#a843af', color: 'white', pulse: 'background', onPress: this.onPressStatusBarAlert }), React.createElement(Modal, { transparent: true, animationType: 'slide', visible: this.state.showModal, onRequestClose: this.onDismissModal }, React.createElement(NotificationScreen, { onDismissModal: this.onDismissModal, notifications: notifications }))));
    }
}
NotificationsBar.propTypes = {
    notifications: PropTypes.array.isRequired,
    clearNotifications: PropTypes.func.isRequired
};
export default NotificationsBar;
//# sourceMappingURL=NotificationsBar.js.map 
//# sourceMappingURL=NotificationsBar.js.map 
//# sourceMappingURL=NotificationsBar.js.map 
//# sourceMappingURL=NotificationsBar.js.map 
//# sourceMappingURL=NotificationsBar.js.map 
//# sourceMappingURL=NotificationsBar.js.map 
//# sourceMappingURL=NotificationsBar.js.map