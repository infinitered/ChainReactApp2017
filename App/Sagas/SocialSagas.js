import { Linking } from 'react-native'
import { call } from 'redux-saga/effects'

/**
 * Attempts to open a url via Linking. Safely.
 */
export async function open (url) {
  const ok = await Linking.canOpenURL(url)
  if (!ok) return false
  const opened = await Linking.openURL(url)
  return opened
}

/**
 * Opens a browser to a github link. Falls back to InfiniteRed/ChainReactApp.
 *
 * @param {string} action.account The user or account/repo of the user.
 */
export function * visitGithub (action) {
  const { account = 'infinitered/chainreactapp' } = action
  const url = `https://github.com/${account}`
  yield call(open, url)
}

/**
 * Opens a browser to a twitter account.  Falls back to ChainReactConf.
 *
 * @param {string} action.account The twitter account.
 */
export function * visitTwitter (action) {
  const { account = 'chainreactconf' } = action
  const nativeUrl = `twitter://user?screen_name=${account}`
  const webUrl = `https://twitter.com/${account}`

  const opened = yield call(open, nativeUrl)

  if (!opened) yield call(open, webUrl)
}
