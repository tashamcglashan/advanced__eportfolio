

// template_8rztm4p

// service_7cq6dwl
 
// T_F1alv7ex-OMoriD
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle){
        document.body.classList += " dark-theme"
}
else{
    document.body.classList.remove("dark-theme")
}
}

function contact(event) {

    event.preventDefault();
    
    // Get the loading and success elements
    
    const loading = document.querySelector(".modal__overlay--loading");
    
    const success = document.querySelector(".modal__overlay--success");
    
    // Show the loading spinner
    
    loading.classList.add("modal__overlay--visible");
    
    emailjs
    
     .sendForm(
    
    "service_7cq6dwl",
    
    "template_8rztm4p",
    
    event.target,
    
    "T_F1alv7ex-OMoriD"
    
     )
    
     .then(() => {
    
    loading.classList.remove("modal__overlay--visible");
    
    success.classList.add("modal__overlay--visible");
    
     })
    
     .catch(() => {
    
    loading.classList.remove("modal__overlay--visible");
    
    alert(
    
    "The email service is temporarily unavailable. Please contact me directly at tmcglashan77@gmail.com"
    
     );
    
     });
    
    }
    
    function toggleModal() {   //toggle modal
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList.add("modal--open");
       console.log('toggleModal()')
    }
