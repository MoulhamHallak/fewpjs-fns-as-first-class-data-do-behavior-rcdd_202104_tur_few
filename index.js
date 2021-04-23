/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
// const time = parseInt(timeString);
const sHours = timeString.split(':')[0];
const sMinutes = timeString.split(':')[1];
let greetSen;
/* Write your implementation of greet() */
function greet(sHours){
  if(sHours < "12"){
    return "Good Morning";
  }else if (sHours > "17"){
    Good Evening"
    return "Good Afternoon";
  } else if (sHours > "17"){
    return "Good Evening";
  }
  return greetSen;
}

/* Write your implementation of displayMessage() */
let content = "greetSen"
function displayMessage(testContent){
  let greetcontent = document.getElementById("greeting").innerText
      expect(greetcontent).to.equal(content);
}
