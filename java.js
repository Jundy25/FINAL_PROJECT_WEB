var quantity = 1;
var price = 0;
var fee = 35;
var total = 0;



function disable(){
    var c = document.getElementById('username');
    var x = document.getElementById('pinakbet1');
    var y = document.getElementById('pancit1');
    var z = document.getElementById('sitaw1');
    if (x.style.display === "block" || y.style.display === "block" || z.style.display === "block"){
        alert('Order one at a time.');
        exit();
    }else if(c.style.display === "none"){
        alert('Please Login First.');
        exit();
    }
}


function logout(){
    localStorage.setItem('Loginstatus','false');
    document.getElementById('log').style.display='inline-block';
    document.getElementById('username').style.display='none';
    document.getElementById('logout').style.display='none';
}

function add(){
    if (quantity < 10){
        quantity = quantity + 1;
        total = total + price;
        document.getElementById('q').innerHTML = quantity;
        document.getElementById('q1').innerHTML = quantity;
        document.getElementById('q2').innerHTML = quantity;
        document.getElementById('total').innerHTML = total;
        document.getElementById('total1').innerHTML = total;
        document.getElementById('total2').innerHTML = total;
    }else{
        alert('Quantity Exceed the maximum amount');
    }
    
}

function sub(){
    if (quantity > 1){
        quantity = quantity - 1;
        total = total - price;
        document.getElementById('q').innerHTML = quantity;
        document.getElementById('q1').innerHTML = quantity;
        document.getElementById('q2').innerHTML = quantity;
        document.getElementById('total').innerHTML = total;
        document.getElementById('total1').innerHTML = total;
        document.getElementById('total2').innerHTML = total;
    }else{
        alert('Quantity Cannot be zero');
    }
}
//PINAKBET
function pinakbet(){
    disable()

    price = price + 35;
    total = total + price + fee;
    document.getElementById('total').innerHTML = total;

    var x = document.getElementById('pinakbet');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('pinakbet1');
    if (y.style.display === "none") {
        y.style.display = "block";
        document.querySelector('btn2').disable = true;
        document.querySelector('btn2.1').disable = true;
    } else {
        y.style.display = "none";
    } 
    var a = document.getElementById('pinakbet');
}
function cancel(){
    fee = 0;
    price = 0;
    total = 0;
    quantity = 1
    document.getElementById('q').innerHTML = "1";
    document.getElementById('total').innerHTML = total;

    var x = document.getElementById('pinakbet');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('pinakbet1');
    if (y.style.display === "none") {
        y.style.display = "block";
        document.querySelector('btn2').disable = false;
        document.querySelector('btn2.1').disable = false;
    } else {
        y.style.display = "none";
        
    } 
}

function pancit(){
    disable()

    price = price + 45;
    total = total + price + fee;
    document.getElementById('total1').innerHTML = total;

    var x = document.getElementById('pancit');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('pancit1');
    if (y.style.display === "none") {
        y.style.display = "block";
        
    } else {
        y.style.display = "none";
    } 
}
function cancel1(){
    price = 0;
    total = 0;
    quantity = 1
    document.getElementById('q1').innerHTML = "1";
    document.getElementById('total1').innerHTML = total;

    var x = document.getElementById('pancit');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('pancit1');
    if (y.style.display === "none") {
        y.style.display = "block";
        
    } else {
        y.style.display = "none";
        
    } 
}

function sitaw(){
    disable()

    price = price + 40;
    total = total + price + fee;
    document.getElementById('total2').innerHTML = total;

    var x = document.getElementById('sitaw');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('sitaw1');
    if (y.style.display === "none") {
        y.style.display = "block";
        
    } else {
        y.style.display = "none";
    } 
}
function cancel2(){
    fee = 0;
    price = 0;
    total = 0;
    quantity = 1
    document.getElementById('q2').innerHTML = "1";
    document.getElementById('total2').innerHTML = total;

    var x = document.getElementById('sitaw');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('sitaw1');
    if (y.style.display === "none") {
        y.style.display = "block";
        
    } else {
        y.style.display = "none";
        
    } 
}




    