import { factorial, filterGreater } from "./arrays";

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
});
