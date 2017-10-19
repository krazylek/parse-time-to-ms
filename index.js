module.exports = parseTime
module.exports.s = seq

var multiplier = [60, 60, 1000, 1] // hh, mm, ss, ms

function seq (...times) {
  return times.map(parseTime)
}

function parseTime (time) {
  if (typeof time !== 'string') {
    return parseInt(time)
  }

  var values = time.match(/\d+/g)
  return multiplier.reduce(function (total, coef, i) {
    return (total + parseInt(values[i] || 0)) * coef
  }, 0)
}
