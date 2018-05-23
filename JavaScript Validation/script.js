//Global variables//

const fullName = document.querySelector("#fullname");
const phoneNumber = document.querySelector("#phone");
const emailOne = document.querySelector("#email");
const emailTwo = document.querySelector("#email2")
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");
const link = document.querySelector("#link");
const form =document.querySelector("form");


//Functions for validating all inputs//

fullname.addEventListener('input', e => {	
	value = e.target.value;
	const regexFullname = /[a-zA-Z\-'\s]+/;
	if (regexFullname.test(e.target.value)) {
		e.target.classList.remove('invalid');
	}
	else
	{
		e.target.classList.add('invalid');
	}
});


phoneNumber.addEventListener('input', e => {
    value = e.target.value;
    const regexphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regexphone.test(e.target.value)){
        e.target.classList.remove('invalid');
    }
    else
    {
        e.target.classList.add('invalid');
    }
});


emailOne.addEventListener('input', e => {
    value = e.target.value;
    const regexemail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regexemail.test(e.target.value)){
        e.target.classList.remove('invalid');
    }
    else
    {
        e.target.classList.add('invalid');
    }
});


emailTwo.addEventListener('input', e => {
    value = e.target.value;
    const regexemail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regexemail.test(e.target.value)){
        e.target.classList.remove('invalid');
    }
    else
    {
        e.target.classList.add('invalid');
    }
});

address.addEventListener('input', e => {
    value = e.target.value;
    const regexaddress = /[a-zA-Z\-'\s]+/;
    if (regexaddress.test(e.target.value)){
        e.target.classList.remove('invalid');
    }
    else
    {
        e.target.classList.add('invalid');
    }
});

city.addEventListener('input', e => {
    value = e.target.value;
    const regexcity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (regexcity.test(e.target.value)){
        e.target.classList.remove('invalid');
    }
    else
    {
        e.target.classList.add('invalid');
    }
});


country.addEventListener('input', e => {
    value = e.target.value;
    const regexcountry = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (regexcountry.test(e.target.value)){
        e.target.classList.remove('invalid');
    }
    else
    {
        e.target.classList.add('invalid');
    }
});


postal.addEventListener('input', e => {
    value = e.target.value;
    const regexpostal = /^[0-9]{5}(-[0-9]{4})?$/;
    if (regexpostal.test(e.target.value)){
        e.target.classList.remove('invalid');
    }
    else
    {
        e.target.classList.add('invalid');
    }
});


link.addEventListener('input', e => {
    value = e.target.value;
    const regexlink = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if (regexlink.test(e.target.value)){
        e.target.classList.remove('invalid');
    }
    else
    {
        e.target.classList.add('invalid');
    }
});

//Function for validing checkboxes//


 /*  function ValidateForm(form){
    
    if ( ( form.experience1.checked == true ) && ( form.experience2.checked == true ) && ( form.experience3.checked == true)) 
    {
    alert ( "Please choose atleast one checkbox" ); 
    return false;
    }};
 */


    document.getElementById("submitButton").addEventListener("click", function(event){
    
        if ( ( form.experience1.checked == false  ) && ( form.experience2.checked == false ) && ( form.experience3.checked == false))
        {
            alert ( "Please choose atleast one checkbox from both of the list" ); 
        }
                else
                {
       
         alert ("Form submitted")
                }
    });

    

  // function formSubmit() {
     //   alert("The form was submitted");
   // }

 /*   {
            function validateForm(){
                var x = document.forms["myForm"].value;
                if ( x == "" ){
                    alert("Please fill the form");
                    return false;
                } */