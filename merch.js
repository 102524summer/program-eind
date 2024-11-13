
function calculatePrice() {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let album = document.getElementById('album').checked;
    let tickets = parseInt(document.getElementById('tickets').value);

    let albumPrice = 15.99;
    let ticketPrice = 50;

    let total = 0;
    if (album) total += albumPrice;
    total += tickets * ticketPrice;

    let discount = 0;
    if (album && tickets > 0) {
        discount = 0.10;
        total = total * (1 - discount);
    }

    let orderSummary = document.getElementById('orderSummary');
    let customerDetails = document.getElementById('orderName');
    let orderDetails = document.getElementById('orderDetails');
    let totalPrice = document.getElementById('totalPrice');

    customerDetails.textContent = name;

    let orderText = `Besteld: `;
    if (album) orderText += `Liberté Orange Album (€${albumPrice.toFixed(2)}), `;
    if (tickets > 0) orderText += `${tickets} Concertticket(s) (€${ticketPrice * tickets})`;

    orderDetails.textContent = orderText;

    if (discount > 0) {
        totalPrice.innerHTML = `Totaal (10% Korting Toegepast): <strong>€${total.toFixed(2)}</strong>`;
    } else {
        totalPrice.innerHTML = `Totaal: <strong>€${total.toFixed(2)}</strong>`;
    }

    document.getElementById('orderForm').style.display = 'none';
    orderSummary.classList.remove('hidden');
    orderSummary.style.animation = 'fadeIn 1s ease-in-out';
}


function goBack() {
    document.getElementById('orderForm').reset();
    document.getElementById('orderSummary').classList.add('hidden');
    document.getElementById('orderForm').style.display = 'block';
}


window.onload = function() {
    
    const glitchElements = document.querySelectorAll('.glitch');
    setInterval(() => {
        glitchElements.forEach((element) => {
            element.classList.toggle('glitch');
        });
    }, 150);

 
    const flickerElements = document.querySelectorAll('.flicker');
    setInterval(() => {
        flickerElements.forEach((element) => {
            element.classList.toggle('flicker');
        });
    }, 300);
};
