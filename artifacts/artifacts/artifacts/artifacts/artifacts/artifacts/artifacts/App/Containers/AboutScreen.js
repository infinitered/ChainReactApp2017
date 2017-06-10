import React from 'react';
import { ScrollView, TouchableOpacity, Image, View, Text, Linking, LayoutAnimation } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RoundedButton from '../Components/RoundedButton';
import PurpleGradient from '../Components/PurpleGradient';
import { Images, Metrics } from '../Themes';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/AboutScreenStyle';
class AboutScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'liveHelp'
        };
    }
    tweetWithHashtag() {
        const appURL = 'twitter://post?hashtags=ChainReact2017';
        const webURL = 'https://twitter.com/intent/tweet?hashtags=ChainReact2017';
        Linking.canOpenURL(appURL).then((supported) => supported ? Linking.openURL(appURL) : Linking.openURL(webURL));
    }
    setActiveTab(tab) {
        LayoutAnimation.configureNext(Object.assign({}, LayoutAnimation.Presets.linear, { duration: 250 }));
        this.setState({ activeTab: tab });
    }
    renderSlack() {
        const gradient = ['#136EB5', 'rgba(1,192,182,0.88)'];
        return (React.createElement(LinearGradient, { colors: gradient, start: { x: 0, y: 1 }, end: { x: 1, y: 0 }, style: styles.slack }, React.createElement(Image, { style: styles.slackIcon, source: Images.slack }), React.createElement(Text, { style: styles.heading }, "Join Us On Slack"), React.createElement(RoundedButton, { text: 'Join the IR Slack Community', onPress: () => Linking.openURL('http://community.infinite.red'), style: styles.slackButton })));
    }
    renderWelcomeParty() {
        return (React.createElement(View, null, React.createElement(Image, { source: Images.squarespacePhoto, style: { width: Metrics.screenWidth } }, React.createElement(View, { style: styles.afterPartyContainer }, React.createElement(View, { style: styles.partyHeader }, React.createElement(Image, { source: Images.sqspLogo }), React.createElement(Text, { style: styles.welcomeParty }, "WELCOME PARTY"), React.createElement(Text, { style: styles.partyDescription }, "AT SQUARESPACE PDX")), React.createElement(View, { style: styles.partyInfo }, React.createElement(Text, { style: styles.partyDescription }, "SUNDAY, JULY 9 | 4-8PM"), React.createElement(Text, { style: styles.partyDescription }, "311 SW WASHINGTON STREET")))), React.createElement(RoundedButton, { onPress: () => Linking.openURL('https://chainreact.squarespace.com'), style: styles.partyButton }, React.createElement(Text, { style: styles.partyButtonText }, "I WANT TO GO"))));
    }
    renderHashtag() {
        return (React.createElement(View, { style: styles.twitter }, React.createElement(Image, { style: styles.blowhorn, source: Images.blowhorn }), React.createElement(TouchableOpacity, { onPress: () => this.tweetWithHashtag() }, React.createElement(Text, { style: styles.heading }, "#ChainReact2017")), React.createElement(Text, { style: styles.description }, "Make your friends jealous by tweeting, posting, or whatever it is you do with the hashtag\u00A0", React.createElement(Text, { style: styles.hashtag, onPress: () => this.tweetWithHashtag() }, "#chainreact2017"), ".")));
    }
    renderTabs() {
        const { activeTab } = this.state;
        const liveHelpStyles = [styles.tab, activeTab === 'liveHelp' && styles.activeTab];
        const sponsorStyles = [styles.tab, activeTab === 'sponsors' && styles.activeTab];
        const liveHelpTextStyles = [styles.tabText, activeTab === 'liveHelp' && styles.activeTabText];
        const sponsorTextStyles = [styles.tabText, activeTab === 'sponsors' && styles.activeTabText];
        return (React.createElement(View, { style: styles.tabsContainer }, React.createElement(View, { style: styles.tabs }, React.createElement(TouchableOpacity, { style: liveHelpStyles, onPress: () => { this.setActiveTab('liveHelp'); } }, React.createElement(Text, { style: liveHelpTextStyles }, "Live Help")), React.createElement(TouchableOpacity, { style: sponsorStyles, onPress: () => { this.setActiveTab('sponsors'); } }, React.createElement(Text, { style: sponsorTextStyles }, "Sponsors"))), this.renderTabsContent()));
    }
    renderTabsContent() {
        const { activeTab } = this.state;
        if (activeTab === 'liveHelp') {
            return (this.renderLiveHelp());
        }
        else {
            return (this.renderSponsors());
        }
    }
    renderLiveHelp() {
        return (React.createElement(View, { style: styles.liveHelp }, React.createElement(Text, { style: styles.liveHelpPhone }, " (360) 562-0450 "), React.createElement(Text, { style: styles.liveHelpText }, "Text or call us at anytime for directions, suspicious activity, violations of our Code of Conduct, or any other concern."), React.createElement(RoundedButton, { text: 'Send Text Message (SMS)', onPress: () => Linking.openURL('sms:3605620450'), style: styles.liveHelpButton }), React.createElement(RoundedButton, { text: 'Give Us A Call', onPress: () => Linking.openURL('tel:3605620450'), style: styles.liveHelpButton })));
    }
    renderSponsor(url, image, style) {
        return (React.createElement(TouchableOpacity, { style: styles.sponsor, onPress: () => Linking.openURL(url) }, React.createElement(Image, { style: style, source: image })));
    }
    renderSponsors() {
        return (React.createElement(View, { style: styles.sponsors }, React.createElement(Text, { style: styles.heading }, "Our Sponsors"), React.createElement(Text, { style: styles.description }, "We love the sponsors for this conference. They make all of this fun stuff possible, and we couldn\u2019t have done it without them."), React.createElement(Text, { style: styles.sponsorTierTitle }, "Platinum Sponsors"), React.createElement(View, { style: styles.sponsorTier }, this.renderSponsor('https://www.squarespace.com/', Images.squarespaceSponsor)), React.createElement(Text, { style: styles.sponsorTierTitle }, "Gold Sponsors"), React.createElement(View, { style: styles.sponsorTier }, this.renderSponsor('https://nativebase.io/', Images.nativeBaseSponsor), this.renderSponsor('https://formidable.com/', Images.formidableSponsor), this.renderSponsor('https://moduscreate.com/', Images.modusSponsor), this.renderSponsor('https://www.bugsnag.com//', Images.bugsnagSponsor)), React.createElement(Text, { style: styles.sponsorTierTitle }, "Silver Sponsors"), React.createElement(View, { style: styles.sponsorTier }, this.renderSponsor('https://aws.amazon.com/', Images.amazonSponsor, styles.lowTierSponsor), this.renderSponsor('http://reactnative.training/', Images.trainingSponsor, styles.lowTierSponsor), this.renderSponsor('https://gudog.co.uk/', Images.gudogSponsor, styles.lowTierSponsor), this.renderSponsor('https://rangle.io/', Images.rangleSponsor, styles.lowTierSponsor)), React.createElement(Text, { style: styles.sponsorTierTitle }, "Bronze Sponsors"), React.createElement(View, { style: styles.sponsorTier }, this.renderSponsor('https://echobind.com/', Images.echobindSponsor, styles.lowTierSponsor), this.renderSponsor('https://www.capitalone.com/', Images.capitalOneSponsor, styles.lowTierSponsor), this.renderSponsor('https://www.salesforce.com/', Images.salesforceSponsor, styles.lowTierSponsor), this.renderSponsor('https://www.paypal.com/us/home', Images.paypalSponsor, styles.lowTierSponsor), this.renderSponsor('https://www.instrument.com/', Images.instrumentSponsor, styles.lowTierSponsor), this.renderSponsor('http://www.qlik.com/us/', Images.qlikSponsor)), React.createElement(Text, { style: styles.sponsorTierTitle }, "Additional Sponsors"), React.createElement(View, { style: styles.sponsorTier }, this.renderSponsor('http://www.qlik.com/us/', Images.qlikCoffeeSponsor))));
    }
    render() {
        return (React.createElement(PurpleGradient, { style: [styles.linearGradient, { flex: 1 }] }, React.createElement(ScrollView, null, React.createElement(View, { style: styles.container }, this.renderSlack(), this.renderWelcomeParty(), this.renderHashtag(), this.renderTabs()))));
    }
}
AboutScreen.navigationOptions = {
    tabBarLabel: 'General Info',
    tabBarIcon: ({ focused }) => (React.createElement(Image, { source: focused ? Images.activeInfoIcon : Images.inactiveInfoIcon }))
};
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);
//# sourceMappingURL=AboutScreen.js.map 
//# sourceMappingURL=AboutScreen.js.map 
//# sourceMappingURL=AboutScreen.js.map 
//# sourceMappingURL=AboutScreen.js.map 
//# sourceMappingURL=AboutScreen.js.map 
//# sourceMappingURL=AboutScreen.js.map 
//# sourceMappingURL=AboutScreen.js.map