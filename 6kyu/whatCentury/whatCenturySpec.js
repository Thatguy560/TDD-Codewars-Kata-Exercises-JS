describe("whatCentury", () => {
  it("will return 20th century if year is 1901 upto 2000", () => {
    expect(whatCentury("1999")).toEqual("20th");
  });

  it("will return 21th century if year is 2001 upto 2100", () => {
    expect(whatCentury("2011")).toEqual("21st");
  });

  it("will return 22nd century if year is 2101 upto 2200", () => {
    expect(whatCentury("2154")).toEqual("22nd");
  });

  it("will return 23rd century if year is 2201 upto 2300", () => {
    expect(whatCentury("2259")).toEqual("23rd");
  });

  it("will return 12th century if year is 1101 upto 1200", () => {
    expect(whatCentury("1124")).toEqual("12th");
  });
});
