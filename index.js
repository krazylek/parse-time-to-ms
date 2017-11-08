module.exports = parseTime

var multiplier = [60, 60, 1000] // hh, mm, ss

function parseTime (time) {
  if (typeof time !== 'string') {
    return parseInt(time)
  }

  var values = time.match(/\d{2}(\.\d+)?/g)
  return parseInt(multiplier.reduce(function (total, coef, i) {
    return (total + parseFloat(values[i] || 0)) * coef
  }, 0))
}
