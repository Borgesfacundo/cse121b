/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Facundo Borges",
    photo: "images/placeholder.png",
    favoriteFoods: [
        "Milanesas",
        "Pure de Papas",
        "Ice Cream",
        "Shrimp"
    ],
    hobbies: [
        "Play Soccer",
        "Watch NBA",
        "Play Videogames",
        "Read Books"
    ],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "9 de Julio, Buenos Aires",
        length: "19 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Fortaleza, Ceara, Brazil",
        length: "2 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Eagle Mountain, UT",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const picture = document.querySelector("#photo");
picture.setAttribute("src", myProfile.photo);
picture.setAttribute("alt", myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(x => {
    let li = document.createElement("li");
    li.textContent = x;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(x => {
    let list = document.createElement("li");
    list.textContent = x;
    document.querySelector("#hobbies").appendChild(list);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(x => {
    let places = document.createElement("dt");
    let lengths = document.createElement("dd");
    places.textContent = x.place;
    lengths.textContent = x.length;
    document.querySelector("#places-lived").appendChild(places);
    document.querySelector("#places-lived").appendChild(lengths);
});

