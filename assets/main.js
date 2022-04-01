function nationalFormSubmit() {
    let form = document.getElementById("nationalForm");
    let msg = document.getElementById("nationalMessage");
  
    // let category = form.cat.value;
    // let pincode = form.pincode.value
    let pincode = document.getElementById("pincode-2").value  // aaded new line
    let weight = document.getElementById("weight-2").value  // aaded new line

    // let weight = form.weight.value;

  
    let displayPrice = 0;
  
 
    if( weight >0 && weight < 200){
        displayPrice = weight * 10;
    }
     else if (weight < 500 && weight >= 200) {
        displayPrice = weight * 50;
      } else if (weight < 1000 && weight >= 500) {
        displayPrice = weight * 500;
      } else if (weight < 2000 && weight >= 1000) {
        displayPrice = weight * 5000;
      }
  
      document.getElementById("cardONE").style.display="None";
      // document.getElementById("nationalForm").style.display="none";
      // added new line

      let hamara_msgg= document.getElementById("hamara-msgg");
      // hamara_msg.value="$ "+displayPrice
      // hamara_msgg.innerHTML="$ "+displayPrice + `<br><p>on this pincode ${pincode} goods will deliver in 3-4 days.</p>`
      hamara_msgg.innerHTML="$ "+displayPrice
    // form.price.value = displayPrice

    // msg.innerHTML = 

  
  
  }




  function internationalFormSubmit() {
    let form = document.getElementById("internationalForm");
    let msg = document.getElementById("internationalMessage");

    let pincode = document.getElementById("pincode-1").value  // aaded new line
    let weight = form.weight.value;
  
    // let category = form.cat.value;

  
    let displayPrice = 0;
  
  
    if( weight >0 && weight < 200){
        displayPrice = weight * 20;
    }
      if (weight < 500 && weight >= 200) {
        displayPrice = weight * 80;
      } else if (weight < 1000 && weight >= 800) {
        displayPrice = weight * 800;
      } else if (weight < 2000 && weight >= 1000) {
        displayPrice = weight * 8000;
      }


      document.getElementById("internationalForm").style.display="None"; // added new line
      let hamara_msg= document.getElementById("hamara-msg"); //added new line
      // hamara_msg.value="$ "+displayPrice
      hamara_msg.innerHTML="$ "+displayPrice + `<br><p>on this pincode ${pincode} goods will deliver in 7-9 days.</p>`

    // form.price.value = displayPrice
    // form.price.value = "$ "+displayPrice

    // msg.innerHTML = `on this pincode ${pincode} goods will deliver in 7-9 days.`
  
  }

// alert('hi')

function myFunction() {
  var x = document.getElementById("myDIV");
  // var y = document.getElementById("cardONE");
  x.style.display="none";
  // y.style.display="block"

  if (x.style.display === "none") {
    x.style.display = "block";
    // y.style.display="none"
  } else {
    x.style.display = "none";
    // y.style.display="block"
  }

}

function myyFunction() {
  var x = document.getElementById("myDIVV");
  // var y = document.getElementById("cardTWO");
  x.style.display="none";

  if (x.style.display === "none") {
    x.style.display = "block";
    // y.style.display="none"
  } else {
    x.style.display = "none";
    // y.style.display="block"
  }

}

document.getElementById("get-quote-first").addEventListener("click", myFunction);
document.getElementById("get-quote-second").addEventListener("click", myyFunction);