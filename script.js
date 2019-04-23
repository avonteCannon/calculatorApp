// window.onload = function(){

    
//     var calcButton = document.querySelector("button[name='calculate-discount']");

    
//     var discountedPriceSpan = document.querySelector("#discount-price");

   
//     calcButton.addEventListener("click", calculateDiscount);

 
    function calculateDiscount(){
       
        var originalPrice = document.getElementById("NUM").value;
        
        var discountAmount = document.getElementById("DISNUM").value;

        
        var discountedPrice = (originalPrice) - (originalPrice * (discountAmount
        / 100));
        
        // var final = document.getElementById("final-price");

        // final.innerHTML = discountedPrice;

        document.getElementById('final-price').innerHTML = discountedPrice.toFixed(2);
    }
