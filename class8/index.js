const dropdown = document.querySelector(".dropdown");
const selected = document.querySelector(".dropdown-selected");
const options = document.querySelectorAll(".option");
const typeField = document.getElementById("type");

selected.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

options.forEach(option => {
  option.addEventListener("click", () => {
    selected.textContent = option.textContent;
    typeField.value = option.dataset.value;
    dropdown.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

const totalBalanceField = document.getElementById("balance");
const descriptionField = document.getElementById("text");
const amountField = document.getElementById("amount");
const addButton = document.querySelector(".btn");
const totalIncomeField = document.getElementById("money-plus");
const totalExpenseField = document.getElementById("money-minus");

let totalBalance = 0;
let totalIncome = 0;
let totalExpense = 0;
let transectionHistory = [];

class Expense {
  constructor(amount, description, type) {
    this.amount = amount;
    this.description = description;
    this.type = type;
  }
}


addButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const amount = Number(amountField.value);
    const description = descriptionField.value;
    const type = typeField.value;

    const newExpense = new Expense(amount, description, type);
    transectionHistory.push(newExpense);

    if(!description || !amount || !type){
        alert("Please fill in all fields.");
        return;
    }

    if(type === "income"){
        totalIncome += amount;
    } else if(type === "expense"){
        totalExpense += amount;
    }
    totalBalance = totalIncome - totalExpense;
    updateLocalStorage();
    updateDisplay();
    historyUi();
});

function updateLocalStorage(){
    localStorage.setItem("totalBalance", totalBalance);
    localStorage.setItem("totalIncome", totalIncome);
    localStorage.setItem("totalExpense", totalExpense);
    localStorage.setItem("transectionHistory", JSON.stringify(transectionHistory));
}

function updateDisplay(){
    let storedBalance = Number(localStorage.getItem("totalBalance"));
    let storedIncome = Number(localStorage.getItem("totalIncome"));
    let storedExpense = Number(localStorage.getItem("totalExpense"));

    if(
        storedBalance === null ||
        storedIncome === null ||
        storedExpense === null
    )
    {
        return;
    }

    totalBalance = storedBalance;
    totalIncome = storedIncome;
    totalExpense = storedExpense;
    
    totalBalanceField.textContent = `Ɖ ${storedBalance}`;
    totalIncomeField.textContent = `Ɖ ${storedIncome}`;
    totalExpenseField.textContent = `Ɖ ${storedExpense}`;
    clearForm();  
}

function historyUi(){
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
    const storedHistory = localStorage.getItem("transectionHistory");
    if(storedHistory === null){
        return;
    }

    transectionHistory = JSON.parse(storedHistory);

    const length = transectionHistory.length;

    for(let i = 0 ; i < length; i++){
        const listItem = document.createElement("li");
        const expenseObject = transectionHistory[i];
        const amount = expenseObject.amount;
        const description = expenseObject.description;
        const type = expenseObject.type;
        if(type === "income"){
            listItem.classList.add("plus");
        } else if(type === "expense"){
            listItem.classList.add("minus");
        }
        listItem.textContent = `${description}: Ɖ ${amount} (${type})`;
        historyList.appendChild(listItem);
    }

}

function clearForm(){
    descriptionField.value = "";
    amountField.value = "";
    selected.textContent = "Select Type";
    typeField.value = "";
}

updateDisplay();
historyUi();