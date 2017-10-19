var parseTime = require('../')

var day = new Date(2017, 0, 1)

console.log(day.toString())

var time = parseTime('15:00')
var datetime = new Date(+day + time)

console.log(datetime.toString())
