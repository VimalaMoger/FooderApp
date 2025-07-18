//retrieve value 
let user = localStorage.getItem("userName");
$(function(){
	if(user){
		$("#signIn-button").text(`Hello ${user} !`);
		$("#signIn-button").show();
		$("#signIn-button").css({'color': 'blue','font-size':'20px'});
		$("#signIn-button").append("<em> <a href=\"../foodarPages/displayItems.html\">Today's Special</a></em>");
	}
});

//close the banner
function bannerclose() {
	var x = document.getElementById("myDIV");
					
	if (x.style.display === "none") {
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
		//document.getElementById("open").style.display="none";	
	}
}

function hid(){
	document.getElementById("myDIV").style.visibility="visible";
}

var val = setTimeout(hid, 5000);


//var b = document.getElementById("myDIV").value;
			
//Check driver availability in the area
var zipcodeList = [78717, 78727, 78757, 78769, 78747];

function checkZipCode(){
	var codeEntered = document.getElementById("zipcode").value;

	for(const i of zipcodeList)	{
		const result = zipcodeList.find(num => num == codeEntered);
		if(result === undefined){												
			document.getElementById("driver").innerHTML = "Driver is not available";							
		}else{											
			document.getElementById("driver").innerHTML = "Driver is available!";						 
		}
	}				
}	
	