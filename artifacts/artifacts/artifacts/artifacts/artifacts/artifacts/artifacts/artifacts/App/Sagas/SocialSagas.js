var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Linking } from 'react-native';
import { call } from 'redux-saga/effects';
/**
 * Attempts to open a url via Linking. Safely.
 */
export function open(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const ok = yield Linking.canOpenURL(url);
        if (!ok)
            return false;
        const opened = yield Linking.openURL(url);
        return opened;
    });
}
/**
 * Opens a browser to a github link. Falls back to InfiniteRed/ChainReactApp.
 *
 * @param {string} action.account The user or account/repo of the user.
 */
export function* visitGithub(action) {
    const { account = 'infinitered/chainreactapp' } = action;
    const url = `https://github.com/${account}`;
    yield call(open, url);
}
/**
 * Opens a browser to a twitter account.  Falls back to ChainReactConf.
 *
 * @param {string} action.account The twitter account.
 */
export function* visitTwitter(action) {
    const { account = 'chainreactconf' } = action;
    const nativeUrl = `twitter://user?screen_name=${account}`;
    const webUrl = `https://twitter.com/${account}`;
    const opened = yield call(open, nativeUrl);
    if (!opened)
        yield call(open, webUrl);
}
//# sourceMappingURL=SocialSagas.js.map 
//# sourceMappingURL=SocialSagas.js.map 
//# sourceMappingURL=SocialSagas.js.map 
//# sourceMappingURL=SocialSagas.js.map 
//# sourceMappingURL=SocialSagas.js.map 
//# sourceMappingURL=SocialSagas.js.map 
//# sourceMappingURL=SocialSagas.js.map 
//# sourceMappingURL=SocialSagas.js.map