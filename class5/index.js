// Generate Heading + Paragraph
const generateTagBtn = document.getElementById("generateTag");
const tagOutput = document.getElementById("tagOutput");

generateTagBtn.addEventListener('click', function () {

    tagOutput.innerHTML = ""; // clear old content

    const h1Tag = document.createElement("h1");
    h1Tag.textContent = "This is generated heading using JavaScript";
    h1Tag.classList.add("generated-box");

    const pTag = document.createElement("p");
    pTag.textContent = "This is a paragraph generated using JavaScript";
    pTag.classList.add("generated-box");

    tagOutput.appendChild(h1Tag);
    tagOutput.appendChild(pTag);
});


// Generate Table
const inputNumber = document.getElementById("inputNumber");
const generateTable = document.getElementById('generateTable');
const tableOutput = document.getElementById('tableOutput');

generateTable.addEventListener('click', function () {

    tableOutput.innerHTML = "";

    const userValue = Number(inputNumber.value);

    const container = document.createElement('div');
    container.classList.add("generated-box");

    for (let i = 1; i <= 10; i++) {
        const result = userValue * i;

        const p = document.createElement('p');
        p.textContent = `User Value: ${userValue} x ${i} = ${result}`;

        container.appendChild(p);
    }

    tableOutput.appendChild(container);
});


const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addUserBtn = document.getElementById("addUser");
const userTableBody = document.querySelector("#userTable tbody");

addUserBtn.addEventListener("click", function () {

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all fields");
        return;
    }

    // Create row
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = name;

    const tdEmail = document.createElement("td");
    tdEmail.textContent = email;

    const tdPhone = document.createElement("td");
    tdPhone.textContent = phone;

    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);

    userTableBody.appendChild(tr);

    // Clear inputs
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
});

const itemName = document.getElementById("itemName");
const listItem = document.getElementById("itemList");
const addItems = document.getElementById("addItem");

const items = [];

addItems.addEventListener('click', function () {
    const name = itemName.value;

    if (name === "") {
        alert("Enter Item Name");
        return;
    }

    items.push(name);
    generateList();
    itemName.value = "";
});

function generateList() {
    listItem.innerHTML = "";

    for (let i = 0; i < items.length; i++) {

        const li = document.createElement('li');
        li.textContent = items[i];

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        // Delete logic
        deleteBtn.addEventListener("click", function () {
            // items.splice(i, 1);
            const newArr = items.filter((item,index)=>{
                console.log(items[i] == item);
                console.log(items[i],item);
                if(items[i] == item)
                {
                    return false;
                } else {
                    return true;
                }
            });

            items.length = 0;
            items.push(...newArr);
            generateList(); 
        });

        li.appendChild(deleteBtn);
        listItem.appendChild(li);
    }
}