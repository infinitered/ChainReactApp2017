import test from 'ava'
import { call, put } from 'redux-saga/effects'
import { getNearbyUpdates } from '../../App/Sagas/LocationSagas'
import LocationActions from '../../App/Redux/LocationRedux'

const stepper = (fn) => (mock) => fn.next(mock).value
const api = { getNearby: () => { } }

const nearby = {
  'food': [
    {
      'name': 'Deschutes Brewery',
      'image': 'deschutesBrewery',
      'address': '210 NW 11th Ave, Portland, OR 97209'
    }
  ],
  'coffee': [
    {
      'name': 'Deschutes Brewery',
      'image': 'deschutesBrewery',
      'address': '210 NW 11th Ave, Portland, OR 97209'
    }
  ],
  'sites': [
    {
      'name': 'Deschutes Brewery',
      'image': 'deschutesBrewery',
      'address': '210 NW 11th Ave, Portland, OR 97209'
    }
  ]
}

const mockResponse = {
  ok: true,
  data: nearby
}

test('makes an api call and saves the data', (t) => {
  const step = stepper(getNearbyUpdates(api))
  t.deepEqual(call(api.getNearby), step())
})

test('makes an api call and saves the data', (t) => {
  const step = stepper(getNearbyUpdates(api))

  step()

  const stepResponse = step(mockResponse)

  t.deepEqual(put(LocationActions.updateNearby(nearby)), stepResponse)
})
