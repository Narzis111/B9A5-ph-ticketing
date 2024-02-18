let count = 0;
let totalSeat = 40;

const seats = document.getElementsByClassName("seat");

for (const seat of seats) {

  seat.addEventListener("click", function handleSelect(event) {
    count += 1;
    totalSeat -= 1;
    const ticketNumber = event.target.innerText;
    const ticketClass = "Economy";
    const price = 550;
    console.log("nodelist");
    const selectedContainer = document.getElementById("ticket-row-container");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = ticketNumber;

    const td1 = document.createElement("td");
    td1.innerText = ticketClass;
    const td2 = document.createElement("td");
    td2.innerText = price;
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);

    selectedContainer.appendChild(tr);
    event.target.style.backgroundColor = "green";
    event.target.setAttribute("disabled", true);
 
     
    setInnerText("ticket-count", count);
    setInnerText("seat-left", totalSeat);


    totalPrice("total-cost", price);
    
  });
}

let totalCost = 0;
function totalPrice(id, value) {
  const totalCost = document.getElementById("total-cost").innerText;
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById("total-cost").innerText = total;
 
}


const btn = document.getElementById("apply-btn");

btn.addEventListener("click", function(){

const couponCode = document.getElementById("input-field").value;

const convertTotal = getValue("total");

    if (couponCode === "NEW15"){
      setInnerText("grand-total", (convertTotal - (convertTotal * 0.15)));

    // const grandTotal = document.getElementById("total");
    // grandTotal.innerText = totalPrice - discountAmount.toFixed(2);
    
    // document.getElementById("input-field").value = " ";
    // input field clear korar jonno
}
else if (couponCode === "Couple 20"){
  setInnerText("grand-total", convertTotal - (convertTotal * 0.20));


}
else {
      setInnerText("grand-total", convertTotal);
    }
});


function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}