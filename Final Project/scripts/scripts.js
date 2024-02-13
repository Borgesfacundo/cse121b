/* Final Project */

/* Declaring global variables */
const cardsElement = document.querySelector("#cards");
let cardList = {};


/* async displayCards Function 
Add cards info to the cardsElement */
const displayCards = (cards) => {
    cards.forEach(card => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = card.name;
        const picture = document.createElement("img");
        picture.setAttribute("src", card.img);
        picture.setAttribute("alt", card.name);
        article.appendChild(h3);
        article.appendChild(picture);
        cardsElement.appendChild(article);
    })
};


/* async getCards Function with fetch()
Here I am getting the information about cards via a JSON file*/
const getCards = async () => {
    const response = await fetch("json/Yu-Gi-OhCards.json");
    if (response.ok) {
        const data = await response.json();
        cardList = data;
        displayCards(cardList);
    }
    //Checking console log
    console.log(cardList);
}


/* reset Function
this is being used to filter our cards */
const reset = () => {
    var articles = cardsElement.querySelectorAll('article');

    articles.forEach(function (article) {
        cardsElement.removeChild(article);
    })
}

/* Filter Cards Function
This function give the user the chance to filter cards */
filterCards = (cards) => {
    reset();
    const filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "name":
            //sort cards alphabetically by name
            cards.sort((a, b) => a.name.localeCompare(b.name));
            displayCards(cards);
            break;
        case "monsters":
            displayCards(cards.filter(card => card.level >= 1));
            break;
        case "trapAndMagic":
            displayCards(cards.filter(card => card.level === 0));
            break;
        case "all":
            displayCards(cards)
            break;
    }
};



/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterCards(cardList); });

getCards();

