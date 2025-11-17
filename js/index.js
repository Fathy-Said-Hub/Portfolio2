let element = document.getElementsByClassName("onReload")[0];
console.log(element)
let h1 = document.getElementsByTagName("h1")[0];

setTimeout(function () {
    element.classList.add("remove")
    h1.style.cssText = "opacity: 0;";
}, 2000)

let arro = document.querySelector(".homee");
let leftDiv1 = document.getElementsByClassName("animate-slide-in-left")[0];
let leftDiv2 = document.getElementsByClassName("animate-slide-in-left")[1];
let rightDiv = document.getElementsByClassName("animate-slide-in-right")[0];
let leftDiv3 = document.getElementsByClassName("animate-slide-in-left1")[0];
let leftDiv4 = document.getElementsByClassName("animate-slide-in-left1")[1];
let leftDiv5 = document.getElementsByClassName("animate-slide-in-left1")[2];
let leftDiv6 = document.getElementsByClassName("animate-slide-in-left1")[3];
let leftDiv7 = document.getElementsByClassName("animate-slide-in-left1")[4];
let rightDiv3 = document.getElementsByClassName("animate-slide-in-right1")[0];
let rightDiv4 = document.getElementsByClassName("animate-slide-in-right1")[1];
let rightDiv5 = document.getElementsByClassName("animate-slide-in-right1")[2];
let rightDiv6 = document.getElementsByClassName("animate-slide-in-right1")[3];
let rightDiv7 = document.getElementsByClassName("animate-slide-in-right1")[4];
let topDiv1 = document.getElementsByClassName("animate-top-in-bottom")[0];
let topDiv2 = document.getElementsByClassName("animate-top-in-bottom")[1];
let topDiv3 = document.getElementsByClassName("animate-top-in-bottom")[2];
let topDiv4 = document.getElementsByClassName("animate-top-in-bottom")[3];
let topDiv5 = document.getElementsByClassName("animate-top-in-bottom")[4];
let bottomDiv1 = document.getElementsByClassName("animate-bottom-in-top")[0];
let bottomDiv2 = document.getElementsByClassName("animate-bottom-in-top")[1];
let bottomDiv3 = document.getElementsByClassName("animate-bottom-in-top")[2];
let bottomDiv4 = document.getElementsByClassName("animate-bottom-in-top")[3];

window.addEventListener('scroll', function () {
    if (this.scrollY >= 500) {
        arro.style.opacity = 1;
    } else {
        arro.style.opacity = 0;
    }
    
    if (this.scrollY >= 1100) {
        leftDiv1.style.cssText = "animation: animateslideinleft 3s ease-out forwards;";
        leftDiv2.style.cssText = "animation: animateslideinleft 3s ease-out forwards;";
        rightDiv.style.cssText = "animation: animateslideinright 3s ease-out forwards;";
    } else {
        leftDiv1.style.cssText = "animation: none;";
        leftDiv2.style.cssText = "animation: none;";
        rightDiv.style.cssText = "animation: none;";
    }
    
    if (this.scrollY >= 2274) {
        topDiv1.style.cssText = "animation: animatetopinbottom 2s ease-out forwards;";
        topDiv2.style.cssText = "animation: animatetopinbottom 2s ease-out forwards;";
        rightDiv3.style.cssText = "animation: animateslideinright1 2s ease-out forwards;";
        leftDiv3.style.cssText = "animation: animateslideinleft1 2s ease-out forwards;";
    } else {
        topDiv1.style.cssText = "animation: none;";
        topDiv2.style.cssText = "animation: none;";
        rightDiv3.style.cssText = "animation: none;";
        leftDiv3.style.cssText = "animation: none;";
    }
    
    if (this.scrollY >= 2760) {
        rightDiv4.style.cssText = "animation: animateslideinright1 2s ease-out forwards;";
        leftDiv4.style.cssText = "animation: animateslideinleft1 2s ease-out forwards;";
        bottomDiv1.style.cssText = "animation: animatebottomintop 2s ease-out forwards;";
        bottomDiv2.style.cssText = "animation: animatebottomintop 2s ease-out forwards;";
    } else {
        rightDiv4.style.cssText = "animation: none;";
        leftDiv4.style.cssText = "animation: none;";
        bottomDiv1.style.cssText = "animation: none;";
        bottomDiv2.style.cssText = "animation: none;";
    }
    
    if (this.scrollY >= 3211) {
        topDiv3.style.cssText = "animation: animatetopinbottom 2s ease-out forwards;";
        rightDiv5.style.cssText = "animation: animateslideinright1 2s ease-out forwards;";
        leftDiv5.style.cssText = "animation: animateslideinleft1 2s ease-out forwards;";
        bottomDiv3.style.cssText = "animation: animatebottomintop 2s ease-out forwards;";
    } else {
        topDiv3.style.cssText = "animation: none;";
        rightDiv5.style.cssText = "animation: none;";
        leftDiv5.style.cssText = "animation: none;";
        bottomDiv3.style.cssText = "animation: none;";
    }
    
    if (this.scrollY >= 3797) {
        topDiv4.style.cssText = "animation: animatetopinbottom 2s ease-out forwards;";
        leftDiv6.style.cssText = "animation: animateslideinleft1 2s ease-out forwards;";
        rightDiv6.style.cssText = "animation: animateslideinright1 2s ease-out forwards;";
    } else {
        topDiv4.style.cssText = "animation: none;";
        rightDiv6.style.cssText = "animation: none;";
        leftDiv6.style.cssText = "animation: none;";
    }

    if (this.scrollY >= 6096) {
        topDiv5.style.cssText = "animation: animatetopinbottom 2s ease-out forwards;";
        rightDiv7.style.cssText = "animation: animateslideinright1 2s ease-out forwards;";
        leftDiv7.style.cssText = "animation: animateslideinleft1 2s ease-out forwards;";
        bottomDiv4.style.cssText = "animation: animatebottomintop 2s ease-out forwards;";
    } else {
        topDiv5.style.cssText = "animation: none;";
        rightDiv7.style.cssText = "animation: none;";
        leftDiv7.style.cssText = "animation: none;";
        bottomDiv4.style.cssText = "animation: none;";
    }
})

