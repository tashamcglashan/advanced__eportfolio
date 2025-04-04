// template_8rztm4p 
// service_7cq6dwl
// T_F1alv7ex-OMoriD 

function contact(event) {
 event.preventDefault();
// emailjs
  //  .sendForm(
    //    'service_7cq6dwl',
      //  'template_8rztm4p',
        //event.target,
      //'T_F1alv7ex-OMoriD'
    //).then(() => {
   //     console.log('this worked')
   // })
   const loading = document.querySelector('modal__overlay--loading');
   const success = document.querySelector('modal__overlay--success');
   loading.classList += " modal__overlay--visible";
   setTimeout(() => {
    console.log('it worked3')
   }, 500);
}
