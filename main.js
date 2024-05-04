function loaderAnimation() {
    var loader = document.querySelector(".loader");
    setTimeout(function () {
      loader.style.top = "-100%";
      
    }, 100);
  }
  loaderAnimation()

// top back to home 
let uni_back = document.getElementsByClassName("home_header_text")
// For navbar
let home_nav = document.getElementsByClassName("nav_home")
let wishlist_nav = document.getElementsByClassName("nav_wish")
let profile_nav = document.getElementsByClassName("nav_profile")

//Ai chat btn for all pages
let ai_chat = document.getElementsByClassName("ai_svg")
//Cart btn for all pages
let cart_btn = document.getElementsByClassName("cart_svg")
// Back header btn
let back_btn =  document.getElementsByClassName("back_to_home")
//Sign up btn at started
let started_sign_up = document.getElementById("for_signup")
//sign in btn at started
let started_sign_in = document.getElementById("for_signin")
//signup btn on sign up page
let signup_btn = document.getElementById("btn_for_signup")
//sign in option on sign up page
let signin_onsignup= document.getElementById("signin_onsignup")
//sign in option on sign in page
let signin_btn = document.getElementById("signin_btn")
//sign up option on sign in page
let signup_onsignin = document.getElementById("signup_onsignin")
//profile update btn on profile page
let profile_update = document.getElementById("update_profile")
//Home page product like btn
let home_product_like = document.getElementsByClassName("home_like_btn")
//home page product go to cart btn
let home_product_cart = document.getElementsByClassName("home_cart_btn")
// home page product details btn
let home_product_details = document.getElementsByClassName("home_details_btn")

//Wishlist add to cart btn
let wish_cart_btn = document.getElementsByClassName("cart_wish_btn")

//Wishlist details btn
let wish_details_btn = document.getElementsByClassName("details_wish_btn")

//Profile my orders btn
let my_orders_btn = document.getElementById("myorders_btn")



//Profile logout (for this use class to toggle between logout tab)
let logout_btn = document.getElementById("logout")

//Cancel logout on profile
 let cancel_logout_btn = document.getElementById("cancel_logout")

 //Submit logout on profile
 let confirm_logout_btn = document.getElementById("confirm_logout")

 //Cart product details btn
 let cart_details_btn = document.getElementsByClassName("cart_details_btn")
 //  Cart product order btn
 let cart_order_btn = document.getElementsByClassName("cart_order")
 
 //cart product delete btn
 let cart_delete_btn = document.getElementsByClassName("cart_delete_btn")
 // cart product customize btn
 let cart_edit_btn = document.getElementsByClassName("cart_edit")
// cart item delete cancel
let cart_delete_cancel = document.getElementsByClassName("cancel_delete_cart")
// cart item delete confirm
let cart_confirm_cancel = document.getElementsByClassName("confirm_delete_cart")

// Confirm order view order btn connecting to your order page

let view_order_btn = document.getElementsByClassName("view_order_btn")

// continue payment btn to confirm order page

let confirm_payment_btn =  document.getElementsByClassName("confirm_payment")

// checkout address btn
let change_add_tab = document.getElementsByClassName('change_add_icon')
// change add btn to checkout
let change_add_btn = document.getElementsByClassName("change_address")

// checkout product details redirect to details tab
let checkout_details= document.getElementsByClassName("checkout_details")
// checkout product delete redirect to delete tab
let checkout_delete= document.getElementsByClassName("checkout_delete")
// continue payment btn leads to payment
let checkout_payment_btn = document.getElementsByClassName("checkout_payment")


// active my orders page track order btn to go to track order page
let active_tab = document.getElementsByClassName("order_active")

let track_order_btn =  document.getElementsByClassName("track_order_btn")

// completed my orders page leave review btn to go to leave review page
let completed_tab = document.getElementsByClassName("order_complete")

let leave_review_btn =  document.getElementsByClassName("leave_review_btn")

// canceled my orders page re order btn to go to cart page
let cancelled_tab = document.getElementsByClassName("order_cancel")

let reorder_btn =  document.getElementsByClassName("reorder_btn")

// leave review page both btn redirect to confirm order page

let leave_cancel_btn = document.getElementsByClassName("leave_cancel")
let leave_submit_btn = document.getElementsByClassName("submit_cancel")

//ai chat page back btn to home
let ai_chat_back_btn =  document.getElementsByClassName("ai_back")

// delete cart ka show hide
let delete_cart = document.getElementById("delete_cart_btn_changer")

// now importing every page on html

