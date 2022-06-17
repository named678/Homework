window.onload = function(){
  myGreeting();
}

function myGreeting(){
  let myDog = {
    'name': "Clifford",
    'breed': "Labrador Retreivor",
    'from': "Clifford the Big Red Dog",
    'color': "red",
    'tf': true
  }
myDog.mySound="Deafening";

  function myDogConst(name, breed, from, color, mySound, tf){
    this.name = name;
    this.breed = breed;
    this.from = from;
    this.color = color;
    this.canTalk = tf;
    this.mySound = mySound;
  }

  let dog = new myDogConst(myDog.name, myDog.breed, myDog.from, myDog.color, myDog.mySound, myDog.tf);
  let newDog = new myDogConst("Ralphie", "St. Brebard", "Lazer Tag Academy",  "White", "Yip", false)
  let alert="";

  for(const key in dog){
    if(key !== "canTalk") {
      alert += `${key}: ${dog[key]}\n`;
    }

  }
  if (dog.canTalk){
    alert += "This dog can talk\n";
  }
  else {alert = "This dog cannot talk"}
  alert += "Next Dog\n";

  for(const key in newDog){
    if(key !== "canTalk") {
      alert += `${key}: ${newDog[key]}\n`;
    }
  }
  if (newDog.canTalk){
    alert += "This dog can talk\n";
  }
  else {alert += "This dog cannot talk"}

  window.alert(alert);
}
