const helper = require("../src/helper");

describe("Helper", () => {
  describe("getFullDate", () => {
    const dateExpected = "2021-08-28 21:15:56";
    let clock;

    beforeEach(() => {
      clock = sinon.useFakeTimers({
        now: new Date(2021, 7, 28, 21, 15, 56),
        shouldAdvanceTime: true,
        advanceTimeDelta: 20
      });
    });

    afterEach(() => {
      clock.restore();
    });

    it("Should returns a correct length date", () => {
      const stringDate = helper.getFullDate();

      expect(stringDate.length).toEqual(19);
    });

    it("Should returns a correct string date", () => {
      const stringDate = helper.getFullDate();

      expect(stringDate.length).toEqual(19);
      expect(stringDate).toEqual(dateExpected);
    });
  });
});
