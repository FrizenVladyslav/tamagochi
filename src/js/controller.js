const modal = document.querySelector('.modal'),
   modalAction = document.querySelector('.modalaction');

export const subtractValue = (instance, value) => {
  return instance - value;
}

export const handleAction = (prop, dom, image, value) =>{
  prop = prop + value;
  modal.style.display = 'block';
  modalAction.style.backgroundImage = `url(${image})`;
  setTimeout(() => {
    modal.style.display = 'none';
  }, 2000);
  if(prop >= 100){
    prop = 100;
    dom.innerText = prop;
  }else{
    dom.innerText = prop ;   
  }
  return prop; 
}