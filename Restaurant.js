// Načtení section z index.html
const section = document.querySelector(".results");

// Získání dat od uživatele aplikace
const spending = parseInt(prompt("Zadejte částku k úhradě: "));
const tip = parseInt(prompt("Zadejte spropitné v %"));
const people = parseInt(prompt("Zadejte počet lidí"));
console.log(spending, tip, people);

// Výpočet
const result = (spending + spending * (tip / 100)) / people;

// Přidání do stránky
const p = document.createElement("p");
p.textContent = `Jeden člověk zaplatí ${result} Kč`;
section.append(p);
