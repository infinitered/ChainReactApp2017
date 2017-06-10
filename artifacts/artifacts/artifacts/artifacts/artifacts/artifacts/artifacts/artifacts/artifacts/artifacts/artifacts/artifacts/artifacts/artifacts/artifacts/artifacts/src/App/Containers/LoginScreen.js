import React, { PropTypes } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import Styles from './Styles/LoginScreenStyles';
import { Images, Metrics } from '../Themes';
import LoginActions from '../Redux/LoginRedux';
class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.isAttempting = false;
        this.keyboardDidShowListener = {};
        this.keyboardDidHideListener = {};
        this.keyboardDidShow = (e) => {
            // Animation types easeInEaseOut/linear/spring
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            let newSize = Metrics.screenHeight - e.endCoordinates.height;
            this.setState({
                visibleHeight: newSize,
                topLogo: { width: 100, height: 70 }
            });
        };
        this.keyboardDidHide = (e) => {
            // Animation types easeInEaseOut/linear/spring
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                visibleHeight: Metrics.screenHeight,
                topLogo: { width: Metrics.screenWidth }
            });
        };
        this.handlePressLogin = () => {
            const { username, password } = this.state;
            this.isAttempting = true;
            // attempt a login - a saga is listening to pick it up from here.
            this.props.attemptLogin(username, password);
        };
        this.handleChangeUsername = (text) => {
            this.setState({ username: text });
        };
        this.handleChangePassword = (text) => {
            this.setState({ password: text });
        };
        this.state = {
            username: 'reactnative@infinite.red',
            password: 'password',
            visibleHeight: Metrics.screenHeight,
            topLogo: { width: Metrics.screenWidth }
        };
        this.isAttempting = false;
    }
    componentWillReceiveProps(newProps) {
        this.forceUpdate();
        // Did the login attempt complete?
        if (this.isAttempting && !newProps.fetching) {
            this.props.navigation.goBack();
        }
    }
    componentWillMount() {
        // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
        // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    render() {
        const { username, password } = this.state;
        const { fetching } = this.props;
        const editable = !fetching;
        const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly;
        return (React.createElement(ScrollView, { contentContainerStyle: { justifyContent: 'center' }, style: [Styles.container, { height: this.state.visibleHeight }], keyboardShouldPersistTaps: 'always' }, React.createElement(Image, { source: Images.logo, style: [Styles.topLogo, this.state.topLogo] }), React.createElement(View, { style: Styles.form }, React.createElement(View, { style: Styles.row }, React.createElement(Text, { style: Styles.rowLabel }, "Username"), React.createElement(TextInput, { ref: 'username', style: textInputStyle, value: username, editable: editable, keyboardType: 'default', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: false, onChangeText: this.handleChangeUsername, underlineColorAndroid: 'transparent', onSubmitEditing: () => this.refs.password.focus(), placeholder: 'Username' })), React.createElement(View, { style: Styles.row }, React.createElement(Text, { style: Styles.rowLabel }, "Password"), React.createElement(TextInput, { ref: 'password', style: textInputStyle, value: password, editable: editable, keyboardType: 'default', returnKeyType: 'go', autoCapitalize: 'none', autoCorrect: false, secureTextEntry: true, onChangeText: this.handleChangePassword, underlineColorAndroid: 'transparent', onSubmitEditing: this.handlePressLogin, placeholder: 'Password' })), React.createElement(View, { style: [Styles.loginRow] }, React.createElement(TouchableOpacity, { style: Styles.loginButtonWrapper, onPress: this.handlePressLogin }, React.createElement(View, { style: Styles.loginButton }, React.createElement(Text, { style: Styles.loginText }, "Sign In"))), React.createElement(TouchableOpacity, { style: Styles.loginButtonWrapper, onPress: () => this.props.navigation.goBack() }, React.createElement(View, { style: Styles.loginButton }, React.createElement(Text, { style: Styles.loginText }, "Cancel")))))));
    }
}
LoginScreen.propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
};
const mapStateToProps = (state) => {
    return {
        fetching: state.login.fetching
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map 
//# sourceMappingURL=LoginScreen.js.map