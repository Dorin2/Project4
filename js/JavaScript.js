const button = document.querySelector('.form_button-submit'),
      form = document.querySelector('.form'),
      number = document.querySelectorAll('.modal_number'),
      steps = document.querySelectorAll('.modal_steps-span');

button.addEventListener('click',()=>{
    form.classList.add('active');
    form.classList.remove('disable');
});

