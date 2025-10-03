let arro = document.querySelector(".homee");

window.onscroll = function (e) {
    if (this.scrollY >= 500) {
        arro.style.opacity = 1;
    } else {
        arro.style.opacity = 0;
    }
}