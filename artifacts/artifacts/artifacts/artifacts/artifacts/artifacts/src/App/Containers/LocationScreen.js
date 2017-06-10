import React from 'react';
import { ScrollView, TouchableOpacity, View, Image, Text, Linking, Animated, PanResponder, LayoutAnimation } from 'react-native';
import PurpleGradient from '../Components/PurpleGradient';
import VenueMap from '../Components/VenueMap';
import Gallery from '../Components/Gallery';
import { Images, Metrics } from '../Themes';
import { connect } from 'react-redux';
import Secrets from 'react-native-config';
import styles from './Styles/LocationScreenStyle';
const VENUE_LATITUDE = 45.524166;
const VENUE_LONGITUDE = -122.681645;
const { UBER_CLIENT_ID } = Secrets;
const MAP_TAP_THRESHOLD = 100;
class LocationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.cehckMapTap = (e) => {
            if (e.nativeEvent.timestamp - this.state.mapTouchStart < MAP_TAP_THRESHOLD) {
                LayoutAnimation.configureNext(Object.assign({}, LayoutAnimation.Presets.linear, { duration: 500 }));
                this.refs.scrolly.scrollTo({ y: Metrics.screenHeight / 4.25, animated: true });
                this.setState({ mapViewMode: true });
            }
            this.setState({ mapTouchStart: '' });
        };
        this.toggleRides = () => {
            const { showRideOptions, scrollY } = this.state;
            if (!showRideOptions && scrollY._value < 200) {
                this.refs.scrolly.scrollTo({ x: 0, y: 200, animated: true });
            }
            this.setState({ showRideOptions: !this.state.showRideOptions });
        };
        this.renderBackground = () => {
            const height = Metrics.locationBackgroundHeight;
            const { scrollY } = this.state;
            return (React.createElement(Animated.Image, { style: [styles.venue, { position: 'absolute' }, {
                        height: height,
                        transform: [{
                                translateY: scrollY.interpolate({
                                    inputRange: [-height, 0, height],
                                    outputRange: [height, 0, 0]
                                })
                            }, {
                                scale: scrollY.interpolate({
                                    inputRange: [-height, 0, height],
                                    outputRange: [0.9, 1, 1.5]
                                })
                            }]
                    }], source: Images.theArmory }));
        };
        this.renderHeader = () => {
            const height = 300;
            const { scrollY } = this.state;
            return (React.createElement(Animated.View, { style: {
                    position: 'relative',
                    height: height,
                    padding: 0,
                    opacity: scrollY.interpolate({
                        inputRange: [-height, 0, height * 0.4, height * 0.9],
                        outputRange: [1, 1, 1, 0]
                    }),
                    transform: [{
                            translateY: scrollY.interpolate({
                                inputRange: [-height, 0, height * 0.45, height],
                                outputRange: [0, 0, height * 0.45, height * 0.4]
                            })
                        }]
                } }, React.createElement(View, { style: styles.headingContainer }, React.createElement(Text, { style: styles.mainHeading }, "The Armory"), React.createElement(Text, { style: styles.address }, "128 NW Eleventh Ave", '\n', "Portland, OR 97209"))));
        };
        this.onCloseMap = () => {
            LayoutAnimation.configureNext(Object.assign({}, LayoutAnimation.Presets.linear, { duration: 400 }));
            this.setState({ mapViewMode: false });
        };
        this.state = {
            showRideOptions: false,
            scrollY: new Animated.Value(0),
            mapTouchStart: '',
            mapViewMode: false
        };
    }
    componentWillMount() {
        // Get the map tap check
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (e) => this.setState({ mapTouchStart: e.nativeEvent.timestamp }),
            onPanResponderRelease: this.cehckMapTap
        });
    }
    openMaps(daddr = '128+NW+Eleventh+Ave+Portland,+OR+97209') {
        const googleMaps = `comgooglemaps://?daddr=${daddr}`;
        const appleMaps = `http://maps.apple.com?daddr=${daddr}`;
        Linking.canOpenURL(googleMaps).then((supported) => {
            if (supported) {
                Linking.openURL(googleMaps);
            }
            else {
                Linking.canOpenURL(appleMaps).then((supported) => supported
                    ? Linking.openURL(appleMaps)
                    : window.alert('Unable to find maps application.'));
            }
        });
    }
    openLyft() {
        const lat = `destination[latitude]=${VENUE_LATITUDE}`;
        const lng = `destination[longitude]=${VENUE_LONGITUDE}`;
        const lyft = `lyft://ridetype?${lat}&${lng}`;
        Linking.canOpenURL(lyft).then((supported) => {
            if (supported) {
                Linking.openURL(lyft);
            }
            else {
                window.alert('Unable to open Lyft.');
            }
        });
    }
    openUber() {
        const pickup = 'action=setPickup&pickup=my_location';
        const client = `client_id=${UBER_CLIENT_ID}`;
        const lat = `dropoff[latitude]=${VENUE_LATITUDE}`;
        const lng = `dropoff[longitude]=${VENUE_LONGITUDE}`;
        const nick = `dropoff[nickname]=The%20Armory`;
        const daddr = `dropoff[formatted_address]=128%20NW%20Eleventh%20Ave%2C%20Portland%2C%20OR%2097209`;
        const uber = `uber://?${pickup}&${client}&${lat}&${lng}&${nick}&${daddr}`;
        Linking.canOpenURL(uber).then((supported) => {
            if (supported) {
                Linking.openURL(uber);
            }
            else {
                window.alert('Unable to open Uber.');
            }
        });
    }
    render() {
        const { showRideOptions, mapViewMode } = this.state;
        const { nearbyData } = this.props;
        const { event } = Animated;
        return (React.createElement(PurpleGradient, { style: [styles.linearGradient, { flex: 1 }] }, React.createElement(ScrollView, { ref: 'scrolly', onScroll: event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]), scrollEventThrottle: 10, scrollEnabled: !this.state.mapViewMode }, React.createElement(View, { style: styles.container }, this.renderBackground(), this.renderHeader(), React.createElement(View, Object.assign({ ref: 'mapContainer' }, this._panResponder.panHandlers), React.createElement(VenueMap, { mapViewMode: mapViewMode, onCloseMap: this.onCloseMap, scrollEnabled: mapViewMode, style: [styles.map, mapViewMode && { height: Metrics.screenHeight / 2 }] })), React.createElement(View, { style: styles.mapActions }, React.createElement(TouchableOpacity, { onPress: () => this.openMaps() }, React.createElement(View, { style: styles.getDirections }, React.createElement(View, { style: styles.addressContainer }, React.createElement(Text, { style: styles.venueName }, "The Armory"), React.createElement(Text, { style: styles.venueAddress }, "128 NW Eleventh Ave.", '\n', "Portland, OR 97209")), React.createElement(View, { style: styles.directionsIcon }, React.createElement(Image, { source: Images.directionsIcon }), React.createElement(Text, { style: styles.directionsLabel }, "Directions")))), React.createElement(TouchableOpacity, { onPress: () => this.toggleRides() }, React.createElement(View, { style: styles.getRide }, React.createElement(Text, { style: styles.getRideLabel }, "Taking an Uber or Lyft?"), React.createElement(Image, { style: [styles.getRideIcon, showRideOptions && styles.flip], source: Images.chevronIcon })))), React.createElement(View, { style: [styles.rideOptions, showRideOptions && { height: 170 }] }, React.createElement(TouchableOpacity, { onPress: () => this.openLyft() }, React.createElement(Image, { style: styles.rideButton, source: Images.lyftButton })), React.createElement(TouchableOpacity, { onPress: () => this.openUber() }, React.createElement(Image, { style: styles.rideButton, source: Images.uberButton }))), React.createElement(View, { style: styles.nearby }, React.createElement(Text, { style: styles.mainHeading }, "Nearby")), React.createElement(Gallery, { data: nearbyData, onItemPress: (daddr) => this.openMaps(daddr) })))));
    }
}
LocationScreen.navigationOptions = {
    tabBarLabel: 'Location',
    tabBarIcon: ({ focused }) => (React.createElement(Image, { source: focused ? Images.activeLocationIcon : Images.inactiveLocationIcon }))
};
const mapStateToProps = (state) => {
    return {
        nearbyData: state.location.nearby
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen);
//# sourceMappingURL=LocationScreen.js.map 
//# sourceMappingURL=LocationScreen.js.map 
//# sourceMappingURL=LocationScreen.js.map 
//# sourceMappingURL=LocationScreen.js.map 
//# sourceMappingURL=LocationScreen.js.map 
//# sourceMappingURL=LocationScreen.js.map