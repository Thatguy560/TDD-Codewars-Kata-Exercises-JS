const ipsBetween = require("./countIPAddresses");

describe("ipsBetween", () => {
  it("Will count the number of IP Addresses", () => {
    expect(ipsBetween("10.0.0.0", "10.0.0.50")).toEqual(50);
  });
});
