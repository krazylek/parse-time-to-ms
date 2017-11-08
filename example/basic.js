var parseTime = require('../')
var parseTimes = require('../sequence')

console.log(parseTime('08:00'))

var timeRange = parseTimes('18:00', '23:30')

console.log(timeRange)
