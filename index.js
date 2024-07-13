function openForm() {
    document.getElementById("popupForm").style.display = "flex";
}

function contact(event){
   event.preventDefault()
   let email = document.getElementById("email").value;
   let firstname = document.getElementById('firstname').value;
   let lastname = document.getElementById('lastname').value;
   let terms = document.getElementById('terms').checked;
   console.log(email,firstname,lastname,terms)
   
   document.getElementById("email").value = '';
   document.getElementById('firstname').value = '';
   document.getElementById('lastname').value = '';
   document.getElementById('terms').checked = false;

}

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
    removeActiveClasses();
    event.currentTarget.classList.add('active');
}

function removeActiveClasses() {
    const items = document.querySelectorAll('.content-item');
    items.forEach(item => {
        item.classList.remove('active');
    });
}


