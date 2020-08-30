var nameFlag = false;
var mailFlag = false;
var numberFlag = false;
var addressFlag = false;
var cityFlag = false;
var stateFlag = false;
var countryFlag = false;
var pincodeFlag = false;
var amountFlag = false;

const input = document.getElementsByClassName('input');
const input1 = Object.entries(input);
const lock = () => {
	input1.forEach((item) => {
		item[1].setAttribute("readonly",true);
	})
}

const nameValidate = (event) => {
	const name  = event.target.value;
	if(name.length<5 || name.length>15)
	{
		alert("The name should contain 5-15 characters");
		event.target.value = '';
		nameFlag = false;
	}
	else
	{
		nameFlag = true;
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

const donationValidate = (event) => {
	var amount = event.target.value;
	if(amount === '')
	{
		amountFlag = false;
	}
	else
	{
		amountFlag = true;
	}
}

const pincodeValidate = (event) => {
	var pat1=/^\d{6}$/;
	const pincode = event.target.value;
	if(!pincode.match(pat1))
	{
		alert("Please enter Valid pincode.");
		pincodeFlag = false;
	}
	else
	{
		pincodeFlag = true;
	}
}

const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const form = document.getElementById('form');
const confirm = document.getElementById('confirm');
const submit = document.getElementById('submit');

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

const countryLock = () => {
	const options = Object.entries(country.options);
	const selected = country.value;
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
country.addEventListener('blur', (event) => {
	if(event.target.value==='none')
	{
		alert("Please enter your country");
		countryFlag = false;
	}
	else
	{
		countryFlag = true;
	}	
})

const submitValidate = () => {
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
	else if(!stateFlag)
	{
		alert("State not selected.");
	}
	else if(!cityFlag)
	{
		alert("City not selected.");
	}
	else if(!countryFlag)
	{
		alert("Country is not selected.");
	}
	else if(!pincodeFlag)
	{
		alert("Pincode is unattended.");
	}
	else if(!amountFlag)
	{
		alert("Donation amount not specified.");
	}
	if(
		nameFlag===true &&
		mailFlag===true &&
		numberFlag===true &&
		addressFlag===true &&
		cityFlag===true &&
		stateFlag===true &&
		countryFlag===true &&
		pincodeFlag===true &&
		amountFlag===true &&
		window.confirm('Are you sure you want to confirm details?')===true
	)
	{
		submit.classList.remove('submit');
		confirm.classList.add('hide');
		lock();
		cityLock();
		stateLock();
		countryLock();
	}
}


let Home=document.getElementById('home'); 
let events=document.getElementById('events'); 
let joinus=document.getElementById('joinus'); 
let aboutus=document.getElementById('aboutus'); 
let contactus=document.getElementById('contactus');  
let donateus=document.getElementById('donateus');  

onload=function activateContactus(){
	donateus.className="activeDonate";
}