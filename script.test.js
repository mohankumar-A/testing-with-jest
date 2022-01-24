const googlesearch = require("./script");

const dbMock = [
    "dog.com",
    "disney.com",
    "cheesepuff.com",
];

describe("google search", () => {
    it("this is a test", () => {
        expect("hello").toBe("hello");
    });

    it("searching google", () => {
        expect(googlesearch("test", dbMock)).toEqual([]);
        expect(googlesearch("dog", dbMock)).toEqual(["dog.com"]);
    });

    it("should work with null and undefined", () => {
        expect(googlesearch(null, dbMock)).toEqual([]);
        expect(googlesearch(undefined, dbMock)).toEqual([]);
    });

    it("doesnot return more then three matches", () => {
        expect(googlesearch(".com", dbMock).length).toEqual(3);
    });
});
