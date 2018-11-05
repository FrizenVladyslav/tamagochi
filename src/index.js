//import styles
import './scss/main.scss';

// import dependencies
import Tamajochi from "./js/Tamajochi";
import { handleAction, subtractValue } from "./js/controller";

//import DOM elements
import {DOM, buttons} from './js/dom';

//tamajochi
const name = prompt('Введите имя питомца', 'Linus Torvalds');
const tamajochi = new Tamajochi(name);
document.getElementById('name').innerText = tamajochi.name;


//AddListeners
const {btnhealth, btnsatiety, btnmood, btnpurity, btnenergy, btnlove} = buttons;
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
  DOM.health.innerText = health;
  DOM.satiety.innerHTML = satiety;
  DOM.mood.innerText = mood;
  DOM.purity.innerText = purity;
  DOM.energy.innerText = energy;
  DOM.love.innerText = love;
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

  DOM.tamajochi.style.backgroundImage = "url(https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/1.png)";
}

function handleHealth(){
  tamajochi.health = handleAction(
      tamajochi.health,
      DOM.health, 
      'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/15.png',
      10
  );
}

function handleSatiety(){
  tamajochi.satiety = handleAction(
      tamajochi.satiety,
      DOM.satiety, 
      'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/12.png',
      50
  );
}

function handleMood(){
  tamajochi.mood = handleAction(
      tamajochi.mood,
      DOM.mood, 
      'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/14.png',
      40
  );
}

function handlePurity(){
  tamajochi.purity = handleAction(
      tamajochi.purity,
      DOM.purity, 
      'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/23.png',
      30
  );
}

function handleEnergy(){
  tamajochi.energy = handleAction(
    tamajochi.energy,
    DOM.energy, 
    'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/24.png',
    100
  );
}

function handleLove(){
  tamajochi.love = handleAction(
    tamajochi.love,
    DOM.love, 
    'https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/6.png',
    10
  );
}
