var likeButtons = document.querySelectorAll(".btn-like");

for(var i = 0; i < likeButtons.length; i++) {
likeButtons[i].addEventListener('click', function() {
    if(this.classList.contains("liked")) {
        this.classList.remove("liked")
    } else {
    this.classList.add('liked')
}
})
}

// add slider

$(document).ready(function(){
    $('.slider-block').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 3000
    })
  });
  //add-to-cart
  var productsCountEl = document.getElementById('products-count')
   console.log (productsCountEl)

   var addToCartButtons = document.querySelectorAll('.btn-add-to-cart')
    console.log (addToCartButtons)


  for (var i=0; i< addToCartButtons.length; i++) {
     addToCartButtons[i].addEventListener('click', function(){
       var prevProductCount = +productsCountEl.textContent
       productsCountEl.textContent = prevProductCount + 1

     })
   }