let started_page = document.getElementById("started")
let signup_page = document.getElementById("signup")
let signin_page = document.getElementById("signin")
let completeProfile_page = document.getElementById("complete_profile")
let home_page = document.getElementById("home")
let wishlist_page = document.getElementById("wishlist")
let profile_page = document.getElementById("profile")
let cart_page = document.getElementById("cart")
let customize_page = document.getElementById("customize")
let productsDetails_page = document.getElementById("products_details")
let confirmOrder_page = document.getElementById("confirm_order")
let payMethods_page = document.getElementById("pay_methods")
let chooseAddress_page = document.getElementById("choose_address")
let checkoutPage = document.getElementById("checkout")
let activeOrder_page = document.getElementById("active_order")
let completedOrder_page = document.getElementById("completed_order")
let cancelledOrder_page = document.getElementById("cancelled_order")
let trackOrder_page = document.getElementById("track_order")
let leaveReview_page = document.getElementById("leave_review")
let aiChat_page = document.getElementById("ai_chat")


function hidetags() {
  document.getElementById("signup").style.display="none"
  document.getElementById("signin").style.display="none"
  document.getElementById("complete_profile").style.display="none"
   document.getElementById("home").style.display="none"
   document.getElementById("wishlist").style.display="none"
   document.getElementById("profile").style.display="none"
   document.getElementById("cart").style.display="none"
   document.getElementById("customize").style.display="none"
   document.getElementById("products_details").style.display="none"
   document.getElementById("confirm_order").style.display="none"
   document.getElementById("pay_methods").style.display="none"
   document.getElementById("choose_address").style.display="none"
   document.getElementById("checkout").style.display="none"
   document.getElementById("active_order").style.display="none"
   document.getElementById("completed_order").style.display="none"
   document.getElementById("cancelled_order").style.display="none"
   document.getElementById("track_order").style.display="none"
   document.getElementById("leave_review").style.display="none"
   document.getElementById("ai_chat").style.display="none"
}
hidetags()

started_sign_up.addEventListener('click',(e)=>{
  signup_page.style.display="block"
  started_page.style.display="none"
})
started_sign_in.addEventListener('click',(e)=>{
  signin_page.style.display="block"
  started_page.style.display="none"
})
signin_btn.addEventListener('click',(e)=>{
  signin_page.style.display="none"
  home_page.style.display="block"
  started_page.style.display="none"
})
signup_btn.addEventListener('click',(e)=>{
  signup_page.style.display="none"
  started_page.style.display="none"
  completeProfile_page.style.display="block"
})
profile_update.addEventListener('click',(e)=>{
  signup_page.style.display="none"
  started_page.style.display="none"
  completeProfile_page.style.display="none"
  home_page.style.display="block"
})

my_orders_btn.addEventListener('click',(e)=>{
  profile_page.style.display="none"
  activeOrder_page.style.display="block"
})


for (let i = 0; i < active_tab.length; i++) {
  active_tab[i].addEventListener('click',(e)=>{
    activeOrder_page.style.display="block"
    cancelledOrder_page.style.display="none"
    completedOrder_page.style.display='none'
  })
  
}
for (let i = 0; i < track_order_btn.length; i++) {
  track_order_btn[i].addEventListener('click',(e)=>{
    activeOrder_page.style.display="none"
    trackOrder_page.style.display='block'
  })
  
}
for (let i = 0; i < completed_tab.length; i++) {
  completed_tab[i].addEventListener('click',(e)=>{
    activeOrder_page.style.display="none"
    cancelledOrder_page.style.display="none"
    completedOrder_page.style.display='block'
  })
  
}
for (let i = 0; i < leave_review_btn.length; i++) {
  leave_review_btn[i].addEventListener('click',(e)=>{
    completedOrder_page.style.display="none"
    leaveReview_page.style.display='block'
  })
  
}
for (let i = 0; i < cancelled_tab.length; i++) {
  cancelled_tab[i].addEventListener('click',(e)=>{
    activeOrder_page.style.display="none"
    cancelledOrder_page.style.display="block"
    completedOrder_page.style.display='none'
  })
  
}
for (let i = 0; i < reorder_btn.length; i++) {
  reorder_btn[i].addEventListener('click',(e)=>{
    cancelledOrder_page.style.display="none"
    cart_page.style.display='block'
  })
  
}




for (let i = 0; i < checkout_payment_btn.length; i++) {
  checkout_payment_btn[i].addEventListener('click',(e)=>{
    checkoutPage.style.display="none"
    payMethods_page.style.display='block'
  })
  
}
for (let i = 0; i < checkout_details.length; i++) {
  checkout_details[i].addEventListener('click',(e)=>{
    checkoutPage.style.display="none"
    productsDetails_page.style.display='block'
  })
  
}
for (let i = 0; i < checkout_delete.length; i++) {
  checkout_delete[i].addEventListener('click',(e)=>{
    checkoutPage.style.display="none"
    delete_cart.style.display="block"
    cart_page.style.display="block"
  })
  
}
for (let i = 0; i < confirm_payment_btn.length; i++) {
  confirm_payment_btn[i].addEventListener('click',(e)=>{
    payMethods_page.style.display='none'
    confirmOrder_page.style.display='block'
  })
  
}
for (let i = 0; i < view_order_btn.length; i++) {
  view_order_btn[i].addEventListener('click',(e)=>{
    // payMethods_page.style.display='none'
    confirmOrder_page.style.display='none'
    activeOrder_page.style.display='block'
  })
  
}
for (let i = 0; i < change_add_tab.length; i++) {
  change_add_tab[i].addEventListener('click',(e)=>{
    checkoutPage.style.display="none"
    chooseAddress_page.style.display='block'
  })
  
}
for (let i = 0; i < change_add_btn.length; i++) {
  change_add_btn[i].addEventListener('click',(e)=>{
    checkoutPage.style.display="block"
    chooseAddress_page.style.display='none'
  })
  
}








