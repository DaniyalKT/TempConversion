let $ = document;

let tempHeader = $.querySelector("#tempHeader");
let tempBox = $.querySelector("#tempBox");
let masssageAlert = $.getElementById("massage");
let response = $.getElementById("response");

let changeBtn = $.querySelector("#change");
let resetBtn = $.querySelector("#reset");
let convert = $.querySelector("#convert");

let changeFlag = false;

//Change BTN function
changeBtn.addEventListener("click", function () {
  if (!changeFlag) {
    tempHeader.innerHTML = "Converter °C to °F";
    $.title = "Temp | °C to °F";
    tempBox.setAttribute("placeholder", "°C");
    changeFlag = true;
  } else {
    tempHeader.innerHTML = "Converter °F to °C";
    $.title = "Temp | °F to °C";
    tempBox.setAttribute("placeholder", "°F");
    changeFlag = false;
  }
});

//Reset BTN function
resetBtn.addEventListener("click", function () {
  tempBox.value = "";
  masssageAlert.style.display = "none";
  response.style.display = "none";
});

//Convert BTN function
convert.addEventListener("click", function () {
  let inputValue = Number(tempBox.value);
debugger
  if (inputValue == 0 || inputValue == null || inputValue == " ") {
    masssageAlert.style.display = "flex";
    masssageAlert.innerHTML = "Write a value !";
    response.style.display = "none";
  } else if (isNaN(inputValue)) {
    masssageAlert.style.display = "flex";
    masssageAlert.innerHTML = "Wrong value !";
    response.style.display = "none";
  } else if (tempBox.placeholder == "°C") {
    let Celsius = (inputValue * 9) / 5 + 32;
    response.style.display = "flex";
    masssageAlert.style.display = "none";
    response.innerHTML = inputValue + "°C to " + Celsius.toFixed(2) + "°F";
  } else if (tempBox.placeholder == "°F") {
    let Fahrenheit = ((inputValue - 32) * 5) / 9;
    response.style.display = "flex";
    masssageAlert.style.display = "none";
    response.innerHTML = inputValue + "°F to " + Fahrenheit.toFixed(2) + "°C";
  }
});
