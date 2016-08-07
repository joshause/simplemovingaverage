// simplemovingaverage.js v1.0.0

(function() {

  var SimpleMovingAverage = function() {};

  SimpleMovingAverage.prototype.get = function(x, y) {

    // input set of sequential data point integers
    var setTimeSeries = x;
    // input positive int for average sample size
    var intWindowSize = y;
    // the "smoothed" data set
    var resultSet = [];
    // memoization decorator for calls to average method
    var deco = this.memoize(this.average);

    if (setTimeSeries.length <= intWindowSize) {
      resultSet.push(this.average(setTimeSeries));
      return resultSet;
    } else {
      var i = 0;
      var j = intWindowSize;
      var subset = [];
      while ((i < setTimeSeries.length) && (j > 0)) {
        subset.push(setTimeSeries[i]);
        i++;
        j--;
        if (i == setTimeSeries.length) {
          resultSet.push(deco(subset));
          return resultSet;
        }
        if (j == 0) {
          resultSet.push(deco(subset));
          subset = [];
          j = intWindowSize;
        }
      }
    }

    return resultSet;

  };

  SimpleMovingAverage.prototype.average = function(s) {
    var total = 0;
    var i = 0;
    while (i < s.length) {
      total += s[i];
      i++;
    }
    return total/s.length;
  };

  SimpleMovingAverage.prototype.memoize = function(fn) {
    return function () {
      var hash = arguments[0];
      fn.m ? fn.m : fn.m = {};
      return (hash in fn.m) ? fn.m[hash] :
      fn.m[hash] = fn.apply(null, arguments);
    };
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = SimpleMovingAverage;
    } else {
      exports.SimpleMovingAverage = SimpleMovingAverage;
    }
  } else {
    window.SimpleMovingAverage = SimpleMovingAverage;
  }

}());
