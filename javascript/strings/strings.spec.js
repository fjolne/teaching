import { golf1D } from "./strings";

describe("TEMPLATE", () => {
  beforeEach(() => {
    // setup
  });

  describe("golf1D", () => {
    test("basic good", () => {
      expect(golf1D("*_____o|")).toEqual(true);
    });
    test("over the field", () => {
      expect(golf1D("*______o")).toEqual(false);
    });
    test("pre wall bad", () => {
      expect(golf1D("*__|__o|")).toEqual(false);
    });
    test("post wall good", () => {
      expect(golf1D("|_*___o|")).toEqual(true);
    });
  });
});
