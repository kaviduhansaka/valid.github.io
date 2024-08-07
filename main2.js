

document.getElementById("checkout-btn").addEventListener("click", function() {
    // Retrieve values from input fields
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const dateInput = document.getElementById("date-input").value;
    const zipCode = document.getElementById("zip-code").value;
    const nameOnCard = document.getElementById("name-on-card").value;
    const cardNumber = document.getElementById("card-number").value;
    const expMonth = document.getElementById("exp-month").value;
    const expYear = document.getElementById("exp-year").value;
    const cvv = document.getElementById("cvv").value;
    
    if (!fullName || !email || !address || !city || !dateInput || !zipCode || !nameOnCard || !cardNumber || !expMonth || !expYear || !cvv) {
        alert("All fields must be filled out.");
        return;
    }
    
    
    const date = new Date(dateInput);
    
    date.setDate(date.getDate() + 20);
    

    const newDate = date.toISOString().split('T')[0];
    
   
    console.log(`Your items will be delivered on: ${newDate}`);
    
  
    alert(`Thankyou for your purchase .. Your items will be delivered on or before ${newDate}`);
});
