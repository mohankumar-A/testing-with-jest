const fetch = require('node-fetch');
const swapi = require("./script1");


it("call swapi to get people with promise", () => {
    expect.assertions(1);
    return swapi.getPeoplePromise(fetch)
        .then((data) => {
            expect(data.count).toEqual(82);
        })
});

it("call swapi to get people with async", () => {
    expect.assertions(2);
    return swapi.getPeopleAsync(fetch)
    .then(data => {
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
    })
});

it ("getpeople return count and result", () => {
    const mock = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 83,
                results: [1,2,3,4,5,6]
            })
        }));

    expect.assertions(4);
    return swapi.getPeopleAsync(mock).then((data) => {
        expect(mock.mock.calls.length).toBe(1);
        expect(mock).toBeCalledWith("https://swapi.dev/api/people/");
        expect(data.count).toEqual(83);
        expect(data.results.length).toBeGreaterThan(5);
    })

});