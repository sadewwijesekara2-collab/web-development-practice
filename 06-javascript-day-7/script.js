let verifyButton = document.querySelector("#verify_button");
let registerButton = document.querySelector("#submit_button");
registerButton.disabled = true;

let fullName = document.querySelector("#fname");
let eMail = document.querySelector("#e-mail");
let phoneNumber = document.querySelector("#phone_number");
let ticketType = document.querySelector("#ticket_type");
let quantity = document.querySelector("#quantity");

let nameError = document.querySelector("#error-msg-name");
let emailError = document.querySelector("#error-msg-email");
let phoneError = document.querySelector("#error-msg-phone");
let ticketError = document.querySelector("#error-msg-ticket");
let quantityError = document.querySelector("#error-msg-qty");
let bookingDetails = document.querySelector(".booking_summery");

verifyButton.addEventListener("click",function(e){
    e.preventDefault();
    bookingDetails.innerHTML = "";

    let name = fullName.value.trim();
    let email = eMail.value.trim();
    let phonenum = phoneNumber.value.trim();
    let ticket = ticketType.value.trim();
    let qty = quantity.value.trim();
    let ticketPrice;
    let total = 0;
    let finalTotal = 0;
    let discount;
    let phoneNumValid = false;
    let quantityValid = false;

    if(name == ""){   
        nameError.textContent = '*fill the name ' ;
    }else{
        nameError.textContent = '' ;
    }
    if(email == ""){
        emailError.textContent = `*fill the e-mail ` ;
    }else{
        emailError.textContent = '' ;
    }
    if(phonenum == ""){
        phoneError.textContent = `*fill the phone number ` ;
    }else if(!(/^[0-9]{10}$/.test(phonenum))){
        phoneError.textContent = `*enter valid phone number ` ;
    }else{
        phoneError.textContent = '' ;
        phoneNumValid = true;
    }
    if(ticket == ""){
        ticketError.textContent = `*select a ticket type ` ;
    }else{
        ticketError.textContent = `` ;
    }
    if (qty == "") {
        quantityError.textContent = `*fill the quantity`;
    }else if (
        !Number.isInteger(Number(qty)) ||
        Number(qty) < 1 ||
        Number(qty) > 10) {
        quantityError.textContent = `*enter a whole number between 1 and 10`;
    }else {
        quantityError.textContent = ``;
        quantityValid = true;
    }
    
    if(ticket != "" && qty != ""){
        switch(ticket){
            case "student" : {
                ticketPrice = 300;
                break;
            }
            case "regular" : {
                ticketPrice = 600;
                break;
            }
            case "vip" :  {
                ticketPrice = 1000;
                break;
            }
            default : {
                // ticketPrice = 0;
                break;
            }
        }


        
        if (qty >= 5 ){
            total = (ticketPrice * qty);
            discount = (total/10);
            finalTotal = total - discount;
        }else{
            discount = 0 ;
            total = (ticketPrice * qty);
            finalTotal = total;
        }
        
    }


    
    if(name != "" && email != "" && phoneNumValid && ticket != "" && quantityValid){
        registerButton.disabled = false;
        bookingDetails.innerHTML= `
            <fieldset style = "width: 80%; max-width: 1100px; border : 1px solid ; padding : 0.5rem; border-radius: 5px; box-sizing: border-box;">
                <legend>Booking Summery</legend>
                <p>
                    Hello ${name}!<br>
                    E-Mail : ${email}<br>
                    Phone Number : ${phonenum}<br>
                    Ticket Type : ${ticket}<br>
                    Ticket Price : Rs.${ticketPrice}.00<br>
                    Quantity : ${qty}<br>
                    Sub Total : Rs.${total}.00<br>
                    Discount : Rs.${discount}.00<br><br>
                </p>
                <h2>Final Total : Rs.${finalTotal}.00</h2><br>
                    
            </fieldset>`
            
        ;

    }
     
    
    

})