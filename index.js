// document.getElementById('getStartedBtn').addEventListener('click', function() {
//     window.location.href = 'signup.html'; // Change the URL to your signup page
// });

const getStartedBtn = document.getElementById("getStartedBtn");

if (getStartedBtn !== null) {
  getStartedBtn.addEventListener("click", function() {
    window.location.href = "signup.html"
  });
} else {
  
}

  
// 
// function redirectToShop() {
//     window.location.href = "/shop";
//   }
  
const signupBtn = document.getElementById("signupButton");
const shopPageUrl = "/shop.html";

if (signupBtn !== null) {
  signupBtn.addEventListener("click", function() {
    window.location.href = "shop.html"
  });
} else {
  
}

const signinBtn = document.getElementById("signinButton");
const shopsPageUrl = "/shop.html";

if (signinBtn !== null) {
  signinBtn.addEventListener("click", function() {
    window.location.href = "shop.html"
  });
} else {
  
}




