function loginUser(){
				
	var firstName = document.getElementById("fName").value;
	var email = document.getElementById("email").value;

	let userName = localStorage.getItem("userName");
	let userEmail = localStorage.getItem("userEmail");

	if(firstName === '' || email === ''){
		alert("Name and email both required ");
		return false;
	}
	if(userName == null || userName !== firstName){
		alert("If you are a new user, Please register to sign in");

		var frm = document.getElementsByName('contact-form')[0];
		frm.reset();  // Reset all form data
		window.location.href = "register.html";
		return false;
	}
				
	localStorage.setItem("userName", firstName);
	localStorage.setItem("userEmail", email);
	//frm.reset();

	//redirect url to displayItems page
	var url = "../foodarPages/displayItems.html";
    window.location.href = url;			
}