/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
const time = parseInt(timeString);
// const sHours = timeString.split(':');
// const sMinutes = timeString.split(':')[1];
// let greetSen;
/* Write your implementation of greet() */
function greet(time){
  if(time < "12"){
    return "Good Morning";
  }else if (time > "17"){
    return "Good Evening";
  } else{
    return "Good Afternoon";
  }
  // return greetSen;
}

/* Write your implementation of displayMessage() */
let content = "greetSen"
function displayMessage(testContent){
  let greetcontent = document.getElementById("greeting").innerText
      expect(greetcontent).to.equal(content);
}
