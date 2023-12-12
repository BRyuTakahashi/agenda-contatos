const form = document.getElementById('form');
const nameArray = [];
const numberArray = [];
let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLine();
    updateTable();
});

function addLine() {
    const inputName = document.getElementById('contact-name');
    const inputNumber = document.getElementById('contact-number');

    if(numberArray.includes(inputNumber.value)) {
        alert(`O número ${inputNumber.value} do contato ${inputName.value} já foi inseirdo`);
    } else {
        console.log(inputName.value)
        console.log(inputNumber.value)
        numberArray.push(inputNumber.value);

        let line = '<tr>';
        line += `<td>${inputName.value}</td>`;
        line += `<td>${inputNumber.value}</td>`;
        line += '</tr>';

        lines += line;
    }

    inputName.value = '';
    inputNumber.value = '';
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}