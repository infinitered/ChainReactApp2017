import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from '../Navigation/AppNavigation';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import NotificationActions from '../Redux/NotificationRedux';
import ReduxPersist from '../Config/ReduxPersist';
import NotificationsBar from '../Components/NotificationsBar';
import styles from './Styles/RootContainerStyles';
class RootContainer extends Component {
    componentDidMount() {
        // if redux persist is not active fire startup action
        if (!ReduxPersist.active) {
            this.props.startup();
        }
    }
    render() {
        const { dispatch, nav, notifications, clearNotifications } = this.props;
        return (React.createElement(View, { style: styles.applicationView }, React.createElement(StatusBar, { barStyle: 'light-content' }), React.createElement(NotificationsBar, { notifications: notifications, clearNotifications: clearNotifications }), React.createElement(Navigation, { addNavigationHelpers: addNavigationHelpers({ dispatch, state: nav }) })));
    }
}
const mapStateToProps = (state) => ({
    notifications: state.notifications.notifications
});
// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    startup: () => dispatch(StartupActions.startup()),
    clearNotifications: () => dispatch(NotificationActions.clearNotifications())
});
export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
//# sourceMappingURL=RootContainer.js.map 
//# sourceMappingURL=RootContainer.js.map 
//# sourceMappingURL=RootContainer.js.map 
//# sourceMappingURL=RootContainer.js.map 
//# sourceMappingURL=RootContainer.js.map