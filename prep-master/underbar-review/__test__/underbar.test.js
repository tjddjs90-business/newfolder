const _ = require("../src/underbar");

describe("Underbar Review", function() {
  describe("identity", function() {
    test("should return whatever value is passed into it", function() {
      var uniqueObject = {};
      expect(_.identity(1)).toEqual(1);
      expect(_.identity("string")).toEqual("string");
      expect(_.identity(false)).toBeFalsy();
      expect(_.identity(uniqueObject)).toEqual(uniqueObject);
    });
  });

  describe("last", function() {
    it("should pull the last element from an array", function() {
      expect(_.last([1, 2, 3])).toEqual(3);
    });

    it("should accept an index argument", function() {
      expect(_.last([1, 2, 3], 2)).toEqual(`FILL_ME_IN`);
    });

    it("should return empty array if zero is passed in as the index", function() {
      expect(_.last([1, 2, 3], 0)).toEqual([]);
    });

    it("should return all the array's elements if the index argument is larger than the length of the array", function() {
      expect(_.last([1, 2, 3], 5)).toEqual(`FILL_ME_IN`);
    });
  });

  describe("reject", function() {
    it("should reject all even numbers", function() {
      var isEven = function(num) {
        return num % 2 === 0;
      };
      var odds = _.reject([1, 2, 3, 4, 5, 6], isEven);

      expect(odds).toEqual([1, 3, 5]);
    });

    it("should reject all odd numbers", function() {
      var isOdd = function(num) {
        return num % 2 !== 0;
      };
      var evens = _.reject([1, 2, 3, 4, 5, 6], isOdd);

      expect(evens).toEqual([2, 4, 6]);
    });

    it("should produce a brand new array instead of modifying the input array", function() {
      var isOdd = function(num) {
        return num % 2 !== 0;
      };
      var numbers = [1, 2, 3, 4, 5, 6];
      var evens = _.reject(numbers, isOdd);

      expect(evens).not.toEqual(numbers);
    });
  });

  describe("uniq", function() {
    it("should return all unique values contained in an unsorted array", function() {
      var numbers = [1, 2, 1, 3, 1, 4];

      expect(_.uniq(numbers)).toEqual([1, 2, 3, 4]);
    });

    it("should return all unique values contained in an sorted array", function() {
      var numbers = [1, 2, 2, 3, 4, 4];

      expect(_.uniq(`FILL_ME_IN`)).toEqual([1, 2, 3, 4]);
    });

    it("should produce a brand new array instead of modifying the input array", function() {
      var numbers = [1, 2, 1, 3, 1, 4];
      var uniqueNumbers = _.uniq(numbers);

      expect(uniqueNumbers).not.toEqual(numbers);
    });
  });

  describe("map", function() {
    it("should apply a function to every value in an array", function() {
      var multiplyByTwo = `FILL_ME_IN`;

      expect(_.map([1, 2, 3], multiplyByTwo)).toEqual([2, 4, 6]);
    });

    it("should produce a brand new array instead of modifying the input array", function() {
      var numbers = [1, 2, 3];
      var mappedNumbers = _.map(numbers, function(num) {
        return num;
      });

      expect(mappedNumbers).not.toEqual(numbers);
    });
  });

  describe("pluck", function() {
    it("should return values contained at a user-defined property", function() {
      var people = [{ name: "moe", age: 30 }, { name: "curly", age: 50 }];

      expect(_.pluck(people, "name")).to.FILL_ME_IN(["moe", "curly"]);
    });

    it("should not modify the original array", function() {
      var people = [{ name: "moe", age: 30 }, { name: "curly", age: 50 }];

      _.pluck(people, "name");

      expect(people).to.FILL_ME_IN([
        { name: "moe", age: 30 },
        { name: "curly", age: 50 }
      ]);
    });
  });

  describe("reduce", function() {
    it("should return a value", function() {
      var result = _.reduce([3, 2, 1], function(memo, item) {
        return item;
      });
      expect(result).toBeDefined;
    });

    it("should invoke the iterator function with arguments (memo, item) in that order", function() {
      var memoInCallback, itemInCallback;

      _.reduce(
        ["item"],
        (memo, item) => {
          memoInCallback = memo;
          itemInCallback = item;
        },
        "memo"
      );

      expect(memoInCallback).toEqual("memo");
      expect(itemInCallback).toEqual("item");
    });

    it("should continue to call iterator even if the iterator returns undefined", function() {
      var callCount = 0;
      var returnFalsy = function(total, item) {
        callCount++;
        if (callCount === 1) {
          return undefined;
        } else {
          return item + 1;
        }
      };

      var total = _.reduce([1, 1, 2], returnFalsy);
      expect(total).toEqual(3);
    });

    it("should pass every item of the array into the iterator if a memo is passed in", function() {
      var result = _.reduce(
        [1, 2, 3],
        function(memo, item) {
          return memo - item;
        },
        10
      );

      expect(result).toEqual(4);
    });

    it("should accept falsy values as a valid memo", function() {
      var result = _.reduce(
        [1, 2, 3],
        function(memo, item) {
          return memo * item;
        },
        0
      );

      expect(result).toEqual(0);
    });

    it("should set memo to be the first item of the array if no memo is passed in", function() {
      var result = _.reduce([1, 2, 3], function(memo) {
        return memo;
      });

      expect(result).toEqual(1);
    });

    it("should pass the second item of the array into the iterator first if a memo is not passed in", function() {
      var result = _.reduce([3, 2, 1], function(memo, item) {
        return memo - item;
      });

      expect(result).toEqual(0);
    });
  });

  describe("contains", function() {
    it("should return true given an array and a value from that array", function() {
      var array = [1, 2, 3];
      var value = 1;
      expect(_.contains(array, value)).toBeTruthy();
    });

    it("should return false given an array and a value not in that array", function() {
      // Replace this line with an `expect` statement that tests
      // the behavior described by the `it` string
      throw new Error("This test is missing.");
    });

    it("should return true given a object and a value from that object", function() {
      var object = { a: 1, b: 2, c: 3 };
      var value = 1;
      expect(_.contains(object, value)).toBeTruthy();
    });

    it("should return false given an object and a value not in that object", function() {
      var object = { a: 1, b: 2, c: 3 };
      var value = 4;
      expect(_.contains(object, value)).toBeFalsy();
    });
  });

  describe("every", function() {
    var isEven = function(num) {
      return num % 2 === 0;
    };

    it("passes by default for an empty collection", function() {
      expect(_.every([], _.identity)).toBeTruthy();
    });

    it("passes for a collection of all-truthy values", function() {
      expect(_.every([true, {}, 1], _.identity)).toBeTruthy();
    });

    it("fails for a collection of all-falsy values", function() {
      // Replace this line with an `expect` statement that tests
      // the behavior described by the `it` string
      throw new Error("This test is missing.");
    });

    it("fails for a collection containing mixed falsy and truthy values", function() {
      expect(_.every([true, false, 1], _.identity)).toBeFalsy();
      expect(_.every([1, undefined, true], _.identity)).toBeFalsy();
    });

    it("should work when provided a collection containing undefined values", function() {
      expect(
        _.every([undefined, undefined, undefined], _.identity)
      ).toBeFalsy();
    });

    it("should cast the result to a boolean", function() {
      expect(_.every([1], _.identity)).toBeTruthy();
      expect(_.every([0], _.identity)).toBeFalsy();
    });

    it("should handle callbacks that manipulate the input", function() {
      expect(_.every([0, 10, 28], isEven)).toBeTruthy();
      expect(_.every([0, 11, 28], isEven)).toBeFalsy();
    });

    it("should work when no callback is provided", function() {
      expect(_.every([true, true, true])).toBeTruthy();
      expect(_.every([true, true, false])).toBeFalsy();
      expect(_.every([false, false, false])).toBeFalsy();
    });
  });

  describe("some", function() {
    var isEven = function(number) {
      return number % 2 === 0;
    };

    it("should fail by default for an empty collection", function() {
      expect(_.some([])).toBeFalsy();
    });

    it("should pass for a collection of all-truthy results", function() {
      expect(_.some([true, {}, 1], _.identity)).toBeTruthy();
    });

    it("should fail for a collection of all-falsy results", function() {
      expect(_.some([null, 0, undefined], _.identity)).toBeFalsy();
    });

    it("should pass for a collection containing mixed falsy and truthy results", function() {
      expect(_.some([true, false, 1], _.identity)).toBeTruthy();
    });

    it("should pass for a set containing one truthy value that is a string", function() {
      expect(_.some([null, 0, "yes", false], _.identity)).toBeTruthy();
    });

    it("should fail for a set containing no matching values", function() {
      // Replace this line with an `expect` statement that tests
      // the behavior described by the `it` string
      throw new Error("This test is missing.");
    });

    it("should pass for a collection containing one matching value", function() {
      expect(_.some([1, 10, 29], isEven)).toBeTruthy();
    });

    it("should cast the result to a boolean", function() {
      expect(_.some([1], _.identity)).toBeTruthy();
      expect(_.some([0], _.identity)).toBeFalsy();
    });

    it("should work when no callback is provided", function() {
      expect(_.some([true, true, true])).toBeTruthy();
      expect(_.some([true, true, false])).toBeTruthy();
      expect(_.some([false, false, false])).toBeFalsy();
    });
  });

  describe("extend", function() {
    it("returns the first argument", function() {
      var destination = {};
      var source = {};
      var extended = _.extend(destination, source);

      expect(extended).toEqual(destination);
    });

    it("should extend an object with the attributes of another", function() {
      var destination = {};
      var source = { a: "b" };
      var extended = _.extend(destination, source);

      expect(extended.a).toEqual("b");
    });

    it("should override properties found on the destination", function() {
      // Replace this line with an `expect` statement that tests
      // the behavior described by the `it` string
      throw new Error("This test is missing.");
    });

    it("should not override properties not found in the source", function() {
      var destination = { x: "x" };
      var source = { a: "b" };
      var extended = _.extend(destination, source);

      expect(extended.x).toEqual("x");
    });

    it("should extend from multiple source objects", function() {
      var extended = _.extend({ x: 1 }, { a: 2 }, { b: 3 });

      expect(extended).toEqual({ x: 1, a: 2, b: 3 });
    });

    it("in the case of a conflict, it should use the last property's values when extending from multiple source objects", function() {
      var extended = _.extend({ x: "x" }, { a: "a", x: 2 }, { a: 1 });

      expect(extended).toEqual({ x: 2, a: 1 });
    });
  });

  describe("defaults", function() {
    it("should return the original target object", function() {
      /*
       * Our defaults function should only modify the contents of the original object,
       * it should not create a new object with all the same properties
       *
       * We can test this by using the identity operator (===)
       *
       * If we assign a variable to the result of _.defaults() and it === a variable assigned
       * to our initial object, then both variables are indeed references to the same object
       * and we are guaranteed that only the contents of our original object were modified
       */

      var destination = {};
      var source = {};
      var defaulted = _.defaults(destination, source);

      expect(defaulted).toEqual(destination); // .equal uses (===) under the hood
    });

    it("should copy a property if that key is not already set on the target", function() {
      /*
       * Be careful when using `arguments`. It's specified as a weird "Array-like object"
       * that's not really an array and not really even an object. This means normal operations
       * we would expect to work on objects (`for in`, `Object.keys`) and arrays (`push`, `pop`)
       * might not work as expected on `arguments`.
       *
       * In fact, the behavior of `arguments` is left up to various JavaScript engines to implement.
       * You might have noticed that running this exact same test works fine in Chrome or Firefox.
       * This is because the engines powering these browsers are smart enough to understand
       * the nuances of this complicated structure and might force it to act as expected.
       *
       * It turns out that the engine powering our runtime environment for these tests
       * is not as smart as Chrome and does not understand how to `for in` over the `arguments` object
       *
       * This could be considered a bug in our test environment but is better thought of as a learning
       * opportunity. The safest thing to do when working with `arguments` is convert it into a
       * real array that every JavaScript engine will know how to handle.
       *
       * If you're not sure how to do that, Stack Overflow has plenty to say on the topic.
       */

      var destination = {};
      var source = { a: 1 };

      _.defaults(destination, source);

      expect(destination.a).toEqual(1);
    });

    it("should copy any property whose key is not already set on the target", function() {
      // Replace this line with an `expect` statement that tests
      // the behavior described by the `it` string
      throw new Error("This test is missing.");
    });

    it("should not copy a property if that key is already set on the target", function() {
      var destination = { a: 10 };
      var source = { a: 1 };

      _.defaults(destination, source);

      expect(destination.a).toEqual(10);
    });

    it("should not copy any property whose key is already set on the target", function() {
      var destination = { a: 1, b: 2 };
      var source = { a: 100, b: 200, c: 300 };

      _.defaults(destination, source);

      expect(destination.a).toEqual(1);
      expect(destination.b).toEqual(2);
      expect(destination.c).toEqual(300);
    });

    it("should not copy a property if that key is already set on the target, even if the value for that key is falsy", function() {
      /*
       * When the value provided to an if() condition is not a strict boolean,
       * it will first be coerced into one and then evaluated
       *
       * A value is considered 'falsy' if, when coerced, it evaluates to `false`.
       * You can check the coerced boolean with either `Boolean(myValue)` or `!!myValue`
       *
       * This could be a problem because falsy values are valid in our object. If we aren't
       * precise enough with our conditional check, we might get these unexpected results
       */

      var destination = { a: "", b: 0, c: NaN };
      var source = { a: 1, b: 2, c: 3 };

      _.defaults(destination, source);

      expect(destination.a).toEqual("");
      expect(destination.b).toEqual(0);
      expect(isNaN(destination.c)).toEqual(true);
    });

    it("should copy properties source an arbitrary number of source objects", function() {
      var destination = {};
      var source = { a: 1 };
      var anotherSource = { b: 2, c: "three" };
      var aThirdSource = { d: "four" };

      _.defaults(destination, source, anotherSource, aThirdSource);

      expect(destination.a).toEqual(1);
      expect(destination.b).toEqual(2);
      expect(destination.c).toEqual("three");
      expect(destination.d).toEqual("four");
    });

    it("should prefer the first value found when two objects are provided with properties at the same key", function() {
      var destination = {};
      var source = { a: 1 };
      var anotherSource = { a: "one" };

      _.defaults(destination, source, anotherSource);

      expect(destination.a).toEqual(1);
    });
  });

  describe("once", function() {
    it("should return a function", function() {
      // noop is short for `no-operation` and is pronounced `no-op`
      var noop = _.once(function() {});

      expect(noop).toBeInstanceOf(Function);
    });

    it("should only run a user-defined function if it has not been run before", function() {
      var num = 0;
      var increment = _.once(function() {
        num++;
      });

      increment();
      increment();
      increment();

      expect(num).toEqual(1);
    });

    it("should apply arguments to the user-defined function", function() {
      var add = _.once(function(x, y, z) {
        return x + y + z;
      });

      expect(add(1, 2, 3)).toEqual(6);
    });

    it("should return the result of the first call for every subsequent call", function() {
      var add = _.once(function(x, y, z) {
        return x + y + z;
      });

      expect(add(1, 2, 3)).toEqual(6);
      expect(add(4, 5, 6)).toEqual(6);
      expect(add(7, 8, 9)).toEqual(6);
    });
  });

  describe("memoize", function() {
    var add, memoAdd;

    beforeEach(function() {
      add = function(a, b) {
        return a + b;
      };

      memoAdd = _.memoize(add);
    });

    it("should produce the same result as the non-memoized version", function() {
      expect(add(1, 2)).toEqual(3);
      expect(memoAdd(1, 2)).toEqual(3);
    });

    it("should give different results for different arguments", function() {
      expect(memoAdd(1, 2)).toEqual(3);
      expect(memoAdd(3, 4)).toEqual(7);
      expect(memoAdd(1, 3)).toEqual(4);
    });

    it("should not run the memoized function twice when given a primitive type as an argument", function() {
      // Here, we create a dummy function. A spy is a wrapper function (much like _.memoize
      // or _.once) that keeps track of interesting information about the function it's spying on;
      // e.g. whether or not the function has been called.
      const spy = jest.fn(() => "Dummy output");
      let memoizeMock = _.memoize(spy);

      memoizeMock(10);
      expect(spy).toHaveBeenCalledTimes(1);
      memoizeMock(10);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should not run the memoized function twice when given a reference type as an argument", function() {
      // Be careful how you are checking if a set of arguments has been passed in already
      const spy = jest.fn(() => "Dummy output");
      let memoizeMock = _.memoize(spy);

      memoizeMock([1, 2, 3]);
      expect(spy).toHaveBeenCalledTimes(1);
      memoizeMock([1, 2, 3]);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should run the memoized function twice when given an array and then given a list of arguments", function() {
      // Be careful how you are checking if a set of arguments has been passed in already
      const spy = jest.fn(() => "Dummy output");
      let memoizeMock = _.memoize(spy);

      memoizeMock([1, 2, 3]);
      expect(spy).toHaveBeenCalledTimes(1);
      memoizeMock(1, 2, 3);
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });

  describe("delay", function() {
    var callback;

    beforeEach(function() {
      jest.useFakeTimers();
      callback = jest.fn();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    it("should only execute the function after the specified wait time", function() {
      _.delay(callback, 100);

      expect(callback).not.toBeCalled();

      jest.advanceTimersByTime(100);

      expect(callback).toBeCalled();
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it("should have successfully passed function arguments in", function() {
      _.delay(callback, 100, 1, 2);

      expect(callback).not.toBeCalled();

      jest.advanceTimersByTime(100);

      expect(callback).toHaveBeenCalledWith(1, 2);
    });
  });

  describe("shuffle", function() {
    it("should not modify the original object", function() {
      var numbers = [4, 5, 6];
      var shuffled = _.shuffle(numbers).sort();

      expect(shuffled).not.toBe(numbers);
      expect(numbers).toEqual([4, 5, 6]);
    });

    it("should have the same elements as the original object", function() {
      var numbers = [4, 5, 6];
      var shuffled = _.shuffle(numbers).sort();

      expect(shuffled).toEqual([4, 5, 6]);
    });

    it("should not be in the same order as the original object", function() {
      var numbers = [4, 5, 6, 7, 8, 9, 10];
      var shuffled = _.shuffle(numbers);

      // This test will fail 1/9! times
      expect(shuffled).not.toEqual([4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
