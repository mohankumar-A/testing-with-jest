// const fetch = require("node-fetch");

// import fetch from 'node-fetch';

const getPeoplePromise = fetch => {
    return fetch("https://swapi.dev/api/people/")
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data);
            return {
                count: data.count,
                results: data.results
            }
        })
        .catch(err => {
            console.log(err);
        });
}

const getPeopleAsync = async (fetch) => {
    const getRequest = await fetch("https://swapi.dev/api/people/");
    const data = await getRequest.json();
    // console.log(data)
    return {
        count: data.count,
        results: data.results
    }
}

// getPeoplePromise(fetch);
// getPeopleAsync(fetch);

module.exports = {
    getPeopleAsync,
    getPeoplePromise
}