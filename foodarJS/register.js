function registerUser(){
	alert("Your information is saved. Please sign in");
	const name = document.getElementById("fName").value;
	const email = document.getElementById("email").value;
		
	localStorage.setItem("userName", name);
	localStorage.setItem("userEmail", email);
	var frm = document.getElementsByName('contact-form')[0];
	frm.reset();  // Reset all form data
}