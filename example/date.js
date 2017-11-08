var parseTime = require('../')

var date = new Date(2017, 0, 1)

console.log(date.toString(), 'initial date')

var time = parseTime('15:00')
var datetime = new Date(+date + time)

console.log(datetime.toString(), 'added "15:00" to Date object')
