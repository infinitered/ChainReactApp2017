import codePush from 'react-native-code-push'
import Secrets from 'react-native-config'
import { Platform } from 'react-native'
import DebugConfig from './DebugConfig'

let deploymentKey
if (Platform.OS === 'ios') {
  deploymentKey = DebugConfig.codepushStaging ? Secrets.CODE_PUSH_IOS_STAGING : Secrets.CODE_PUSH_IOS_PRODUCTION
} else {
  deploymentKey = DebugConfig.codepushStaging ? Secrets.CODE_PUSH_ANDROID_STAGING : Secrets.CODE_PUSH_ANDROID_PRODUCTION
}

(console as any).tron.log(`deploymentKey = ${deploymentKey}`)

codePush.sync({ deploymentKey })
