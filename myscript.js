// const form = document.getElementsByTagName('form')[0];


function handleSubmit() {
	// event.preventDefault();



    // document.getElementById("name").attributes["required"] = "";         
    // document.getElementById("email").attributes["required"] = "";         
    // document.getElementById("phone").attributes["required"] = "";         
    // document.getElementById("date").attributes["required"] = "";         
    // document.getElementById("time").attributes["required"] = "";         
    // document.getElementById("num_guests").attributes["required"] = "";         





      
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const date = document.getElementById('date').value;
	const time = document.getElementById('time').value;
	const numGuests = document.getElementById('num_guests').value;  
	
	console.log('Name:', name);
	console.log('Email:', email);
	console.log('Phone:', phone);
	console.log('Date:', date);
	console.log('Time:', time);
	console.log('Number of Guests:', numGuests);



// shor error 

    //   function showError(input, message){
    //     const formControl = input.parentElement;
    //     formControl.className = 'form-control error';
    //     const small = formControl.querySelector ('small');
    //     small.innerText = message;
    //   }



    //    form.addEventListener('submit', function (e)
    //    {e.preventDefault ();


    //     if (name.value === '' ) { 
    //     showError(username, 'Name is required');
    // }
    //    }); 

if(name==""){
    document.getElementsByTagName('small')[0].innerText="Please, enter your name!"
}






if(email==""){
    document.getElementsByTagName('small')[1].innerText="Please, enter your Email address!"
}



if(phone==""){
    document.getElementsByTagName('small')[2].innerText="Please, enter your phone number!"
}




if(date==""){
    document.getElementsByTagName('small')[3].innerText="Please, enter a date!"
}



if(time==""){
    document.getElementsByTagName('small')[4].innerText="Please, enter the Time!"
}



if(numGuests==""){
    document.getElementsByTagName('small')[5].innerText="Please, enter the number of guests!"
}

else {
    window.alert ("Thank you for your reservation"
    )
}



}

// if(time=="") {
//     window.alert("Enter the Time")
// }

// if(numGuests=="") {
//     window.alert("Enter the number of guests")
// }


/*else {
   window.alert("Thank you for you reservation")
}




    // function validateForm() {
    //     let x = document.form["myForm"]["name"].value;
    //     if (x == "") {
    //       alert("Name must be filled out");
    //       return false;
    //     }
    //   }
    
}
  /*form.addEventListener('submit', handleSubmit);*/