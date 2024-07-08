import {
  factorial,
  filterGreater,
  mapSquare,
  sumOfEven,
  reversed,
} from "./arrays";

describe("arrays", () => {
  beforeEach(() => {
    // setup
  });

  describe("factorial", () => {
    test("1!", () => {
      expect(factorial(1)).toEqual(1);
    });
    test("2!", () => {
      expect(factorial(2)).toEqual(2);
    });
    test("3!", () => {
      expect(factorial(3)).toEqual(6);
    });
    test("4!", () => {
      expect(factorial(4)).toEqual(24);
    });
  });

  describe("filterGreater", () => {
    test("no op", () => {
      expect(filterGreater([10, 30, 20], 5)).toEqual([10, 30, 20]);
    });
    test("filter some", () => {
      expect(filterGreater([10, 30, 20], 15)).toEqual([30, 20]);
    });
    test("remove all", () => {
      expect(filterGreater([10, 30, 20], 35)).toEqual([]);
    });
  });

  describe("mapSquare", () => {
    test("basic", () => {
      expect(mapSquare([1, 2, 3])).toEqual([1, 4, 9]);
    });
    test("empty", () => {
      expect(mapSquare([])).toEqual([]);
    });
  });

  describe("sumOfEven", () => {
    test("all even", () => {
      expect(sumOfEven([10, 20, 30])).toEqual(10 + 20 + 30);
    });
    test("all odd", () => {
      expect(sumOfEven([11, 21, 31])).toEqual(0);
    });
    test("mixed", () => {
      expect(sumOfEven([11, 20, 40, 31])).toEqual(20 + 40);
    });
  });

  describe("reversed", () => {
    test("basic", () => {
      expect(reversed([10, 20, 30])).toEqual([30, 20, 10]);
    });
    test("empty", () => {
      expect(reversed([])).toEqual([]);
    });
  });
});
