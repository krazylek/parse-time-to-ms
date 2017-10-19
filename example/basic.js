var parseTime = require('../')

console.log(parseTime('8:00'))

var timeRange = parseTime.s('18:00', '23:30')

console.log(timeRange)
