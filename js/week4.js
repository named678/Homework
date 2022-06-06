window.onload = function(){
  var ifor, level, levelCheck, total, totalCheck, tax, rate, valid, qualityCheck;
  total = prompt("Enter the total for the meal: ");
  totalCheck = totalYN(total);
  if(totalCheck){






    level = prompt("Enter the service quality you received today. Either Good, Okay, or Poor.");
    qualityCheck = gradeCheck;
    if (qualityCheck){


      levelCheck = prompt("Please re-enter the quality.");
      ifor = check(level, levelCheck);
      if (ifor){
        tax = taxAmount(level);
        final = (total, tax) => {return total * tax};
        window.alert("The tax on your meal is: $"+final(total, tax)+".  The meal total is: $"+ total+ " given the quality of "+level);
      }
      else
      {
        window.alert("The quality you entered was not valid. Try again.");
      }
    }
    else window.alert("Error with quality keyword. try again");
  }
  else window.alert("The total you entered is not valid.");
}
function totalYN(price){
  if(price<500 && price>5){
    return true;
  }
  else return false;
}
function gradeCheck(grade){
  if(['good', 'okay', 'poor'].includes(grade)){
    return true;
  }
  else return false;
}
function check(a, b){
  if (a == b){
    return true;
  }
  else {
    return false;
  }
}
function taxAmount(grade){
  if (grade == "good"){
    return 0.20;
  }
  else if(grade == "okay"){
    return 0.15;
  }
  else if (grade == "poor"){
    return 0.10;
  }
  else window.alert ("Error");
}
