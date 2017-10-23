var parseTime = require('../')
var test = require('tape')

var baseTime = new Date(2017, 0, 1, 0, 0, 0, 0)

test('complete time', function (t) {
  var timeA = '23:30:10.001'
  var timeB = '233010.001'
  var parsedTimeA = parseTime(timeA)
  var parsedTimeB = parseTime(timeB)
  var expectedMs = new Date(2017, 0, 1, 23, 30, 10, 1) - baseTime

  t.equal(parsedTimeA, expectedMs)
  t.equal(parsedTimeB, expectedMs)
  t.end()
})

test('hh:mm format', function (t) {
  var time = '23:05'
  var parsedTime = parseTime(time)
  var expectedMs = new Date(2017, 0, 1, 23, 5, 0, 0) - baseTime

  t.equal(parsedTime, expectedMs)
  t.end()
})

test('h:mm format', function (t) {
  var time = '05:30'
  var parsedTime = parseTime(time)
  var expectedMs = new Date(2017, 0, 1, 5, 30, 0, 0) - baseTime

  t.equal(parsedTime, expectedMs)
  t.end()
})

test('whole day', function (t) {
  var time = '24:00'
  var parsedTime = parseTime(time)
  var expectedMs = new Date(2017, 0, 2, 0, 0, 0, 0) - baseTime

  t.equal(parsedTime, expectedMs)
  t.end()
})

test('sequence', function (t) {
  var sequenceA = parseTime.s('00:30', '02:25:30', '12:34:10.349')
  var sequenceB = parseTime.s('00:30', '02:25:30', '12:34:10.349')
  var expectedMs = [
    new Date(2017, 0, 1, 0, 30, 0, 0) - baseTime,
    new Date(2017, 0, 1, 2, 25, 30, 0) - baseTime,
    new Date(2017, 0, 1, 12, 34, 10, 349) - baseTime
  ]

  t.deepEqual(sequenceA, expectedMs)
  t.deepEqual(sequenceB, expectedMs)
  t.end()
})

test('passing a number will be returned as it', function (t) {
  var time = 30000
  var parsedTime = parseTime(time)
  var expectedMs = new Date(2017, 0, 1, 0, 0, 30, 0) - baseTime

  t.equal(parsedTime, time)
  t.equal(parsedTime, expectedMs)
  t.end()
})

test('invalid param will result in NaN value', function (t) {
  var time = { notok: true }
  var parsedTime = parseTime(time)

  t.true(isNaN(parsedTime))
  t.end()
})