logout_btn.addEventListener('click',(e)=>{
  document.getElementById("logout_profile").style.display="block"
})

cancel_logout_btn.addEventListener('click',(e)=>{
  document.getElementById("logout_profile").style.display="none"
})

confirm_logout_btn.addEventListener('click',(e)=>{
  document.getElementById("logout_profile").style.display="none"
  hidetags()
  started_page.style.display="block"

})




















// Navbar All pages

for(let i=0;i<home_nav.length;i++){
  home_nav[i].addEventListener('click',(e)=>{
    hidetags();
    started_page.style.display="none"
    home_page.style.display="block"
    
  })
}
for(let i=0;i<wishlist_nav.length;i++){
  wishlist_nav[i].addEventListener('click',(e)=>{
    hidetags();
    started_page.style.display="none"
    wishlist_page.style.display="block"
    
  })
}
for(let i=0;i<profile_nav.length;i++){
  profile_nav[i].addEventListener('click',(e)=>{
    hidetags();
    started_page.style.display="none"
    profile_page.style.display="block"
    
  })
}




// For All Pages
for(let i=0;i<ai_chat.length;i++){
  ai_chat[i].addEventListener('click',(e)=>{
    hidetags();
    started_page.style.display="none"
    aiChat_page.style.display="block"
    console.log("btn clicked")
  })
}
for(let i=0;i<ai_chat_back_btn.length;i++){
  
  ai_chat_back_btn[i].addEventListener('click',(e)=>{
    hidetags();
    started_page.style.display="none"
    home_page.style.display='block'
  
  })
}
for(let i=0;i<cart_btn.length;i++){
  
  cart_btn[i].addEventListener('click',(e)=>{
    hidetags();
    started_page.style.display="none"
    cart_page.style.display="block"
  
  })
}
for(let i=0;i<home_product_like.length;i++){
  
  home_product_like[i].addEventListener('click',(e)=>{
    
    home_page.style.display="none"
    wishlist_page.style.display="block"
  
  })
}
for(let i=0;i<home_product_cart.length;i++){
  
  home_product_cart[i].addEventListener('click',(e)=>{
    
    home_page.style.display="none"
    cart_page.style.display="block"
  
  })
}
for(let i=0;i<home_product_details.length;i++){
  
  home_product_details[i].addEventListener('click',(e)=>{
    
    home_page.style.display="none"
    productsDetails_page.style.display="block"
  
  })
}
for(let i=0;i<wish_cart_btn.length;i++){
  
  wish_cart_btn[i].addEventListener('click',(e)=>{
    
    wishlist_page.style.display="none"
    cart_page.style.display="block"
  
  })
}
for(let i=0;i<wish_details_btn.length;i++){
  
  wish_details_btn[i].addEventListener('click',(e)=>{
    
    wishlist_page.style.display="none"
    productsDetails_page.style.display="block"
  
  })
}

// Cart Page 

for(let i=0;i<cart_details_btn.length;i++){
  
  cart_details_btn[i].addEventListener('click',(e)=>{
    
    cart_page.style.display="none"
    productsDetails_page.style.display="block"
  
  })
}
for(let i=0;i<cart_order_btn.length;i++){
  
  cart_order_btn[i].addEventListener('click',(e)=>{
    
    cart_page.style.display="none"
    checkoutPage.style.display="block"
  
  })
}
for(let i=0;i<cart_edit_btn.length;i++){
  
  cart_edit_btn[i].addEventListener('click',(e)=>{
    
    cart_page.style.display="none"
    customize_page.style.display="block"
  
  })
}
for(let i=0;i<cart_delete_btn.length;i++){
  
  cart_delete_btn[i].addEventListener('click',(e)=>{
    
    // cart_page.style.display="none"
    // checkoutPage.style.display="block"
    
    delete_cart.style.display="block"
    
  })
}
for(let i=0;i<cart_delete_cancel.length;i++){
  
  cart_delete_cancel[i].addEventListener('click',(e)=>{
    
    cart_page.style.display="block"
    delete_cart.style.display="none"
    
    
  })
}
for(let i=0;i<cart_confirm_cancel.length;i++){
  
  cart_confirm_cancel[i].addEventListener('click',(e)=>{
    
    cart_page.style.display="block"
    delete_cart.style.display="none"
    
    
  })
}
for(let i=0;i<uni_back.length;i++){
  
  uni_back[i].addEventListener('click',(e)=>{
    
    hidetags()
    home_page.style.display="block"
    
    
  })
}



