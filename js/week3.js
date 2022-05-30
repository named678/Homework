window.onload = function(){
  var a = 0;
  for ( a = 0; a <= 10; a++){
    if(a % 2 == 0){
      text = "even";
    }
    else{
      text = "odd";
    }
    window.onload = alert("Count "+ a + " is "+ text);

  }

  let myNum = prompt("Please give a number between 5 and 20: ");
  if(myNum >= 5 && myNum <= 20){
    let i = 1;
    do{
      window.alert(i);
    i++;
    }
    while (i <= myNum);
  }
  else{
    window.alert("Number is not in range.");

  }

  let words = ["Accounting", "Algebra", "Programming", "Art", "Data_Analytics"];
  words.forEach(alert(" " + words));


}
