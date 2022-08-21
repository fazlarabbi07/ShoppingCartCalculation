

// CLICKING + BUTTON ON CASE SECTION 
document.getElementById('btnCasePlus').addEventListener('click', function clickButton(){
    
    const quantityValue= caseQuantity(true);
    casePrice(quantityValue);
    finalGrandTotalPrice();
    calculateTax();
    checkoutPrice();

})
// CLICKING - BUTTON ON CASE SECTION 
document.getElementById('btnCaseMinus').addEventListener('click', function clickButton(){
    
    const quantityValue=  caseQuantity(false);
    casePrice(quantityValue);
    finalGrandTotalPrice();
    calculateTax();
    checkoutPrice();

})