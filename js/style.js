document.getElementById('donate').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = document.getElementById('input').value;
    const addMoneyNumber = parseFloat(addMoney);

    if (!isNaN(addMoney) && addMoney > 0) {

        const balance2 = document.getElementById('first').innerText;
        const balanceNumber2 = parseFloat(balance2);

        const newMoney = addMoneyNumber + balanceNumber2;

        document.getElementById('first').innerText = newMoney;

        const balance = document.getElementById('account').innerText;
        const balanceNumber = parseFloat(balance);

        const result = balanceNumber - addMoneyNumber;
        document.getElementById('account').innerText = result;

    }

    else {
        alert('You do not Donate here')
    }

})




document.getElementById('donate2').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = document.getElementById('input2').value;
    const addMoneyNumber = parseFloat(addMoney);

    if (!isNaN(addMoney) && addMoney > 0) {

        const balance2 = document.getElementById('first2').innerText;
        const balanceNumber2 = parseFloat(balance2);

        const newMoney = addMoneyNumber + balanceNumber2;
        document.getElementById('first2').innerText = newMoney;

        const balance = document.getElementById('account').innerText;
        const balanceNumber = parseFloat(balance);

        const result = balanceNumber - addMoneyNumber;
        document.getElementById('account').innerText = result;

    }

    else {
        alert('You do not Donate here')
    }

})





document.getElementById('donate3').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input3').value;
    const addMoneyNumber = parseFloat(addMoney);

    if (!isNaN(addMoney) && addMoney > 0) {

        


        const balance2 = document.getElementById('first3').innerText;
        const balanceNumber2 = parseFloat(balance2);


        const newMoney = addMoneyNumber + balanceNumber2;

        document.getElementById('first3').innerText = newMoney;


        const balance = document.getElementById('account').innerText;
        const balanceNumber = parseFloat(balance);

        const result = balanceNumber - addMoneyNumber;

        document.getElementById('account').innerText = result;



    }


    else {
        alert('You do not Donate here')
    }



})
