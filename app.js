const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;


//phrases
const phrases = [
  'from russia with love',
  'diamonds are forever',
  'for your eyes only',
  'die another day',
  'tomorrow never dies'
];

//start game - remove overlay
const start = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');

start.addEventListener('click', (e) =>{
  overlay.style.display = 'none';
});

//random phrase
function getRandomPhraseAsArray(phrases){
  let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  let randomLetters = randomPhrase.split('');
  return randomLetters;
}

const phraseArray = getRandomPhraseAsArray(phrases);

//add phrase to display and apply classes
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1){
      const array = phraseArray[i];
      const ul = document.querySelector('#phrase ul');
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(array));
      ul.appendChild(li);
  if (array !== " "){
    li.className = 'letter';
  } else {
    li.className = 'space';
  }
  }
  return phrase;
}

addPhraseToDisplay(phraseArray);

//compare letter clicked against each class .letter
//if strings match add .show class
//store matching letter and return
//show null if not

function checkLetter(e) {
  const letter = document.querySelectorAll('.letter');
  let match = null;

  for (let i = 0; i < letter.length; i += 1){
    if (e.textContent === letter[i].textContent) {
      li[i].className = 'show';
      match = li[i];
    }
  }
  return match;
}

qwerty.addEventListener('click', (e) =>{
  const button 
  overlay.style.display = 'none';
});
