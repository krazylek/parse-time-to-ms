# parse-time-to-ms

Ultralight module to parse ISO 8601 time string into milliseconds.


Valid strings are those defined in ISO 8601:

```
hh:mm:ss.sss or hhmmss.sss
hh:mm:ss     or hhmmss
hh:mm        or hhmm
hh
```

Please note that this module do not validate format. For example time string have to start with hours (eg. '35:10' would be interpreted as 35 hours 10 minutes). 

Some examples of valid formats: `'02:35'`, `'02:35:55'` or `'023555.010'`.

Invalid format: '2:35' (need a trailing 0)


# example

```js
var parseTime = require('parse-time-to-ms')
var parseTimes = require('parse-time-to-ms/sequence')

console.log(parseTime('08:00'))

// => 28800000

var timeRange = parseTimes('18:00', '23:30')

console.log(timeRange)

// => [ 64800000, 84600000 ]
```

Usage with `Date`:

```js
var parseTime = require('parse-time-to-ms')

var date = new Date(2017, 0, 1)
var time = parseTime('15:00')
var datetime = new Date(+date + time)

console.log(datetime.toString())

// => Sun Jan 01 2017 15:00:00 GMT+1100 (DST)
```


# api

```js
var parseTime = require ('parse-time-to-ms')
```

## `parseTime(timeString)` -> Integer

Parse a valid time string and returns the corresponding milliseconds.

* `timeString` {String|Number} - a time string starting with hours: `'02:35'` or `'2:35:55.010'`. 
  An invalid time will not throw, but could result in unexpected result. Types other than string will be parsed to integer.

## `parseTime.s(timeString1, [timeString2, ...])` -> Array<Integer>

Utility to easily convert a sequence of times

* `timeString1`, `timeString2`, `...` {String|Number} - valid time strings.


# compatibility

`parse-time-to-ms/sequence` use ES6 Rest Parameters.


# license

MIT


# install

```
npm install parse-time-to-ms
```


# see also

- https://github.com/krazylek/full-day-range Easily combine with this lib to create day ranges.
- https://github.com/unshiftio/millisecond or https://github.com/zeit/ms Similar purpose, but from natural language.
