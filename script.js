const google = [
    "cats.com",
    "soupreceipies.com",
    "flowers.com",
    "animals.com",
    "catpictures.com",
    "myfavoritescats.com",
    "myfavoritescats2.com"
];

const googlesearch = (searchinput, db) => {
    const match = db.filter((website) => website.includes(searchinput));
    return match.length > 3 ? match.slice(0,3) : match;
};

// console.log(googlesearch("cat", google));

module.exports = googlesearch;