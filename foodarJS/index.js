let user = localStorage.getItem("userName");
$(function(){
    if(user){
        $(".checkLoggedIn").hide();
        $("#signIn-button").text(`Hello ${user} !`);
        $("#signIn-button").css({'color': 'blue','font-size':'18px'});
        $("#signIn-button").append("<br><em> <a href=\"foodarPages/displayItems.html\">Today's Special</a></em>");
    }
});


//array data, animated text
const myBanner = new Array('Oven-Baked Pastas', 'Oven-Baked Sandwiches', 'Specialty Pizzas','Breads & Dips', 'Desserts','Drinks');
let banner = 0;
function ShowBanners(){ 
	if (document.images){ 
        banner++;
        if (banner==myBanner.length) {
            banner = 0;
        }
        document.getElementById('food').innerHTML = myBanner[banner];
        setTimeout("ShowBanners()",1000);
	}
}

//check whether the given zipcode is valid or invalid
function zipCodeChecker(){
							
	var zipcodeList = [78717, 78727, 78757, 78769, 78747];
	var valid = false;	

	for ( var i = 0; i <= 4; i++ ){		
		var codeEntered = Number(document.getElementById("zipcode").value);
		if(codeEntered === zipcodeList[i])	{
			valid = true;						
		}					
	}
	if(valid)
		alert("We’ve got your area covered!");	
	else			
	alert("Sorry, we haven’t expanded to that area yet.");

	var frm = document.getElementsByName('contact-form')[0];
	frm.reset();
}