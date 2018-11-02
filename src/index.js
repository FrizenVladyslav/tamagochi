import Tamajochi from "./js/Tamajochi";
import { handleAction, subtractValue } from "./js/controller";
import './scss/main.scss';

const tamajochi = new Tamajochi();
const healthDOM = document.getElementById('health'),
      satietyDOM = document.getElementById('satiety'),
      moodDOM = document.getElementById('mood'),
      purityDOM = document.getElementById('purity'),
      energyDOM = document.getElementById('energy'),
      loveDOM = document.getElementById('love'),
      tamajochiDOM = document.querySelector('.tamagochi');

const btnhealth = document.getElementById('btnhealth'),
      btnsatiety = document.getElementById('btnsatiety'),
      btnmood = document.getElementById('btnmood'),
      btnpurity = document.getElementById('btnpurity'),
      btnenergy = document.getElementById('btnenergy'),
      btnlove = document.getElementById('btnlove');

btnhealth.addEventListener('click', handleHealth);
btnsatiety.addEventListener('click', handleSatiety);
btnmood.addEventListener('click', handleMood);
btnpurity.addEventListener('click', handlePurity);
btnenergy.addEventListener('click', handleEnergy);
btnlove.addEventListener('click', handleLove);

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
