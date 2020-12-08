const domainName = require("./domainName");

describe("domainName", () => {
  it("Will only return the domain name from a url example 1", () => {
    expect(domainName("http://google.com")).toEqual("google");
  });

  it("Will only return the domain name from a url example 2", () => {
    expect(domainName("https://youtube.com")).toEqual("youtube");
  });

  it("Will only return the domain name from a url example 2", () => {
    expect(domainName("www.xakep.ru")).toEqual("xakep");
  });
});
