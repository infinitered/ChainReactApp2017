import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform';
import { AsyncStorage } from 'react-native';
const REDUX_PERSIST = {
    active: true,
    reducerVersion: '1.4.1',
    storeConfig: {
        storage: AsyncStorage,
        blacklist: ['login', 'search'],
        // whitelist: [], Optionally, just specify the keys you DO want stored to
        // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
        transforms: [immutablePersistenceTransform]
    }
};
export default REDUX_PERSIST;
//# sourceMappingURL=ReduxPersist.js.map