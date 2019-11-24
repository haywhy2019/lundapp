//variables

const shirt = document.getElementById("shirts");

const trousers = document.getElementById("trousers");

const jacket = document.getElementById("jacket");

const others = document.getElementById("others");

const button = document.getElementById("button");

const display = document.getElementById("show");

const name = document.getElementById("name");
const telephone = document.getElementById("telephone");

const displayAmount = document.getElementById("totalPrice");

// eventlisterner

button.onclick = e => {
  e.preventDefault(e);
  let shirtValue = shirt.value;
  let trousersValue = trousers.value;
  let jacketValue = jacket.value;
  let othersValue = others.value;
  let nameValue = name.value;
  let telephoneValue = telephone.value;

  display.innerHTML = "";
  displayAmount.innerHTML = "";
  // console.log(shirtValue);
  // console.log(trousersValue);
  // console.log(othersValue);
  // console.log(jacketValue);
  if (
    shirtValue === "" &&
    trousersValue === "" &&
    othersValue === "" &&
    jacketValue === "" &&
    nameValue === "" &&
    telephoneValue === ""
  ) {
    // cound not find a way to make it change on load -display.innerHTML = 'please select quantity'
    window.alert("Please Select Quantity and input information");
    //outputs to ui
  
  } else if (
    shirtValue > 0 &&
    trousersValue > 0 &&
    othersValue > 0 &&
    jacketValue > 0 &&
    nameValue !== "" &&
    telephoneValue !== ""
  ) {
    //ui display
    display.innerHTML = `
                     <div class= " flex">
                     <div class="box1">
                        <img class="displayimage" src ="/images/shirt.png">
                        
                        
                         <img class="displayimage" src ="/images/jacket.png">
                        </div>
                        <div class= "box3">
                        <img class="displayimage" src ="/images/socks.png">
                     
                        <img class="displayimage" src ="/images/trousers.png">
                       </div>
                    </div>`;
  } else {
    if (shirtValue > 0) {
      display.innerHTML += ` <div>
                             <img class=" card displayimagei" src ="/images/shirt.png">
                            </div>`;
    }
    if (trousersValue > 0) {
      display.innerHTML += ` <div>
                            <img class="card displayimagei" src ="/images/trousers.png">
                            </div>`;
    }
    if (jacketValue > 0) {
      display.innerHTML += ` <div >
                             <img class="card displayimagei" src ="/images/jacket.png">
                            </div>`;
    }
    if (othersValue > 0) {
      display.innerHTML += ` <div>
                             <img class="card displayimagei" src ="/images/socks.png">
                            </div>`;
    }

    //price per cost
    const prices = {
      shirtPrice: 200,
      trousersPrice: 300,
      jacketPrice: 400,
      othersPrice: 100
    };

    // price multiplied by quantity
    const totalShirt = shirtValue * prices.shirtPrice;
    const totalTrousers = trousersValue * prices.trousersPrice;
    const totalJacket = jacketValue * prices.jacketPrice;
    const totalOthers = othersValue * prices.othersPrice;

    console.log(totalShirt);
    console.log(prices.shirtPrice);
    console.log(shirtValue);

    console.log(totalTrousers);
    console.log(prices.trousersPrice);
    console.log(trousersValue);

    console.log(totalJacket);
    console.log(prices.jacketPrice);
    console.log(jacketValue);

    //total price

    const totalPrice = totalJacket + totalOthers + totalShirt + totalTrousers;
    displayAmount.innerHTML = `
                           <div class="card output">
                           <div><h3>Name: ${nameValue}</h3><h3> Phone Number: ${telephoneValue}</h3></div>
                          <div><h3>Shirt Quantity: ${shirtValue} x N${prices.shirtPrice} = N${totalShirt}</h3></div>
                           <div><h3>Trousers Quantity: ${trousersValue} x N${prices.trousersPrice} = N${totalTrousers} </h3></div>
                            <div> <h3>Jacket Quantity: ${jacketValue} x N${prices.jacketPrice} = N${totalJacket} </h3></div>
                           <div><h3>Others Quantity: ${othersValue}  x N${prices.othersPrice} = N${totalOthers}</h3> </div>
                            <div class='total'><h3>TOTAL CHARGE: N${totalPrice}</h3> </div>
                            </div>`
                           ;
    console.log(totalPrice);
  }
};
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// function myFunction() {
//   document.getElementById("field2").value = document.getElementById("form");
// }
