//Phone Quantity
function phoneQuantity(isIncrease){
    const phoneQuantity=document.getElementById('countingPhoneNumber');
    const phoneQuantityValue= phoneQuantity.value;
    const quantityValueString=parseInt(phoneQuantityValue);
    let quantityValue;
    if(isIncrease===true)
    {
         quantityValue=quantityValueString+1;
    }
    else
    {
         quantityValue=quantityValueString-1; 
    }
    phoneQuantity.value=quantityValue;
    return quantityValue;
    
}
//Case Quantity
function caseQuantity(isIncrease)
{
    const caseQuantity=document.getElementById('countingCaseNumber');
    const caseQuantityValue= caseQuantity.value;
    const quantityValueString=parseInt(caseQuantityValue);
    let quantityValue;
    if(isIncrease===true)
    {
         quantityValue=quantityValueString+1;
    }
    else
    {
         quantityValue=quantityValueString-1;
    }
    
    caseQuantity.value=quantityValue;
    return quantityValue;
}
//PHONE UNIT PRICR FINDOUT
function phonePrice(quantityValue){
    const mobilePhonePrice=quantityValue*1219;
    const mobilePrice=document.getElementById('mobilePrice');
    mobilePrice.innerText=mobilePhonePrice;
    return mobilePhonePrice;

}
//CASE UNIT PRICR FINDOUT
function casePrice(quantityValue){
    const casePhonePrice=quantityValue*59;
    const casePrice=document.getElementById('casePrice');
    casePrice.innerText=casePhonePrice;
    return casePhonePrice;

}
  //calculate total
function finalGrandTotalPrice(){
  
          //mobile net price
          const mobileSubTotal=document.getElementById('mobilePrice');
          const mobileSub=mobileSubTotal.innerText;
          const mobileSubString=parseInt(mobileSub);
              //Case Net Price
              const caseSubTotal=document.getElementById('casePrice');
              const caseSub=caseSubTotal.innerText;
              const caseSubString=parseInt(caseSub);
          const finalTotla=mobileSubString+caseSubString;
              //implement total and insert
              const grnadFinal=document.getElementById('subtotal');
              grnadFinal.innerText=finalTotla;  
              return finalTotla;
  }
  
  //CALCULATING TAX
  function calculateTax()
  {
    const taxLocation=document.getElementById('tax');
    const taxAmount=finalGrandTotalPrice()*.10;
    const taxAmountTofixed=taxAmount.toFixed(2);
    taxLocation.innerText=taxAmountTofixed;
    return taxAmountTofixed;
  }
  //CALCULATING CHECKOUT PRICE
    function checkoutPrice(){
    const price1=parseFloat(finalGrandTotalPrice());
    const price2=parseFloat(calculateTax());
    const priceAltogetger=price1+price2;
    const totalCheckoutPrice=document.getElementById('total');
    totalCheckoutPrice.innerText=Math.round(priceAltogetger);
  }


