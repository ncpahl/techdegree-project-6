const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
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

start.addEventListener('click', () =>{
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
      letter[i].classList.add('show');
      letter[i].style.transition = "all 2s";
      match = true;
    }
  }
  return match;
}



//check if winning or losing

function checkWin() {
  const letters = document.getElementsByClassName('letter').length; //count letters class
  const showLetters = document.getElementsByClassName('show').length; //count show class
  const title = document.querySelector('.title'); // overlay title
  const reset = document.querySelector('.btn__reset'); //button text

  console.log(letters);
  console.log(showLetters);

  if (letters === showLetters) {
    overlay.setAttribute('class', 'win'); //change overlay class
    title.textContent = 'You Win!'; //change title text
    reset.textContent = 'Try Again'; //change button text
    overlay.style.display = ''; // show overlay

    //refresh browswer
    reset.addEventListener('click', () =>{
      location.reload();
    });
  }

  if (missed === 5) {
    overlay.setAttribute('class', 'lose'); //change overlay class
    title.textContent = 'Sorry'; //change title text
    reset.textContent = 'Try Again'; //change button text
    overlay.style.display = ''; // show overlay

    //refresh browswer
    reset.addEventListener('click', () =>{
      location.reload();
    });

  }
  }

//keyboard guesses

qwerty.addEventListener('click', e => {
  let letterFound = checkLetter(e.target); //letter in button

  if (e.target.tagName == 'BUTTON'){ //choose button only not div
    e.target.classList.add('chosen'); // change class name to chosen
    e.target.disabled = true; // turn off key selected

        //scoreboard
          if (letterFound === null) {
            missed += 1; //update score
            let heart = document.querySelector("img[src='images/liveHeart.png']"); // heart image
            let lost = document.createElement('img'); // lost heart image

            //replace heart for misses
            lost.setAttribute('src','images/lostHeart.png');
            lost.setAttribute('height','35px');
            lost.setAttribute('width','30px');
            heart.replaceWith(lost);

            console.log(missed);
          }
      }


    checkWin();


});
