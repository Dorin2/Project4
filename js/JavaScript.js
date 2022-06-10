const button = document.querySelector('.form_button-submit'),
      form1 = document.querySelector('.form-section1'),
      form2 = document.querySelector('.form-section2'),
      form3 = document.querySelector('.form-section3'),
      number = document.querySelectorAll('.modal_number'),
      steps = document.querySelectorAll('.modal_steps-span');

button.addEventListener('click',()=> {
    form1.classList.remove('section-show');
    form1.classList.add('section-hide');
    form2.classList.remove('section-hide');
    form2.classList.add('section-show');
});

