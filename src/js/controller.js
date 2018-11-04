const tamajochiDOM = document.querySelector('.tamagochi');

export const subtractValue = (instance, value) => {
  return instance - value;
}

//create tamajochi action

export const handleAction = (prop, dom, image, value) =>{
  clearTimeout(action);
  prop = prop + value;
  tamajochiDOM.style.backgroundImage = `url(${image})`;
  let action = setTimeout(() => {
    tamajochiDOM.style.backgroundImage = "url(https://s.tcdn.co/ee1/7e3/ee17e34b-083f-3cae-b8de-24e96558758b/3.png)";
  }, 2000);
  if(prop >= 100) prop = 100;
 
  dom.innerText = prop;
  return prop; 
}