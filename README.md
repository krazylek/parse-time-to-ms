# parse-time-to-ms

Ultralight module to parse a time string into milliseconds.


Provided with a valid time string , the parser will convert it to milliseconds.
Valid strings are those of ISO 8601 with separators:

```
hh:mm:ss.sss 
hh:mm:ss 	
hh:mm
```

Please note that the library do not validate format. It means `hhmmss` ISO will not be parsed properly, and time string have to start with hours (eg. '35:10' would be interpreted as 35 hours 10 minutes). 

Some examples of valid formats: `'02:35'`, `'02:35:55'` or `'2:35:55.010'`.


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

* `timeString` {String|Number} - a time string starting with hours up to milliseconds: `'02:35'` or `'2:35:55.010'`. 
  An invalid time will not throw, but could result in unexpected result. Types other than string will be parsed to integer.

## `parseTime.s(timeString1, [timeString2, ...])` -> Array<Integer>

Utility to easily convert a sequence of times

* `timeString1`, `timeString2`, `...` {String|Number} - valid time strings.


# compatibility

`parse-time-to-ms` use ES6 Rest Parameters.


# license

MIT


# install

```
npm install parse-time-to-ms
```


# see also

- https://github.com/krazylek/full-day-range Easily combine with this lib to create day ranges.
- https://github.com/unshiftio/millisecond Similar purpose, but from natural language.
