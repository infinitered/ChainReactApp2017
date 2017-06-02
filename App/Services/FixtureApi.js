export default {
  // Functions return fixtures
  getSpeakers: () => {
    return {
      ok: true,
      data: require('../Fixtures/schedule.json')
    }
  },
  getNearby: () => {
    return {
      ok: true,
      data: require('../Fixtures/nearby.json')
    }
  }
}
