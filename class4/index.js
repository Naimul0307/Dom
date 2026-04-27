let userName = document.getElementById('name');
let passwordField = document.getElementById('password');

let showPassword = document.getElementById('toggleButton');
let submitdata = document.getElementById('submitButton');

let userList = document.getElementById('userList');


showPassword.addEventListener('click',changeType);

function changeType(){
    let currentStatus = passwordField.type;

    if(currentStatus == "text")
    {
        passwordField.type = "password";
        showPassword.textContent = "Show Password";
    } else{
        passwordField.type = "text";
        showPassword.textContent = "Hide Password";
    }
}

submitdata.addEventListener('click',userData);

function userData(event) {
    event.preventDefault();

    let nameValue = userName.value.trim();
    let passwordValue = passwordField.value.trim();

    if (nameValue === "" || passwordValue === "") {
        alert("Enter Your Data");
        return;
    }

    userList.innerHTML += `Name: ${nameValue} <br> Password: ${passwordValue}`;

    userName.value = "";
    passwordField.value = "";
}

let numberField = document.getElementById('number');
let submitResult = document.getElementById('result');

let checkButton = document.getElementById('checkButton');

function generateRendomNumber()
{
    let random = Math.random();
    let decimaleNumber = Math.floor(random*5) + 1;
    console.log("Generate Random Number:",random);
    console.log('Converte Number :', decimaleNumber);
    return decimaleNumber; 
}

function matchNumber(){
    let generateNumber = generateRendomNumber();
    let userNumber = numberField.value;
    let resultText = "";

    if(userNumber == generateNumber)
    {
        resultText = `You Win.<br>Generate Number Is ${generateNumber}.<br> Your Input Number Is ${userNumber}`;
    } else if(userNumber < generateNumber) {
        resultText = `Your Input Numer Is To Lower.<br>Generate Number Is ${generateNumber}.<br> Your Input Number Is ${userNumber}`;
    } else {
        resultText = `Your Input Numer Is To Higher.<br>Generate Number Is ${generateNumber}.<br> Your Input Number Is ${userNumber}`;
    }

    submitResult.innerHTML = resultText;

    console.log("Generate Number:", generateNumber);
    console.log("User Input Number:",userName);
}

checkButton.addEventListener('click',matchNumber);

let tempInput = document.getElementById('tempInput');
let convertType = document.getElementById('convertType');
let convertButton = document.getElementById('convertButton');
let tempResult = document.getElementById('tempResult');

convertButton.addEventListener('click', function () {
    let value = parseFloat(tempInput.value);

    if (isNaN(value)) {
        tempResult.textContent = "Please enter a valid number";
        return;
    }

    let result;

    if (convertType.value === "cToF") {
        result = (value * 9/5) + 32;
        tempResult.textContent = `${value}°C = ${result.toFixed(2)}°F`;
    } else {
        result = (value - 32) * 5/9;
        tempResult.textContent = `${value}°F = ${result.toFixed(2)}°C`;
    }
});
