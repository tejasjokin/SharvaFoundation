var nameFlag = false;
var numberFlag = false;
var bloodFlag = false;
var stateFlag = false;
var cityFlag = false;
var mailFlag = false;
var addressFlag = false;
var cur_addressFlag = false;
var reasonFlag = false;
var dateFlag = false;
var cur_cityFlag = false;
var cur_stateFlag = false;
var validationFlag = false;
var categoryFlag = false;

const input = document.getElementsByClassName('input');
const input1 = Object.entries(input);
const lock = () => {
	input1.forEach((item) => {
		item[1].setAttribute("readonly",true);
	})
}


const dateValidate = (event) => {
	var birthday = event.target.value
	var format = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
	if(birthday.match(format))
	{
		dateFlag = true;
		// // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
		// var optimizedBirthday = birthday.replace(/-/g, "/");

		// //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
		// var myBirthday = new Date(optimizedBirthday);

		// // set current day on 01:00:00 hours GMT+0100 (CET)
		// var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';

		// // calculate age comparing current date and birthday
		// var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

		// if(myAge >= 18) {
	 //     	    console.log('Success');
	 //        }else{
		//     console.log('Failed')
		// }
	}
	else
	{
		alert('Incorrect Date format.');
	}
}

const nameValidate = (event) => {
	const name  = event.target.value;
	if(name.length<3 || name.length>22)
	{
		alert("The name should contain 3-22 characters");
		event.target.value = '';
		nameFlag = false;
	}
	else
	{
		nameFlag = true;
	}
}

const reasonValidate = (event) => {
	const reason  = event.target.value;
	if(reason.length<20)
	{
		alert("The reason should contain more than 20 characters.");
		reasonFlag = false;
	}
	else
	{
	reasonFlag = true;
	}
}

const mailValidate = (event) => {
	var mailverify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const mail = event.target.value;
	if (!mail.match(mailverify))
  	{
  		alert("You have entered an invalid email address!");
    	mailFlag = false;
  	}
    else
    {
    	mailFlag = true;
    }
}

const addressValidate = (event) => {
	var target = event.target.name;
	if(target==='per_address')
	{
		var address = event.target.value;
		if(address.length<10 || address.length>200)
		{
			alert("Address should contain 10-200 characters.");
			addressFlag = false;
		}
		else
		{
			addressFlag = true;
		}
	}
	else
	{
		var address = event.target.value;
		if(address.length<10 || address.length>200)
		{
			alert("Address should contain 10-200 characters.");
			cur_addressFlag = false;
		}
		else
		{
			cur_addressFlag = true;
		}
	}

}

const blood = document.getElementById('bloodgroup');
const state = document.getElementById('state');
const phone_no = document.getElementById('phone_no');
const cur_state = document.getElementById('cur_state');
const city = document.getElementById('city');
const cur_city = document.getElementById('cur_city');
const form = document.getElementById('form');
const confirm = document.getElementById('confirm');
const submit = document.getElementById('submit');
const category = document.getElementById('category');
const currentAddress = document.getElementById('currentAddress');
const permanentAddress = document.getElementById('permanentAddress');

const addressHandler = (event) => {
	var isChecked = event.target.checked;
	if(isChecked)
	{
		currentAddress.value = permanentAddress.value;
		cur_state.value = state.value;
		cur_city.value = city.value;
		cur_stateFlag = true;
		cur_cityFlag = true;
		cur_addressFlag = true;
	}
	else
	{
		cur_state.value = 'none';
		cur_city.value = 'none';
		currentAddress.value = '';
		cur_addressFlag = false;
		cur_stateFlag = false;
		cur_cityFlag = false;
	}
}

const bloodLock = () => {
	const options = Object.entries(blood.options);
	const selected = blood.value;
	options.forEach((item) => {
		if(item[1].value!==selected)
		{
			item[1].remove();
		}
	})
}

const categoryLock = () => {
	const options = Object.entries(category.options);
	const selected = category.value;
	options.forEach((item) => {
		if(item[1].value!==selected)
		{
			item[1].remove();
		}
	})
}
const stateLock = () => {
	const options = Object.entries(state.options);
	const selected = state.value;
	options.forEach((item) => {
		if(item[1].value!==selected)
		{
			item[1].remove();
		}
	})
	const options1 = Object.entries(cur_state.options);
	const selected1 = cur_state.value;
	options1.forEach((item) => {
		if(item[1].value!==selected1)
		{
			item[1].remove();
		}
	})
}

