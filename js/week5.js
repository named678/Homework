window.onload = function(){



  myGreeting();
}


function myGreeting(){
  let myDog = {
    'name': "Clifford",
    'breed': "Labrador Retreivor",
    'from': "Clifford the Big Red Dog",
    'color': "red"
  }
myDog.mySound="Deafening";
  function myDogConst(name, breed, from, color, mySound){
    this.name = name;
    this.breed = breed;
    this.from = from;
    this.color = color;
    this.canTalk = true;
    this.mySound = mySound;
  }
  let dog = new myDogConst(myDog.name, myDog.breed, myDog.from, myDog.color, myDog.mySound);
  console.log();
  window.alert(`Hello, I'm ${dog.name}, my bark is ${dog.mySound}, I am from the tv show ${dog.from}, I am a ${dog.breed}. I am a cuddly teddybear who is nice to everyone`);

}
