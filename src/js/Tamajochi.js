class Tamajochi {
  constructor(){
    this._health = 100;
    this._satiety = 100;
    this._mood = 100;
    this._purity = 100;
    this._energy = 100;
    this._love = 100;
  }

  get health(){
    return this._health;
  }

  set health(value){
    this._health = value;
  }

  get satiety(){
    return this._satiety;
  }

  set satiety(value){
    this._satiety = value;
  }

  get mood(){
    return this._mood;
  }

  set mood(value){
    this._mood = value;
  }

  get purity(){
    return this._purity;
  }

  set purity(value){
    this._purity = value;
  }

  get energy(){
    return this._energy;
  }

  set energy(value){
    this._energy = value;
  }

  get love(){
    return this._love;
  }

  set love(value){
    this._love = value;
  }
}

export default Tamajochi;