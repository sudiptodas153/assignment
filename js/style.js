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



        const historyItem = document.createElement('div')
        historyItem.className = 'bg-white p-4 rounded-md border-2 border-gray-200';

        historyItem.innerHTML = `
        
<p class="text-xl font-bold mb-4">${addMoneyNumber} Taka is Donated for flood at Noakhali, Bangladesh</p>
<p>Date: ${new Date().toLocaleDateString()}</p>



        `;



        const historyContainer = document.getElementById('added')

        historyContainer.appendChild(historyItem);



        alert('Donate Successful')






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






        const historyItem = document.createElement('div')
        historyItem.className = 'bg-white p-4 rounded-md border-2 border-gray-200';

        historyItem.innerHTML = `
        
<p class="text-xl mb-4 font-bold">${addMoneyNumber} Taka is Donated for Flood Relief in Feni, Bangladesh</p>

<p>Date: ${new Date().toLocaleDateString()}</p>


        `;



        const historyContainer = document.getElementById('added')

        historyContainer.appendChild(historyItem)


        alert('Donate Successful')

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




        const historyItem = document.createElement('div')
        historyItem.className = 'bg-white p-4 rounded-md border-2 border-gray-200';

        historyItem.innerHTML = `
        
<p class="text-xl mb-4 font-bold">${addMoneyNumber} Taka is Donated for Injured in the Quota Movement, Bangladesh</p>
<p>Date: ${new Date().toLocaleDateString()}</p>



        `;



        const historyContainer = document.getElementById('added')

        historyContainer.appendChild(historyItem)


        alert('Donate Successful')

    }


    else {
        alert('You do not Donate here')
    }



})












const historyPart = document.getElementById('history');
const donationPart = document.getElementById('donation');

historyPart.addEventListener('click', function () {

    historyPart.classList.add('bg-lime-400');

    donationPart.classList.remove('bg-lime-400')

    document.getElementById('newpage').classList.add('hidden')




})
historyPart.addEventListener('click', function () {

    historyPart.classList.add('bg-lime-400');

    donationPart.classList.remove('bg-lime-400')

    document.getElementById('newpage').classList.add('hidden')
    document.getElementById('removed').classList.remove('hidden')





})


donationPart.addEventListener('click', function () {

    historyPart.classList.remove('bg-lime-400');

    donationPart.classList.add('bg-lime-400')

    document.getElementById('newpage').classList.remove('hidden')

    document.getElementById('removed').classList.add('hidden')





})






