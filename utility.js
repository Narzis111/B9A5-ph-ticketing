let count = 0;
// 1. sob btn class ke pawar jonno
const allBtn = document.getElementsByClassName("add-btn");
// 2. for loop sob btn a access korar jonno
for (const btn of allBtn) {
  //3. btn a addeventlistener dibo. btn click holei sob kaj hobe
  btn.addEventListener("click", function handleSelect(event) {
  //4. cart er jonno upore count initialize kore nibo & count+=1 dibo
  //  and new function nibo loop er baire but setinnertext a cart-count a id,value dibo loop er shesh dike
  //  
  count += 1;
// 11-A. budget dhorte hobe ekhane
    const budget = getValue("budget");
// 5. place & price add korbo tai
    const placeName = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
  // 11-B. budget dhorte hobe ekhanei
    if (budget - parseInt(price) < 0) {
      alert("Low Budget Plz Earn Moeny");
      return;
    }
// 8.ul er moddhe chhilo. okhane value bosabo tai appenedchild korar jonno dhorbo
    // name+price. li ke css a flex kora aase.er moddhe 2ta p nibo 
    const selectedContainer = document.getElementById("selected-place-container");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = placeName;

    const p2 = document.createElement("p");
    p2.innerText = price;

    li.appendChild(p);
    li.appendChild(p2);
    selectedContainer.appendChild(li);
// 9-A. for loop er moddhe call korbo function totalPrice(id, value)
    totalPrice("total-cost", price);
// last step a click korle gray hobe & ekta button 2 bar click hobe na
    event.target.parentNode.parentNode.style.backgroundColor = "gray";
    event.target.setAttribute("disabled", true);
    setInnerText("budget", budget - parseInt(price));
// 7. set inner text set korar jonno
    setInnerText("cart-count", count);
  });
}

// 9. total price er function. para id=total-cost r value=price jeta const a dhorsi
// 9-A. for loop er moddhe call korbo
function totalPrice(id, value) {
  const totalCost = document.getElementById("total-cost").innerText;
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById("total-cost").innerText = total;
   // grandtotal call korbo total er moddhe
  grandTotal("other");
}
// 10. grandtotal function
function grandTotal(category) {
  console.log(category);
  // almost total-cost tai getvalue diye value ta dhorbo convertTotal diye
  // grandtotal call korbo total er moddhe 
  const convertTotal = getValue("total-cost");
  if (category == "bus") {
    setInnerText("grand-total", convertTotal + 100);
  } else if (category == "train") {
    setInnerText("grand-total", convertTotal - 200);
  } else if (category == "flight") {
    setInnerText("grand-total", convertTotal + 500);
  } else {
    setInnerText("grand-total", convertTotal);
  }
}
//11. budget dhorte hobe li appenend korar aagei
function getValue(id) {
  const budgetInnerText = document.getElementById(id).innerText;
  const budget = parseInt(budgetInnerText);
  return budget;
}
//6. inner text set korar jonno
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
// ================================================

const cards = document.querySelectorAll(".card");
// 1  .card dite hobe class name er aage. query diye sob card nodelist (array type) chole asbe
// for loop nibo sobgula access korar jonno
let titleCount = 1;
let totalPrice = 0;
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(card) dile sob card list asbe loop kore
    card.addEventListener("click", function(){
        // get the title h3
        const title = card.querySelector("h3").innerText;
        // const price = card.querySelector("span").innerText;
        // title & price rakhbo hr er pore title-container a. so title-container ke dhorbo
        const titleContainer = document.getElementById("title-container");
        // p tag nibo r titleContainer a rakhbo appendchild diye
        const p = document.createElement("p");
        p.innerText = titleCount + ". " + title; 
        // appendchild a 1. 2. dewar jonno uporer ta (titleCount)
        titleContainer.appendChild(p);
        titleCount++;
        // price access
        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);
        // calculate price
        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
        // input a discount dite hole apply button a addeventlistener dibo

    });
}


const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function(){
// get the value from input
const couponElement = document.getElementById("input-field").value;
const couponCode = couponElement.split(" ").join("").toUpperCase();
if (totalPrice >= 200){
    if (couponCode === "SELL200"){
        const discountElement = document.getElementById("discountPrice");
        const discountAmount = totalPrice * 0.2;
        discountElement.innerText = discountAmount.toFixed(2);
    
    // rest total calculation
    const restTotal = document.getElementById("total");
    restTotal.innerText = totalPrice - discountAmount.toFixed(2);
    document.getElementById("input-field").value = " ";
    // input field clear korar jonno
}
else{
    alart ("Invalid Coupon");
    document.getElementById("input-field").value = " ";

}
}
else{
    alert ("Plz buy at least $200");
    document.getElementById("input-field").value = " ";
}

});