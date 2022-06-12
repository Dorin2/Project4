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
      modal = document.querySelector('.modal'),
      step1 = document.querySelector('.step1'),
      step2 = document.querySelector('.step2'),
      step3 = document.querySelector('.step3'),
      number1 = document.querySelector('.number1'),
      number2 = document.querySelector('.number2'),
      number3 = document.querySelector('.number3'),
      modalLine1 = document.querySelector('p.modal_line1'),
      modalLine2 = document.querySelector('p.modal_line2');

button1.addEventListener('click',()=> {
    number1.classList.remove('number-active');
    number1.classList.add('number-disable');
    number2.classList.add('number-active');
    number2.classList.remove('number-disable');
    modalLine1.classList.remove('line-disable');
    modalLine1.classList.add('line-active');
    step1.classList.remove('steps-active');
    step1.classList.add('steps-disable');
    step2.classList.remove('steps-disable');
    step2.classList.add('steps-active');
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
    step2.classList.remove('steps-active');
    step2.classList.add('steps-disable');
    step1.classList.remove('steps-disable');
    step1.classList.add('steps-active');
    number2.classList.remove('number-active');
    number2.classList.add('number-disable');
    number1.classList.add('number-active');
    number1.classList.remove('number-disable');
    modalLine1.classList.add('line-disable');
    modalLine1.classList.remove('line-active');
    
})
button2Next.addEventListener('click',()=>{
    form2.classList.remove('section-show');
    form2.classList.add('section-hide');
    form3.classList.remove('section-hide');
    form3.classList.add('section-show');
    modal.classList.remove('contracted');
    modal.classList.add('extendet');
    step2.classList.remove('steps-active');
    step2.classList.add('steps-disable');
    step3.classList.remove('steps-disable');
    step3.classList.add('steps-active');
    number2.classList.remove('number-active');
    number2.classList.add('number-disable');
    number3.classList.add('number-active');
    number3.classList.remove('number-disable');
    modalLine1.classList.add('line-disable');
    modalLine1.classList.remove('line-active');
    modalLine2.classList.remove('line-disable');
    modalLine2.classList.add('line-active');
})
button3Back.addEventListener('click',()=>{
    form3.classList.remove('section-show');
    form3.classList.add('section-hide');
    form2.classList.remove('section-hide');
    form2.classList.add('section-show');
    modal.classList.add('contracted');
    modal.classList.remove('extendet');
    step3.classList.remove('steps-active');
    step3.classList.add('steps-disable');
    step2.classList.remove('steps-disable');
    step2.classList.add('steps-active');
    number3.classList.remove('number-active');
    number3.classList.add('number-disable');
    number2.classList.add('number-active');
    number2.classList.remove('number-disable');
    modalLine2.classList.remove('line-active');
    modalLine2.classList.add('line-disable');
    modalLine1.classList.remove('line-disable');
    modalLine1.classList.add('line-active');
})
button3Next.addEventListener('click',()=>{

})

function testFunction () {
    let name = document.getElementById("select-file").value;
    const span = document.getElementById("display-image");
    name = name.replace(/.*[\/\\]/, '');
    if(name.length > 0){
        span.innerHTML = name;
    } else {
        span.innerHTML = 'Upload<br> file';
    };
    
  };

  
