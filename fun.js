// Отримуємо елементи
const pokeball = document.getElementById('pokeball');
const pokemonSprites = [
  document.getElementById('charizard'),
  document.getElementById('vileplume'),
  document.getElementById('dragonite'),
  document.getElementById('luxray'),
  document.getElementById('Emboar'),
  document.getElementById('Vivillon'),
  document.getElementById('Necrozma'),
  document.getElementById('Coalossal'),
  document.getElementById('Annihilape'),
  document.getElementById('Iron Boulder'),
  document.getElementById('Baxcalibur')
];

// Додаємо обробник події на натискання покемон бола
pokeball.addEventListener('click', () => {
  console.log("Покемон Бол натиснуто");

  // Сховаємо всіх покемонів перед показом нового
  pokemonSprites.forEach(pokemon => {
    pokemon.classList.remove('active'); // Прибираємо активний клас
    pokemon.style.opacity = "0"; // Приховуємо покемона
  });

  // Вибираємо випадкового покемона
  const randomIndex = Math.floor(Math.random() * pokemonSprites.length);
  const randomPokemon = pokemonSprites[randomIndex];

  // Показуємо випадкового покемона з анімацією
  randomPokemon.style.opacity = "1"; // Встановлюємо видимість покемона
  randomPokemon.classList.add('active'); // Додаємо клас active для анімації
});
