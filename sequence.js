var parseTime = require('./')

module.exports = parseSequence

function parseSequence (...times) {
  if (Array.isArray(times[0])) {
    times = [].concat(...times)
  }
  return times.map(parseTime)
}
