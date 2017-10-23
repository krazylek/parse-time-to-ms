module.exports = parseTime
module.exports.s = seq

var multiplier = [60, 60, 1000] // hh, mm, ss

function seq (...times) {
  return times.map(parseTime)
}

function parseTime (time) {
  if (typeof time !== 'string') {
    return parseInt(time)
  }

  var values = time.match(/\d{2}(\.\d+)?/g)
  return parseInt(multiplier.reduce(function (total, coef, i) {
    return (total + parseFloat(values[i] || 0)) * coef
  }, 0))
}
