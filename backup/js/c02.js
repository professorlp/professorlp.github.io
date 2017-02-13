//example.js

//init. greeting vars//
 var greeting = 'Howdy ';
 var name='Molly';
 var message=', Please check your order: ';
  //add together
   var welcome= greeting + name + message;

//sign details
 var sign = 'Montague House';
 var tiles= sign.length;
 var subTotal = tiles*5;
 var shipping = 7;
  //calculate Grandtotal
   var grandTotal = subTotal+shipping;
   
//grab greeting, and make it welcome
 var el = document.getElementById("greeting");
 el.textContent = welcome
 
//grab usersign make it sign
 var elSign = document.getElementById("userSign");
 elSign.textContent = sign;
 
//grab tiles; text = tiles
 var elTiles = document.getElementById("tiles");
 elTiles.textContent=tiles;
 
// " subtotal
 var elSubTotal = document.getElementById("subTotal");
 elSubTotal.textContent= '$' + subTotal;
 
// " shipping
 var elShipping = document.getElementById("shipping");
 //the book uses the wrong variables here..... 
 elShipping.textContent= '$' + shipping;
 
// " grandTotal
 var elGrandTotal = document.getElementById("grandTotal");
 elGrandTotal.textContent = '$' + grandTotal; 