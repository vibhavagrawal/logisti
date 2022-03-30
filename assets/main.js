function nationalFormSubmit() {
    let form = document.getElementById("nationalForm");
    let msg = document.getElementById("nationalMessage");
  
    // let category = form.cat.value;
    let pincode = form.pincode.value
    let weight = form.weight.value;

  
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
  
    


    form.price.value = displayPrice

    msg.innerHTML = `on this pincode ${pincode} goods will deliver in 3-4 days.`

  
  
  }




  function internationalFormSubmit() {
    let form = document.getElementById("internationalForm");
    let msg = document.getElementById("internationalMessage");

    let pincode = form.pincode.value
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




    form.price.value = displayPrice

    msg.innerHTML = `on this pincode ${pincode} goods will deliver in 7-9 days.`
  
  }

// alert('hi')