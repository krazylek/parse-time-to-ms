# parse-time-to-ms

Ultralight module to parse a time string into milliseconds.


Provided with a valid time string, the parser will convert it to milliseconds.

Time string have to start with hours (eg. '35:10' would be interpreted as 35 hours 10 minutes). 
Some valid formats: `'02:35'`, `'02:35:55'` or `'2:35:55.010'`.


# example

```js
var parseTime = require('parse-time-to-ms')

parseTime('8:00')

// => 28800000

var timeRange = parseTime.s('18:00', '23:30')

console.log(timeRange)

// => [ 64800000, 84600000 ]
```

Usage with `Date`:

```js
var parseTime = require('parse-time-to-ms')

var day = new Date(2017, 0, 1)
console.log(day.toString())

// => Sun Jan 01 2017 00:00:00 GMT+1100 (DST)

var time = parseTime('15:00')
var datetime = new Date(+day + time)
console.log(datetime.toString())

// => Sun Jan 01 2017 15:00:00 GMT+1100 (DST)
```


# api

```js
var parseTime = require ('parse-time-to-ms')
```

## `parseTime(timeString)` -> Integer

Parse a valid time string and returns the corresponding milliseconds.

* `timeString` {String|Number} - a time string starting with hours up to milliseconds: `'02:35'` or `'2:35:55.010'`. An invalid date will not throw, and type other than string will be parsed to integer.

## `parseTime.s(timeString1, [timeString2, ...])` -> Array<Integer>

Utility to easily convert a sequence of times

* `timeString1`, `timeString2`, `...` {String|Number} - valid date strings.


# license

MIT


# install

```
npm install full-day-range
```
