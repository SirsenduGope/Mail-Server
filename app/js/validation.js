function validation(){
	var flag_err = false;
	var mailid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	var reciver = document.mail.reciver;
	var reciver_err = document.getElementById("reciver_err");
	if(reciver.value === ""){
		reciver_err.style.visibility = "visible";
		flag_err = true;
	}
	else if(mailid.exec(reciver.value) === false){
		reciver_err.innerHTML = "Mail id is incorrect";
		alert("asd");
		flag_err = true;
	}
	else{
		reciver_err.style.visibility = "hidden";
	}

	var sender = document.mail.sender;
	var sender_err = document.getElementById("sender_err");
	if(sender.value === ""){
		sender_err.style.visibility = "visible";
		flag_err = true;
	}
	else{
		sender_err.style.visibility = "hidden";
	}

	var subject = document.mail.subject;
	var subject_err = document.getElementById("subject_err");
	if(subject.value === ""){
		subject_err.style.visibility = "visible";
		flag_err = true;
	}
	else{
		subject_err.style.visibility = "hidden";
	}

	var description = document.mail.desc;
	var description_err = document.getElementById("description_err");
	if(description.value === ""){
		description_err.style.visibility = "visible";
		flag_err = true;
	}
	else{
		description_err.style.visibility = "hidden";
	}


	return !flag_err;
}