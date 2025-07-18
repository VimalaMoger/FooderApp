const items= [
    { id: 1, name: "Oven_Baked_Pastas", price:12.99 }, 
    { id: 2, name: "Oven_Baked_Sandwiches", price:12.99 }, 
    { id: 3, name: "Specialty_Pizzas", price:12.99 }, 
    { id: 4, name: "Bread_and_Dips", price: 10.99 },
    { id: 5, name: "Desserts", price: 10.99 },
    { id: 6, name: "Drinks", price: 3.99 },            
    { id: 7, name: "Burritos", price: 10.99},
    { id: 8, name: "Cheese Biscuit", price: 3.99 },
    { id: 9, name: "Burgers", price: 5.99 }
];

window.onload = function() {
    document.getElementById("target").style.display = 'table';
};

// Define the AngularJS application
var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
    // Define an array in the scope
    $scope.items = items;
});

let total = 0;
localStorage.setItem("total", total);
            
let user = localStorage.getItem("userName");

//custom message using js template string
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("hello").innerHTML = `<b style="color: black;"> Hello  ${user} ! <br><br>
	You have signed in. Please make a selection from <b style="color:blue;">\"Today\'s Menu\"</b> options below. <br><br></b>
	`;
});

//total price is updated          
function addToTotal(val){            
    let num = JSON.parse(localStorage.getItem("total"));
    localStorage.setItem("total", (num + val));
    var url = "../foodarPages/serviceRequest.html";
    window.location.href = url;
}

//get total price from selected rows
function getPrice(){
    var totalAmount = 0;
    const table = document.getElementById("target");
    const selectedCheckboxes = table.querySelectorAll("#row-checkbox");
    const selectedRows = [];

    for(let i of selectedCheckboxes){
        if(i.checked){
            const row = i.closest('tr');
            const rowData = Array.from(row.cells).slice(row.length,-1).map(cell => cell.textContent);
            selectedRows.push(rowData);
        }                                       
    }                
    //add all the selected price                    
    selectedRows.forEach(i =>{
        totalAmount += Number(i[2]);
    }); 
    addToTotal(totalAmount);
}

 //show text
function showSuggestion() {
    document.getElementById('tooltip-text').style.visibility = 'visible';
}
//hide text when visibility is hidden
function hideSuggestion() {
    document.getElementById('tooltip-text').style.visibility = 'hidden';
 }
