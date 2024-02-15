/* My Final Project */

/* Declaring global variables */
const cardsElement = document.querySelector("#cards");
const backElemetn = document.querySelector("#flip-card-back");
let cardList = {};


/* async displayCards Function 
Add cards info to the cardsElement */
const displayCards = (cards) => {
    cards.forEach(card => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = `${card.name}`;
        const flipCard = document.createElement("div");
        flipCard.setAttribute("class", "flip-card")

        const flipCardInner = document.createElement("div");
        flipCardInner.setAttribute("class", "flip-card-inner");
        flipCard.appendChild(flipCardInner);
        
        //add a new div to put the img inside
        const flipCardFront = document.createElement("div");
        flipCardFront.setAttribute("class", "flip-card-front")
        flipCardInner.appendChild(flipCardFront);

        const flipCardBack = document.createElement("div");
        flipCardBack.setAttribute("class", "flip-card-back");
        //add description
        
        flipCardInner.appendChild(flipCardBack);



        const picture = document.createElement("img");
        picture.setAttribute("src", card.img);
        picture.setAttribute("alt", card.name);
        //add picture inside div
        flipCardFront.appendChild(picture);
        article.appendChild(h3);
        article.appendChild(flipCard);
        cardsElement.appendChild(article);
    })
};


/* async getCards Function with fetch()
Here I am getting the information about cards via a JSON file*/
const getCards = async () => {
    const response = await fetch("https://borgesfacundo.github.io/cse121b/Final%20Project/json/Yu-Gi-ohCards.json");
    if (response.ok) {
        const data = await response.json();
        cardList = data;
        displayCards(cardList);
    }
    //Checking console log
    console.log(cardList);
}


/* reset Function
this is being used to clear cardsElement*/
const reset = () => {
    var articles = cardsElement.querySelectorAll('article');

    articles.forEach(function (article) {
        cardsElement.removeChild(article);
    })
}

/* Filter Cards Function
This function gives the user the opportunity to filter cards */
filterCards = (cards) => {
    reset();
    const filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "name":
            //sort cards alphabetically by name
            cards.sort((a, b) => a.name.localeCompare(b.name));
            displayCards(cards);
            break;
            //Sort cards showing only monster cards
        case "monsters":
            displayCards(cards.filter(card => card.level >= 1));
            break;
            //sort cards showing only trap and magic cards
        case "trapAndMagic":
            displayCards(cards.filter(card => card.level === 0));
            break;
            //who all cards
        case "all":
            displayCards(cardList)
            break;
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterCards(cardList); });

getCards();

