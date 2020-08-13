var nameFlag = false;
var numberFlag = false;
var bloodFlag = false;
var stateFlag = false;
var cityFlag = false;
var mailFlag = false;
var addressFlag = false;
var reasonFlag = false;
var validationFlag = false;

const input = document.getElementsByClassName('input');
const input1 = Object.entries(input);
const lock = () => {
	input1.forEach((item) => {
		item[1].setAttribute("readonly",true);
	})
}


const nameValidate = (event) => {
	const name  = event.target.value;
	if(name.length<3 || name.length>15)
	{
		alert("The name should contain 3-15 characters");
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

const numberValidate = (event) =>
{
	var phoneno = /^\d{10}$/;
	const number = event.target.value;
	if(!number.match(phoneno))
	{
		alert("Enter valid phone no.");
		event.target.value = '';
		numberFlag = false;
	}
	else
	{
		numberFlag = true;
	}
}

const addressValidate = (event) => {
	var address = event.target.value;
	if(address.length<50 || address.length>200)
	{
		alert("Address should contain 50-200 characters.");
		addressFlag = false;
	}
	else
	{
		addressFlag = true;
	}
}

const blood = document.getElementById('bloodgroup');
const state = document.getElementById('state');
const city = document.getElementById('city');
const form = document.getElementById('form');
const confirm = document.getElementById('confirm');
const submit = document.getElementById('submit');

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

const stateLock = () => {
	const options = Object.entries(state.options);
	const selected = state.value;
	options.forEach((item) => {
		if(item[1].value!==selected)
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

state.addEventListener('blur', (event) => {
	if(event.target.value==='none')
	{
		alert("Please enter your State.");
		stateFlag = false;
	}
	else
	{
		stateFlag = true;
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
	if( nameFlag===true &&
		numberFlag===true &&
		bloodFlag===true &&
		stateFlag===true &&
		cityFlag===true &&
		mailFlag===true &&
		addressFlag===true &&
		reasonFlag===true &&
		window.confirm('Are you sure you want to confirm?')===true
	)
	{
		submit.classList.remove("submit");
		confirm.classList.add('hide');
		lock();
		cityLock();
		bloodLock();
		stateLock();
	}
}
function thanks() {
	var popup = document.getElementById("pop");
	popup.classList.toggle('show');
 }

