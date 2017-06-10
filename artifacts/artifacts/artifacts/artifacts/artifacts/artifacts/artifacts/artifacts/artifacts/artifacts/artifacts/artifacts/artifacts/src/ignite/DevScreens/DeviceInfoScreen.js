// An All Components Screen is a great way to dev and quick-test components
import React from 'react';
import { View, ScrollView, Text, Image, NetInfo, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Metrics, Images } from './DevTheme';
import styles from './Styles/DeviceInfoScreenStyles';
const HARDWARE_DATA = [
    { title: 'Device Manufacturer', info: DeviceInfo.getManufacturer() },
    { title: 'Device Name', info: DeviceInfo.getDeviceName() },
    { title: 'Device Model', info: DeviceInfo.getModel() },
    { title: 'Device Unique ID', info: DeviceInfo.getUniqueID() },
    { title: 'Device Locale', info: DeviceInfo.getDeviceLocale() },
    { title: 'Device Country', info: DeviceInfo.getDeviceCountry() },
    { title: 'User Agent', info: DeviceInfo.getUserAgent() },
    { title: 'Screen Width', info: Metrics.screenWidth },
    { title: 'Screen Height', info: Metrics.screenHeight }
];
const OS_DATA = [
    { title: 'Device System Name', info: DeviceInfo.getSystemName() },
    { title: 'Device ID', info: DeviceInfo.getDeviceId() },
    { title: 'Device Version', info: DeviceInfo.getSystemVersion() }
];
const APP_DATA = [
    { title: 'Bundle Id', info: DeviceInfo.getBundleId() },
    { title: 'Build Number', info: DeviceInfo.getBuildNumber() },
    { title: 'App Version', info: DeviceInfo.getVersion() },
    { title: 'App Version (Readable)', info: DeviceInfo.getReadableVersion() }
];
export default class DeviceInfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.setConnected = (isConnected) => {
            this.setState({ isConnected });
        };
        this.setConnectionInfo = (connectionInfo) => {
            this.setState({ connectionInfo });
        };
        this.updateConnectionInfoHistory = (connectionInfo) => {
            const connectionInfoHistory = this.state.connectionInfoHistory.slice();
            connectionInfoHistory.push(connectionInfo);
            this.setState({ connectionInfoHistory });
        };
        this.state = {
            isConnected: false,
            connectionInfo: null,
            connectionInfoHistory: []
        };
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener('change', this.setConnected);
        NetInfo.isConnected.fetch().done(this.setConnected);
        NetInfo.addEventListener('change', this.setConnectionInfo);
        NetInfo.fetch().done(this.setConnectionInfo);
        NetInfo.addEventListener('change', this.updateConnectionInfoHistory);
        // an example of how to display a custom Reactotron message
        // console.tron.display({
        //   name: 'SPECS',
        //   value: {
        //     hardware: fromPairs(map((o) => [o.title, o.info], HARDWARE_DATA)),
        //     os: fromPairs(map((o) => [o.title, o.info], OS_DATA)),
        //     app: fromPairs(map((o) => [o.title, o.info], APP_DATA))
        //   },
        //   preview: 'About this device...'
        // })
    }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('change', this.setConnected);
        NetInfo.removeEventListener('change', this.setConnectionInfo);
        NetInfo.removeEventListener('change', this.updateConnectionInfoHistory);
    }
    netInfo() {
        return ([
            { title: 'Connection', info: (this.state.isConnected ? 'Online' : 'Offline') },
            { title: 'Connection Info', info: this.state.connectionInfo },
            { title: 'Connection Info History', info: JSON.stringify(this.state.connectionInfoHistory) }
        ]);
    }
    renderCard(cardTitle, rowData) {
        return (React.createElement(View, null, React.createElement(View, { style: styles.sectionHeaderContainer }, React.createElement(Text, { style: styles.sectionHeader }, cardTitle.toUpperCase())), this.renderRows(rowData)));
    }
    renderRows(rowData) {
        return rowData.map((cell) => {
            const { title, info } = cell;
            return (React.createElement(View, { key: title, style: styles.rowContainer }, React.createElement(View, { style: styles.rowLabelContainer }, React.createElement(Text, { style: styles.rowLabel }, title)), React.createElement(View, { style: styles.rowInfoContainer }, React.createElement(Text, { style: styles.rowInfo }, info))));
        });
    }
    render() {
        return (React.createElement(View, { style: styles.mainContainer }, React.createElement(Image, { source: Images.background, style: styles.backgroundImage, resizeMode: 'stretch' }), React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.goBack(), style: {
                position: 'absolute',
                paddingTop: 30,
                paddingHorizontal: 5,
                zIndex: 10
            } }, React.createElement(Image, { source: Images.backButton })), React.createElement(ScrollView, { style: styles.container }, React.createElement(View, { style: { alignItems: 'center', paddingTop: 60 } }, React.createElement(Image, { source: Images.deviceInfo, style: styles.logo }), React.createElement(Text, { style: styles.titleText }, "Device Info")), React.createElement(View, { style: styles.section }, React.createElement(Text, { style: styles.sectionText }, "Dedicated to identifying specifics of the device.  All info useful for identifying outlying behaviour specific to a device.")), React.createElement(View, { style: { padding: 10 } }, this.renderCard('Device Hardware', HARDWARE_DATA), this.renderCard('Device OS', OS_DATA), this.renderCard('App Info', APP_DATA), this.renderCard('Net Info', this.netInfo())))));
    }
}
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map 
//# sourceMappingURL=DeviceInfoScreen.js.map