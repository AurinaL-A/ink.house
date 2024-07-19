var button = document.querySelector('.filter__btn');

button.addEventListener('click', function() {
  this.classList.toggle('btn-alt-color');

}, false);

const francBtn = document.querySelector('.franc_btn');
const germanBtn = document.querySelector('.german_btn');
const englandBtn = document.querySelector('.england_btn');
const all = document.querySelector('.all_btn');
const francCards = document.querySelectorAll('.franc');
const germanCards = document.querySelectorAll('.german');
const englandCards = document.querySelectorAll('.england');

francBtn.addEventListener('click', () => {
  francCards.forEach(card => card.style.display = 'block');
  germanCards.forEach(card => card.style.display = 'none');
  englandCards.forEach(card => card.style.display = 'none');
});

germanBtn.addEventListener('click', () => {
  francCards.forEach(card => card.style.display = 'none');
  germanCards.forEach(card => card.style.display = 'block');
  englandCards.forEach(card => card.style.display = 'none');
});

englandBtn.addEventListener('click', () => {
  francCards.forEach(card => card.style.display = 'none');
  germanCards.forEach(card => card.style.display = 'none');
  englandCards.forEach(card => card.style.display = 'block');
});

all.addEventListener('click', () => {
    francCards.forEach(card => card.style.display = 'block');
    germanCards.forEach(card => card.style.display = 'block');
    englandCards.forEach(card => card.style.display = 'block');
  });