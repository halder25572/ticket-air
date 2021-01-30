// This JS Code:
function handlePriceChange(price,isTotalIncrease) {
    const ticketInput = document.getElementById(price + '-count');
    const ticketCount = parseInt(ticketInput.value);

    let ticketNewCount = ticketCount;
    if (isTotalIncrease == true) {
        ticketNewCount = ticketCount + 1;
    } else if (isTotalIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    ticketInput.value = ticketNewCount;
    let ticketTotal = 0;
    if(price == 'firstClass'){
        ticketTotal = ticketNewCount * 150;
        document.getElementById(price+ '-total').innerText = 'First Class $' + ticketTotal;
    } else if(price == 'case'){
        ticketTotal = ticketNewCount * 100;
        document.getElementById(price+ '-total').innerText = 'Economy $' + ticketTotal;
    }

    // document.getElementById(price + '-total').innerText = '$' + ticketTotal;
    calculateTotal()
}

// The code is for Bottom all total
function calculateTotal(){
    const phoneInput = document.getElementById('firstClass-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    const totalPrice = phoneCount * 150 + caseCount * 100;
    document.getElementById('total-price').innerText = '$' +totalPrice;

    const tax = totalPrice * 0.1;
    document.getElementById('tax-amount').innerText = '$' +totalPrice;

    const allTotal = totalPrice + tax;
    document.getElementById('all-total').innerText = '$' +allTotal;
}


// This JS is Button
function myFunction() {
    alert("Congratulation Your Order is Submitted");
  }

// // This JS Code is for Economy;
// function newFunction(isTotalIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isTotalIncrease == true) {
//         caseNewCount = caseCount + 1;
//     } else if (isTotalIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 100;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
//     calculateTotal()
// }

// // This JS Code is for First Class
// function firstClass(isTotalEquals) {
//     const caseInput = document.getElementById('firstClass-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isTotalEquals == true) {
//         caseNewCount = caseCount + 1;
//     } else if (isTotalEquals == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 150;
//     document.getElementById('firstClass-total').innerText = '$' + caseTotal;
//     calculateTotal()
// }


