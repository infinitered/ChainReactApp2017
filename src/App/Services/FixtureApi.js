export default {
  // Functions return fixtures
  getSpeakers: () => {
    return {
      ok: true,
      data: require('../../../src/App/Fixtures/schedule.json')
    }
  },
  getNearby: () => {
    return {
      ok: true,
      data: require('../../../src/App/Fixtures/nearby.json')
    }
  }
}
