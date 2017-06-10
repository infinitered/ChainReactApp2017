import { Platform } from 'react-native'
import R from 'ramda'

export const removeEmpty = (markers) => {
  let filteredMarkers = R.filter((item) => {
    return (item.latitude !== null) && (item.longitude !== null)
  }, markers)
  return filteredMarkers
}

export const calculateRegion = (locations, options) => {
  const latPadding = options && options.latPadding ? options.latPadding : 0.1
  const longPadding = options && options.longPadding ? options.longPadding : 0.1
  const mapLocations = removeEmpty(locations)

  let allLatitudes = R.map((l) => {
    return l.latitude
  }, mapLocations)

  let allLongitudes = R.map((l) => {
    return l.longitude
  }, mapLocations)

  let minLat = R.reduce(R.min, Infinity, allLatitudes)
  let maxLat = R.reduce(R.max, -Infinity, allLatitudes)
  let minLong = R.reduce(R.min, Infinity, allLongitudes)
  let maxLong = R.reduce(R.max, -Infinity, allLongitudes)

  let middleLat = (minLat + maxLat) / 2
  let middleLong = (minLong + maxLong) / 2
  let latDelta = (maxLat - minLat) + latPadding
  let longDelta = (maxLong - minLong) + longPadding

  // return markers
  return {
    latitude: middleLat,
    longitude: middleLong,
    latitudeDelta: latDelta,
    longitudeDelta: longDelta
  }
}

// useful cleaning functions
const nullToEmpty = R.defaultTo('')
const replaceEscapedCRLF = R.replace(/\\n/g)
const nullifyNewlines = R.compose(replaceEscapedCRLF(' '), nullToEmpty)

// Correct Map URIs
export const locationURL = (address) => {
  let cleanAddress = nullifyNewlines(address)
  // https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
  let url = `http://maps.apple.com/?address=${cleanAddress}`
  // https://developers.google.com/maps/documentation/ios-sdk/urlscheme
  if (Platform.OS === 'android') url = `http://maps.google.com/?q=${cleanAddress}`

  return url
}
export const directionsURL = (address) => {
  let cleanAddress = nullifyNewlines(address)
  // https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
  let url = `http://maps.apple.com/?daddr=${cleanAddress}&dirflg=d`
  // https://developers.google.com/maps/documentation/ios-sdk/urlscheme
  if (Platform.OS === 'android') url = `http://maps.google.com/?daddr=${cleanAddress}`

  return url
}