const cityLock = () => {
	const options = Object.entries(city.options);
	const selected = city.value;
	options.forEach((item) => {
		if(item[1].value!==selected)
		{
			item[1].remove();
		}
	})
	const options1 = Object.entries(cur_city.options);
	const selected1 = cur_city.value;
	options1.forEach((item) => {
		if(item[1].value!==selected1)
		{
			item[1].remove();
		}
	})
}

city.addEventListener('blur', (event) => {
	if(event.target.value==='none')
	{
		alert("Please enter your City.");
		cityFlag = false;
	}
	else
	{
		cityFlag = true;
	}
})

phone_no.addEventListener('blur', (event) => {
	// var phoneno = /^\d{10}$/;
	const number = event.target.value;
	if(number.length)
	{
		numberFlag = true;
	}
	else
	{
		alert("Enter valid phone no.");
		event.target.value = '';
		numberFlag = false;	
	}
})

cur_city.addEventListener('blur', (event) => {
	if(event.target.value==='none')
	{
		alert("Please enter your Current City.");
		cur_cityFlag = false;
	}
	else
	{
		cur_cityFlag = true;
	}
})

state.addEventListener('blur', (event) => {
	if(event.target.value==='none')
	{
		alert("Please enter your Current State.");
		stateFlag = false;
	}
	else
	{
		stateFlag = true;
	}	
})

cur_state.addEventListener('blur', (event) => {
	if(event.target.value==='none')
	{
		alert("Please enter your State.");
		cur_stateFlag = false;
	}
	else
	{
		cur_stateFlag = true;
	}	
})

blood.addEventListener('blur', (event) => {
	if(event.target.value==='none')
	{
		alert("Please enter your blood group.");
		bloodFlag = false;
	}
	else
	{
		bloodFlag = true;
	}
})

category.addEventListener('blur', (event) => {
	if(event.target.value==='none')
	{
		alert("Please enter your category.");
		categoryFlag = false;
	}
	else
	{
		categoryFlag = true;
	}	
})

const submitValidate = () => {
	var flag = false;
	if(!nameFlag)
	{
		alert("Name field is unattended.");
	}
	else if(!mailFlag)
	{
		alert("Email field is unattended.");
	}
	else if(!numberFlag)
	{
		alert("Number field is unattended.");
	}
	else if(!addressFlag)
	{
		alert("Address field is unattended.");
	}
	else if(!bloodFlag)
	{
		alert("Blood group not selected.");
	}
	else if(!stateFlag)
	{
		alert("State not selected.");
	}
	else if(!cityFlag)
	{
		alert("City not selected.");
	}
	else if(!reasonFlag)
	{
		alert("Reason to join not specified.")
	}
	else if(!dateFlag)
	{
		alert("Date of Birth is unattended.")
	}
	else if(!cur_city)
	{
		alert("Current City is unattended.")
	}
	else if(!cur_stateFlag)
	{
		alert("Current state is unattended.")
	}
	else if(!cur_addressFlag)
	{
		alert("Current Address is unattended.")
	}
	else if(!categoryFlag)
	{
		alert("Category is not selected.")
	}
	// console.log('name',nameFlag);
	// console.log('number',numberFlag);
	// console.log('bloodgroup',bloodFlag);
	// console.log('state',stateFlag);
	// console.log('city',cityFlag);
	// console.log('mail',mailFlag);
	// console.log('address',addressFlag);
	// console.log('reason',reasonFlag);
	// console.log('date',dateFlag);
	// console.log('cur_city',cur_cityFlag);
	// console.log('cur_addressFlag',cur_addressFlag);
	// console.log('cur_stateFlag',cur_stateFlag);
	// console.log('categoryFlag',categoryFlag);

	if( nameFlag===true &&
		numberFlag===true &&
		bloodFlag===true &&
		stateFlag===true &&
		cityFlag===true &&
		mailFlag===true &&
		addressFlag===true &&
		reasonFlag===true &&
		dateFlag===true &&
		cur_cityFlag===true &&
		cur_addressFlag===true &&
		cur_stateFlag===true &&
		categoryFlag===true
	)
	{
		submit.classList.remove("submit");
		confirm.disabled = true;
		lock();
		cityLock();
		bloodLock();
		stateLock();
		categoryLock();
	}
}
function thanks() {
	var popup = document.getElementById("pop");
	popup.classList.toggle('show');
 }

 let Home=document.getElementById('home'); 
 let events=document.getElementById('events'); 
 let joinus=document.getElementById('joinus'); 
 let aboutus=document.getElementById('aboutus'); 
 let contactus=document.getElementById('contactus');  
 
 onload=function activateContactus(){
	 joinus.className="active";
 }
