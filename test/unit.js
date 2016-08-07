(function() {

  "use strict";

  var SimpleMovingAverage = require("../simplemovingaverage.js");

  describe("simplemovingaverage.js", function() {

    it("is a thing", function() {
      expect(SimpleMovingAverage).toBeDefined();
    });

    describe(".get()", function() {

      it("returns simple moving average set for given time series array and " +
      "sample window size", function() {

        var sma = new SimpleMovingAverage();
        var inputA = [1,2,3,4,5,6,7,8,9,10];
        var inputB = 2;
        var output = [1.5,3.5,5.5,7.5,9.5];

        expect(
          sma.get(inputA, inputB)
        ).toEqual(
          output
        );

      });

    });

    describe(".average()", function() {

      it("returns average number for given array of integers", function() {

        var sma = new SimpleMovingAverage();
        var input = [1,2];
        var output = 1.5;

        expect(
          sma.average(input)
        ).toBe(
          output
        );

      });

    });

    describe('.memoize() no repeat input test', function() {

      var foo = {};

      beforeEach(function() {

        var sma = new SimpleMovingAverage();

        foo = {
          setBar: function(value) {
            bar = value;
          }
        };

        spyOn(foo, "setBar");

        var deco = sma.memoize(foo.setBar);

        deco([1,2]);
        deco([3,4]);

      });

      it("calls foo.setBar method twice given different args per", function() {
        expect(foo.setBar.calls.count()).toEqual(2);
      });

    });

    describe(".memoize() repeat input test", function() {

      var foo = {};

      beforeEach(function() {

        var sma = new SimpleMovingAverage();

        foo = {
          setBar: function(value) {
            bar = value;
          }
        };

        spyOn(foo, "setBar");

        var deco = sma.memoize(foo.setBar);

        deco([1,2]);
        deco([1,2]);

      });

      it("calls foo.setBar method once given same args per", function() {
        expect(foo.setBar.calls.count()).toEqual(1);
      });

    });

  });

}());
