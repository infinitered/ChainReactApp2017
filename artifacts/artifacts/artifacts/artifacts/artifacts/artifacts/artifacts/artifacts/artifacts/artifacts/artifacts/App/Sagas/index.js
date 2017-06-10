import { takeLatest } from 'redux-saga/effects';
/* ------------- Types ------------- */
import { StartupTypes } from '../Redux/StartupRedux';
import { ScheduleTypes } from '../Redux/ScheduleRedux';
import { LocationTypes } from '../Redux/LocationRedux';
/* ------------- Sagas ------------- */
import { startup } from './StartupSagas';
import { trackCurrentTime } from './ScheduleSagas';
import { visitGithub, visitTwitter } from './SocialSagas';
import { getScheduleUpdates } from './ScheduleUpdateSagas';
import { getNearbyUpdates } from './LocationSagas';
/* ------------- API ------------- */
import API from '../Services/Api';
import DebugConfig from '../Config/DebugConfig';
import FixtureAPI from '../Services/FixtureApi';
// const api = API.create()
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();
/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield [
        // some sagas only receive an action
        takeLatest(StartupTypes.STARTUP, startup),
        takeLatest(ScheduleTypes.TRACK_CURRENT_TIME, trackCurrentTime),
        takeLatest(ScheduleTypes.GET_SCHEDULE_UPDATES, getScheduleUpdates, api),
        takeLatest(ScheduleTypes.VISIT_GITHUB, visitGithub),
        takeLatest(ScheduleTypes.VISIT_TWITTER, visitTwitter),
        takeLatest(LocationTypes.GET_NEARBY_UPDATES, getNearbyUpdates, api)
    ];
}
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map