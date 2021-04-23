/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
// const sHours = timeString.split(':');
// const sMinutes = timeString.split(':')[1];
/* Write your implementation of greet() */
function greet(timeString){
  const time = parseInt(timeString);
  if(time < "12"){
    return "Good Morning";
  }else if (time > "17"){
    return "Good Evening";
  } else{
    return "Good Afternoon";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greetSen){
  let greetcontent = document.getElementById("greeting").innerText = greetSen;
}
