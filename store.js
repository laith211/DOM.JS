if( document.readyState == 'loading'){
    document.addEventlistener('DOMContentmoaded', ready)
} else{
ready()
}
function ready(){
var rewoveCartIyemButtons = document.getElementsByClassName('btn-danger')
for(var i= 0;i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventlistener('click', removeCartItem)
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for(var i = 0;i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}
var addToCartButtons = document.getElementsByClassName('shop-item- button')
for ( var i = 0 ; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click' ,addToCartClicked)
}
document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)

}
function purchaseClicked(){
    alert('thank you  for your punchase')
    var cartItems = document.getElementsByClassName('cart-Items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartIetems.firstChild)
}
}

function removeCartItem(event){
    var buttonClicked = event.target 
    buttonClicked.parentElement.parentElement.remove()
    updateCartTota()
}
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0 ){
        input.value = 1
    }
    updateCartTotal()
}
function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image').scr
    console.log(title,price,imageSrc)
    addItemToCart(title,price, imageSrc)
}
function addItemToCart(title,price,imageSrc){
    var cartRow = document.createElement('div')
    var cartIetems =document.getElementsByClassName('cart-items')[0]
   for (var i =0 ;i < cartItemNames.length; i++){
       if (cartItemNames[i].innerText== title)
       alert('this item is alreeady added to the cart')
       return
   }
}

function updateCartTotal(){
var carttemContainer = document.getElementsByClassName('cart-items')[0]
var cartRows= cartItemContainer.getElemenysByclassName('cart-row')
for(var i = 0;i<cartRows.lenght ; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
    [0]
    var price = priceElement.innerText.replace('$',''))
    var quantityElement.value
    total = total+ (price* quantity)

}
total = Math.round( total * 100)/ 100
document.getElementsByClassName('cart-totale-price')[0].innerText = '$'+ total
}


