/* 
var x = 10;


if(x > 20 && x == 10){
    alert("1");
}

if(x > 20 || x == 10){
    alert("2");
}



if(true){
   alert("3"); 
}

if(false){
    alert("4"); 
 }


 if(true && true){
    alert("Hooray!"); 
 }

 if(true && false){
    alert("Hooray! 2"); 
 }

 if(true || false){
    alert("Hooray! 3"); 
 }

 if(false || false){
    alert("Hooray! 4"); 
 }


var chislo = prompt("Введите числo")
chislo = parseInt(chislo);

if(0 >= chislo){
    alert(chislo ** 2);
} else{
    alert("Ошибка");
}

alert("Start");
for(var i = 1; i <= 9; i++){
    alert(i);
}
alert("Finish");



var x = 1;

alert("Start");

while(x <= 9){
    alert(x);
    x++;
}

alert("Finish");

*/

var places = document.getElementsByClassName('place');

var button = document.getElementById('button');

var video = document.getElementById('video');

var booked = 0;
button.onclick = function(){
    var number = prompt("Введите место которое будем бронировать");
    number = parseInt(number);
    number--;

    places[number].style.backgroundColor = 'red'

    booked++;
    alert("Забронированно: " + booked);

   if(booked >= 5){
    video.style.display = 'block';
   }
}