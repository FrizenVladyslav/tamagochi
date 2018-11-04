//import styles
import './scss/main.scss';

// import dependencies
import Tamajochi from "./js/Tamajochi";
import { handleAction, subtractValue } from "./js/controller";


//tamajochi
const name = prompt('Введите имя питомца', 'Linus Torvalds');
const tamajochi = new Tamajochi(name);



//DOM elements
document.getElementById('name').innerText = tamajochi.name;
const healthDOM = document.getElementById('health');
const satietyDOM = document.getElementById('satiety');
const moodDOM = document.getElementById('mood');
const purityDOM = document.getElementById('purity');
const energyDOM = document.getElementById('energy');
const loveDOM = document.getElementById('love');
const tamajochiDOM = document.querySelector('.tamagochi');

//Buttons
const btnhealth = document.getElementById('btnhealth');
const btnsatiety = document.getElementById('btnsatiety');
const btnmood = document.getElementById('btnmood');
const btnpurity = document.getElementById('btnpurity');
const btnenergy = document.getElementById('btnenergy');
const btnlove = document.getElementById('btnlove');

//AddListeners
btnhealth.addEventListener('click', handleHealth);
btnsatiety.addEventListener('click', handleSatiety);
btnmood.addEventListener('click', handleMood);
btnpurity.addEventListener('click', handlePurity);
btnenergy.addEventListener('click', handleEnergy);
btnlove.addEventListener('click', handleLove);

//Tamagochi life 
let live = setInterval(() => {
  let {health, satiety, mood, purity, energy, love} = tamajochi;
  tamajochi.health = subtractValue(health, 1);
  tamajochi.satiety = subtractValue(satiety, 10);
  tamajochi.mood = subtractValue(mood, 5);
  tamajochi.purity = subtractValue(purity, 4);
  tamajochi.energy = subtractValue(energy, 5);
  tamajochi.love = subtractValue(love, 2);
  healthDOM.innerText = health;
  satietyDOM.innerHTML = satiety;
  moodDOM.innerText = mood;
  purityDOM.innerText = purity;
  energyDOM.innerText = energy;
  loveDOM.innerText = love;
  if(health<=0  || satiety<=0 || mood<=0 || purity<=0 || energy<=0 || love<=0){
    handleDied();
  }

},5000)

//tamagochi died
function handleDied(){
  clearInterval(live);
  btnhealth.removeEventListener('click', handleHealth);
  btnhealth.removeEventListener('click', handleHealth);
  btnsatiety.removeEventListener('click', handleSatiety);
  btnmood.removeEventListener('click', handleMood);
  btnpurity.removeEventListener('click', handlePurity);
  btnenergy.removeEventListener('click', handleEnergy);
  btnlove.removeEventListener('click', handleLove);

  tamajochiDOM.style.backgroundImage = "url(https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/1.png)";
}

function handleHealth(){
  tamajochi.health = handleAction(
      tamajochi.health,
      healthDOM, 
      'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/15.png',
      10
  );
}

function handleSatiety(){
  tamajochi.satiety = handleAction(
      tamajochi.satiety,
      satietyDOM, 
      'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/12.png',
      50
  );
}

function handleMood(){
  tamajochi.mood = handleAction(
      tamajochi.mood,
      moodDOM, 
      'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/14.png',
      40
  );
}

function handlePurity(){
  tamajochi.purity = handleAction(
      tamajochi.purity,
      purityDOM, 
      'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/23.png',
      30
  );
}

function handleEnergy(){
  tamajochi.energy = handleAction(
    tamajochi.energy,
    energyDOM, 
    'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/24.png',
    100
  );
}

function handleLove(){
  tamajochi.love = handleAction(
    tamajochi.love,
    loveDOM, 
    'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/6.png',
    10
  );
}
