


let phoneInitialPrice;
// CLICKING + BUTTON ON PHONE SECTION 
document.getElementById('btnPhonePlus').addEventListener('click', function clickButton(){
    const quantityValue= phoneQuantity(true);
    phoneInitialPrice= phonePrice(quantityValue);
    
    finalGrandTotalPrice();
    calculateTax();
    checkoutPrice();
    
   

})
// CLICKING - BUTTON ON PHONE SECTION 
document.getElementById('btnPhoneMinus').addEventListener('click', function clickButton(){
    const quantityValue=  phoneQuantity(false); 
     phoneInitialPrice= phonePrice(quantityValue);
    //calculate total
   
    finalGrandTotalPrice();
    calculateTax();
    checkoutPrice();
})