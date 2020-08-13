var nameFlag = false;
var mailFlag = false;
var messageFlag = false;

const confirm = document.getElementById('confirm');
const submit = document.getElementById('submit');

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

const mailValidate = (event) => {
	var mailverify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const mail = event.target.value;
	if (!mail.match(mailverify))
  	{
  		alert("You have entered an invalid email address!");
  		event.target.value = '';
    	mailFlag = false;
  	}
    else
    {
    	mailFlag = true;
    }
}

const messageValidate = (event) => {
	const message = event.target.value;
	if(message.length<15 || message.length>300)
	{
		alert("The message should consider 15-300 characters.");
		messageFlag = false;
	}
	else
	{
		messageFlag = true;
	}
}

const submitValidate = () => {
	if(!nameFlag)
	{
		alert('Name field is unattended.');
	}
	if(!mailFlag)
	{
		alert('Mail field is unattended.');
	}
	if(!messageFlag)
	{
		alert('You did not mention your query.');
	}
	if(
		nameFlag===true &&
		mailFlag===true &&
		messageFlag===true &&
		window.confirm('Are you sure you want to confirm?')===true
	)
	{
		submit.classList.remove('submit');
		confirm.classList.add('hide');
	}
}