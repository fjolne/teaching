import { valuesSum, filterOdd, formatObject } from "./objects";

describe("TEMPLATE", () => {
  beforeEach(() => {
    // setup
  });

  describe("valuesSum", () => {
    test("empty", () => {
      expect(valuesSum({})).toEqual(0);
    });
    test("one", () => {
      expect(valuesSum({ a: 10 })).toEqual(10);
    });
    test("many", () => {
      expect(valuesSum({ a: 10, b: 12, c: 14 })).toEqual(36);
    });
  });

  describe("filterOdd", () => {
    test("empty", () => {
      expect(filterOdd({})).toEqual({});
    });
    test("one even", () => {
      expect(filterOdd({ a: 10 })).toEqual({});
    });
    test("one odd", () => {
      expect(filterOdd({ a: 11 })).toEqual({ a: 11 });
    });
    test("many", () => {
      expect(filterOdd({ a: 10, b: 11, c: 25, d: 23 })).toEqual({
        b: 11,
        c: 25,
        d: 23,
      });
    });
  });

  describe("formatObject", () => {
    function parseObject(s) {
      return Object.fromEntries(s.split(",").map((kv) => kv.split("=")));
    }
    test("empty", () => {
      expect(formatObject({})).toEqual("");
    });
    test("single", () => {
      expect(formatObject({ hello: "world" })).toEqual("hello=world");
    });
    test("two", () => {
      const obj = { a: "b", c: "d" };
      expect(parseObject(formatObject(obj))).toEqual(obj);
    });
    test("three", () => {
      const obj = { john: "yellow", anna: "blue", mike: "cheese" };
      expect(parseObject(formatObject(obj))).toEqual(obj);
    });
  });
});
