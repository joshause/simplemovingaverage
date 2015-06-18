# simplemovingaverage.js

Simple moving average time series smoothing in JavaScript.

[![Build Status](https://travis-ci.org/joshause/simplemovingaverage.svg?branch=master)](https://travis-ci.org/joshause/simplemovingaverage)

## Usage

### Node.js

```js
var SimpleMovingAverage = require("./js/simplemovingaverage");
var sma = new SimpleMovingAverage();
var setTimeSeries = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6];
var intWindowSize = 2;
sma.get(setTimeSeries, intWindowSize);
// => [1.5,3.5,5.5,7.5,9.5,1.5,3.5,5.5]
```

### Browser

(Add necessary `<script>` tag reference to `simplemovingaverage.js`)

```js
// SimpleMovingAverage is autoloaded to window.SimpleMovingAverage
var sma = new SimpleMovingAverage();
var setTimeSeries = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6];
var intWindowSize = 2;
sma.get(setTimeSeries, intWindowSize);
// => [1.5,3.5,5.5,7.5,9.5,1.5,3.5,5.5]
```

## Tests

Gulp + Karma + PhantomJS + Jasmine

```bash
$ gulp
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
