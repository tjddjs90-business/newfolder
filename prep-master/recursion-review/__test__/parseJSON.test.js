const parseJSON = require("../src/parseJSON");
const { parseableStrings, unparseableStrings } = require("./fixtures");

// test cases are described in fixtures.js
describe("parseJSON", function() {
  test("should match the result of calling JSON.parse", () => {
    parseableStrings.forEach(string => {
      let result = parseJSON(string);
      let expected = JSON.parse(string);
      expect(result).toEqual(expected);
    });
  });

  test("should throw an error for invalid stringified JSON", () => {
    unparseableStrings.forEach(string => {
      let fn = () => {
        parseJSON(string);
      };
      // if you'd prefer, you can write your version of parseJSON
      // so that it passes this test instead of the one on line 21.
      // expect(parseJSON(test)).to.equal(undefined);
      expect(fn).toThrow(SyntaxError);
    });
  });
});
