//result calculation based upon selected options
var result = 0; 
function myFunction() {

	var x =document.getElementsByClassName("price");
	var y=document.getElementsByClassName("tip");				
				
	for(var i=0;i< x.length;i++){

		for(var j=0;j< y.length;j++){

			if(x[i].checked && y[j].checked){

				var value1 = Number(x[i].value);
				var value2 = Number(y[j].value);
				if(result < 1){
					result = value1 + (value1 * value2);
				}										
			}			
		}
	}
    //retrieve storage value using key
    let num = JSON.parse(localStorage.getItem("total"));
                    
    //Print the total amount on user screen
    document.getElementsByClassName("total")[0].value = (result + num).toFixed(2);
    if(num > 0){
        alert("The total is: " + result.toFixed(2) + " + food price " + num.toFixed(2) + " due today");
            return false;
    }
    $(function(){	
        if(num === 0){
            alert("Your cart item is empty.");					
        }
        window.location.href = "../index.html";
    });
}
			

//submit request button action
function alertUser(){
	var value1 = document.getElementsByClassName("total")[0].value;
	if(value1>1){
		alert("Your information is submitted. Thank you for your purchase!");
		window.location.href = "../index.html";
	}
	else{				
		alert("Please select two options");
	}
}

			
