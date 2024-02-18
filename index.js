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

    totalPrice("total-cost", price);
    grandPrice("grand-total", price);
    
  
     
    setInnerText("ticket-count", count);
    setInnerText("seat-left", totalSeat);


    
  });
}

let totalCost = 0;
function totalPrice(id, value) {
  const totalCost = document.getElementById("total-cost").innerText;
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById("total-cost").innerText = total;
 
}

function grandPrice(id, value) {
  const totalCost = document.getElementById("grand-total").innerText;
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById("grand-total").innerText = total;
 
}
const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function(){
// get the value from input
const couponCode = document.getElementById("input-field").value;
const convertTotal = getValue("total-cost");
const convertTotal1 = convertTotal - convertTotal * 0.15 ;
const convertTotal2 = convertTotal - convertTotal * 0.20 ;
if (totalCost > 0){
    if (couponCode === "NEW15"){
        setInnerText("grand-total", convertTotal1);
      } else if (couponCode === "Coupon 20") {
        setInnerText("grand-total", convertTotal2);
      } else {
        setInnerText("grand-total", convertTotal);
      }}
  else { alert ("Plz select atleast one ticket")}
    });




function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}