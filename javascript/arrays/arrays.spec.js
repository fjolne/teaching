import {
  factorial,
  filterGreater,
  mapSquare,
  sumOfEven,
  reversed,
  modernize,
  all0,
  max,
  longest0,
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

  describe("modernize", () => {
    test("he is", () => {
      expect(
        modernize(
          "he was a great programmer: many thought of him as a genius. though he said he was not."
        )
      ).toEqual(
        "they was a great programmer: many thought of them as a genius. though they said they was not."
      );
    });
    test("many many", () => {
      expect(modernize("his his him he him he")).toEqual(
        "their their them they them they"
      );
    });
  });

  describe("all0", () => {
    test("mixed", () => {
      expect(all0([1, 0, 0, 2, 3, 0, 0, 0])).toEqual(false);
    });
    test("all", () => {
      expect(all0([0, 0, 0, 0, 0, 0, 0, 0])).toEqual(true);
    });
    test("none", () => {
      expect(all0([1, 2, 3])).toEqual(false);
    });
  });

  describe("max", () => {
    test("first", () => {
      expect(max([3, 2, 1])).toEqual(3);
    });
    test("last", () => {
      expect(max([1, 2, 3, 4])).toEqual(4);
    });
    test("mid", () => {
      expect(max([1, 2, 3, 2, 1])).toEqual(3);
    });
    test("multi", () => {
      expect(max([1, 3, 3, 2, 1])).toEqual(3);
    });
  });

  describe("longest0", () => {
    test("last", () => {
      expect(longest0([1, 0, 0, 2, 3, 0, 0, 0])).toEqual(3);
    });
    test("first", () => {
      expect(longest0([0, 0, 0, 0, 5, 4, 0, 0])).toEqual(4);
    });
    test("none", () => {
      expect(longest0([1, 2, 3])).toEqual(0);
    });
    test("full", () => {
      expect(longest0([0, 0, 0, 0])).toEqual(4);
    });
  });
});
