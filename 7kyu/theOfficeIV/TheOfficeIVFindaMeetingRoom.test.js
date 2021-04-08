const meeting = require("./TheOfficeIVFindaMeetingRoom");

describe("meeting", () => {
  it("Will show you the index of the available meeting room (if there is one)", () => {
    expect(meeting(["O", "X", "X", "X", "X"])).toEqual(0);
  });

  it("Will let you know if there's no meeting rooms available", () => {
    expect(meeting(["X", "X", "X", "X", "X"])).toEqual("None available!");
  });
});
