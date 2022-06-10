const button1 = document.querySelector('.form_button-submit'),
      form1 = document.querySelector('.form-section1'),
      form2 = document.querySelector('.form-section2'),
      form3 = document.querySelector('.form-section3'),
      number = document.querySelectorAll('.modal_number'),
      steps = document.querySelectorAll('.modal_steps-span'),
      button3Back = document.querySelector('.form-section3_back'),
      button3Next = document.querySelector('.form-section3_next'), 
      button2Back = document.querySelector('.form-section2_back'),
      button2Next = document.querySelector('.form-section2_next'),
      modal = document.querySelector('.modal');

button1.addEventListener('click',()=> {
    form1.classList.remove('section-show');
    form1.classList.add('section-hide');
    form2.classList.remove('section-hide');
    form2.classList.add('section-show');
});

button2Back.addEventListener('click',()=>{
    form2.classList.remove('section-show');
    form2.classList.add('section-hide');
    form1.classList.remove('section-hide');
    form1.classList.add('section-show');
})
button2Next.addEventListener('click',()=>{
    form2.classList.remove('section-show');
    form2.classList.add('section-hide');
    form3.classList.remove('section-hide');
    form3.classList.add('section-show');
    modal.classList.remove('contracted');
    modal.classList.add('extendet');
})
button3Back.addEventListener('click',()=>{
    form3.classList.remove('section-show');
    form3.classList.add('section-hide');
    form2.classList.remove('section-hide');
    form2.classList.add('section-show');
    modal.classList.add('contracted');
    modal.classList.remove('extendet');
})
button3Next.addEventListener('click',()=>{

})


