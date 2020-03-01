const stringifyJSON = require("../src/stringifyJSON");
const { stringifiableObjects, unstringifiableValues } = require("./fixtures");

// test cases are described in fixtures.js
describe("stringifyJSON", () => {
  test("should match the result of calling JSON.stringify", () => {
    stringifiableObjects.forEach(obj => {
      let expected = JSON.stringify(obj);
      let result = stringifyJSON(obj);
      expect(result).toEqual(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      let expected = JSON.stringify(obj);
      let result = stringifyJSON(obj);
      expect(result).toEqual(expected);
    });
  });
});
