import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes';
export default StyleSheet.create(Object.assign({}, ApplicationStyles.screen, { container: {
        flex: 1,
        backgroundColor: Colors.snow
    }, row: {
        flex: 1,
        backgroundColor: Colors.snow,
        marginVertical: Metrics.smallMargin
    }, boldLabel: {
        fontWeight: 'bold',
        color: Colors.text
    }, label: {
        color: Colors.text
    }, listContent: {
        paddingTop: Metrics.baseMargin,
        paddingBottom: Metrics.baseMargin * 8
    }, timeline: {
        width: 2,
        backgroundColor: '#6E3C7B',
        position: 'absolute',
        top: 85,
        bottom: 0,
        right: 11
    }, headerGradient: {
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 20,
        backgroundColor: 'black'
    }, dayToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: Metrics.doubleBaseMargin,
        height: 85,
        backgroundColor: Colors.clear
    }, inactiveDay: {
        backgroundColor: Colors.clear,
        fontFamily: 'Montserrat-Light',
        fontSize: 20,
        color: 'rgba(255,255,255,0.80)',
        letterSpacing: 0
    }, activeDay: {
        backgroundColor: Colors.clear,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: Colors.snow,
        letterSpacing: 0
    } }));
//# sourceMappingURL=TalksScreenStyle.js.map 
//# sourceMappingURL=TalksScreenStyle.js.map 
//# sourceMappingURL=TalksScreenStyle.js.map 
//# sourceMappingURL=TalksScreenStyle.js.map 
//# sourceMappingURL=TalksScreenStyle.js.map