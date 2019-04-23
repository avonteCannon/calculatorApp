window.onload = function(){

    
    var calcButton = document.querySelector("button[name='calculate-discount']");

    
    var discountedPriceSpan = document.querySelector("#discount-price");

   
    calcButton.addEventListener("click", calculateDiscount);

 
    function calculateDiscount(){
       
        var originalPrice = 
        document.querySelector("input[name='original-price']").nodeValue;
        var discountAmount =
        document.querySelector("input[name='discount-amount']").nodeValue;

        
        var discountedPrice = Number(originalPrice) - (originalPrice * (discountAmount
        / 100));

        
        discountedPriceSpan.innerHTML = discountedPrice.toFixed(2);    
    }
}