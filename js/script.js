let expenseLocation;
let expenseDate;
let expenseAmount;
let newTotal = 0;
let expenseDetails = [];
let madeData = document.getElementById('madeData');

function addExpense() {
    expenseDate = document.getElementById('date').value;
    expenseLocation = document.getElementById('expenseName').value;
    expenseAmount = document.getElementById('amount').value;
    if ((expenseAmount == '', expenseDate == '', expenseLocation == '')) {
        alert('Please add something');
    } else if (expenseAmount == '') {
        alert('add an amount');
    } else if (expenseDate == '') {
        alert('pick a date');
    } else if (expenseLocation == '') {
        alert('put a location');
    } else {
        let html = ' ';

        console.table(expenseDetails);

        function getTotal() {
            if (expenseAmount != newTotal) {
                newTotal = Number(newTotal) + Number(expenseAmount);
            }
        }
        getTotal();
        expenseDetails.push([
            `${expenseLocation}`,
            `${expenseDate}`,
            `${expenseAmount}`,
            `${newTotal}`,
        ]);
        expenseDetails.forEach(myFunc);

        function myFunc(text, index) {
            html += `
             <tr class="table-light" >
         <td scope="row" id="inputDataA">${text[0]}</td>
                        <td id="inputDataB">${text[1]}</td>
                        <td id="inputDataC">${text[2]}.00</td>
                        <td id="inputDataC">${text[3]}.00</td>
                        <td>
                            <button class="btn btn-success" onclick="deleteBtn(${index})">
                  X
                </button></td> </tr>`;

            return;
        }
        madeData.innerHTML = html;

        document.getElementById('date').value = '';
        document.getElementById('expenseName').value = '';
        document.getElementById('amount').value = '';
    }

    return;
}

function deleteBtn(index) {
    let html = '';
    expenseDetails.splice(index, 1);

    expenseDetails.forEach(myFunc);

    function myFunc(text, index) {
        html += `
             <tr class="table-light" >
         <td scope="row" id="inputDataA">${text[0]}</td>
                        <td id="inputDataB">${text[1]}</td>
                        <td id="inputDataC">${text[2]}.00</td>
                         <td id="inputDataC">${text[3]}.00</td>
                        <td>
                            <button class="btn btn-success" onclick="deleteBtn()">
                  X
                </button></td> </tr>`;

        return index;
    }
    madeData.innerHTML = html;
}