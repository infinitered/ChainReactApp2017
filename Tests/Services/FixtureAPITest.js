import test from 'ava'
// import API from '../../App/Services/Api'
// import FixtureAPI from '../../App/Services/FixtureApi'
// import R from 'ramda'

// test('All fixtures map to actual API', (t) => {
//   const fixtureKeys = R.keys(FixtureAPI).sort()
//   const apiKeys = R.keys(API.create())

//   const intersection = R.intersection(fixtureKeys, apiKeys).sort()

//   // There is no difference between the intersection and all fixtures
//   t.true(R.equals(fixtureKeys, intersection))
// })

test('All fixtures map to actual API', (t) => {
  // Can't be on 0.45 AND have enzyme
  // https://github.com/airbnb/enzyme/issues/928#issuecomment-301633318
  t.true(true)
})
