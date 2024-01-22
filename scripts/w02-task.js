/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Facundo Borges";

const d = new Date();
const currentYear = d.getFullYear();

const profilePicture = "images/placeholder.png";


/* Step 3 - Element Variables */
nameElement = document.getElementById("name");
foodElement = document.getElementById("food");
yearElement = document.querySelector("#year");
imageElement = document.querySelector("img");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}.`);

/* Step 5 - Array */
foods = ["Milanesas Napolitanas", "Pizza", "Ñoquis", "Chicken Alfredo", "Marineras", "Feijoada", "Empanadas"];

foodElement.textContent = foods;

newFavFood = "Tacos";
foods.push(newFavFood);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;

