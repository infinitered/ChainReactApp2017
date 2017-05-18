export default {
  // Functions return fixtures
  getSpeakers: () => {
    return {
      ok: true,
      data: require('../Fixtures/schedule.json')
    }
  }
}
