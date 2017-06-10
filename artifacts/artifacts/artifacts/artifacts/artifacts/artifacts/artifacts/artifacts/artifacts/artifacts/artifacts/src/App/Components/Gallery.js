import React from 'react';
import { TouchableOpacity, Image, View, Text, LayoutAnimation } from 'react-native';
import { Images } from '../Themes';
import styles from './Styles/GalleryStyle';
export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.setActiveTab = (tab) => {
            LayoutAnimation.configureNext(Object.assign({}, LayoutAnimation.Presets.linear, { duration: 250 }));
            this.setState({ activeTab: tab });
        };
        this.renderTab = (tab) => {
            const { activeTab } = this.state;
            const isActive = activeTab === tab;
            return (React.createElement(TouchableOpacity, { key: tab, style: [styles.tab, isActive && styles.activeTab], onPress: () => this.setActiveTab(tab) }, React.createElement(Text, { style: [styles.tabText, isActive && styles.activeTabText] }, tab)));
        };
        this.renderItem = (itemData) => {
            const { onItemPress } = this.props;
            const { name, image, address } = itemData;
            const daddr = address.replace(/\s/, '+');
            return (React.createElement(TouchableOpacity, { key: name, style: styles.item, onPress: () => onItemPress(daddr) }, React.createElement(Image, { source: Images[image] }), React.createElement(View, { style: styles.itemDetail }, React.createElement(Text, { style: styles.itemTitle }, name), React.createElement(Text, { style: styles.itemAction }, "Directions\u00A0", React.createElement(Image, { source: Images.purpleArrowIcon })))));
        };
        this.state = {
            activeTab: Object.keys(props.data)[0]
        };
    }
    render() {
        const { activeTab } = this.state;
        const { data } = this.props;
        return (React.createElement(View, { style: styles.container }, React.createElement(View, { style: styles.tabs }, Object.keys(data).map((t) => this.renderTab(t))), React.createElement(View, { style: styles.gallery }, data[activeTab].map(this.renderItem))));
    }
}
Gallery.propTypes = {
    data: React.PropTypes.object.isRequired,
    onItemPress: React.PropTypes.func.isRequired
};
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map 
//# sourceMappingURL=Gallery.js.map