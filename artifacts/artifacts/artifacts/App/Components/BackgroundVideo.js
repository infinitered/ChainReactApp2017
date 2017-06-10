import React from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
export default ({ source, isActive, style }) => {
    if (isActive) {
        return (React.createElement(Video, { source: source, paused: !isActive, resizeMode: 'cover', style: style, muted: true, repeat: true }));
    }
    else {
        return (React.createElement(View, null));
    }
};
//# sourceMappingURL=BackgroundVideo.js.map 
//# sourceMappingURL=BackgroundVideo.js.map 
//# sourceMappingURL=BackgroundVideo.js.map