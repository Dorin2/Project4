"use strict";
window.addEventListener('DOMContentLoaded',() => {
// Form submit ====================================================================================================================================
    const button1 = document.querySelector('.form_button-submit'),
          form1 = document.querySelector('.form-section1'),
          form2 = document.querySelector('.form-section2'),
          form3 = document.querySelector('.form-section3'),
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

//Add cards Services using class=======================================================================
    class MenuCard{
        constructor(src, alt, title, li1, li2, li3, li4, li5, li6, parentSelector){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.li1 = li1;
            this.li2 = li2;
            this.li3 = li3;
            this.li4 = li4;
            this.li5 = li5;
            this.li6 = li6;
            this.parent = document.querySelector(parentSelector);
        }
        render(){
            const element = document.createElement('div');
            element.classList.add('shadow');
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
                    <h4 class="services_titleH4">${this.title}</h4>
                    <ul class="services_ul">
                        <li>${this.li1}</li>
                        <li>${this.li2}</li>
                        <li>${this.li3}</li>
                        <li>${this.li4}</li>
                        <li>${this.li5}</li>
                        <li>${this.li6}</li>
                    </ul>
                    <div class="services_request-container"><a href="#"class="services_leave-request">Leave a request →</a></div>     
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "./img/wallpaper-image5.png",
        "Literary translation",
        "Literary translation",
        "the passport",
        "water certificates",
        "evidence",
        "identity card",
        "protocols",
        "founding documents",
        ".selectorClass"
    ).render();
    new MenuCard(
        "./img/wallpaper-image6.png",
        "Interpretation",
        "Interpretation",
        "the passport",
        "water certificates",
        "evidence",
        "identity card",
        "protocols",
        "founding documents",
        ".selectorClass"
    ).render();
    new MenuCard(
        "./img/wallpaper-image7.png",
        "Notarial certification",
        "Notarial certification",
        "the passport",
        "water certificates",
        "evidence",
        "identity card",
        "protocols",
        "founding documents",
        ".selectorClass"
    ).render();
    new MenuCard(
        "./img/wallpaper-image8.png",
        "statement",
        "statement",
        "the passport",
        "water certificates",
        "evidence",
        "identity card",
        "protocols",
        "founding documents",
        ".selectorClass"
    ).render();
// Slider ====================================================================================================================================
    const sliderButtonBack = document.querySelector("button.slider_button1"),
          sliderButtonNext = document.querySelector("button.slider_button2"),
          sliderImg = document.querySelectorAll(".slider_image img");
    let offset = 0;
    
    sliderButtonNext.addEventListener('click',()=>{
        offset += 370;
        sliderImg.forEach(img => {
            img.style.transform = `translateX(-${offset}px)`;
        });
        
        if(offset ==740){
            translate();
        };
    });
    sliderButtonBack.addEventListener('click',()=>{
        offset += 370;
        sliderImg.forEach(img => {
            img.style.transform = `translateX(${offset}px)`;
        });
        if(offset ==740){
            translate();
        };
    });
// Butoon Function =============================================================================================================================================>
function translate(){
    offset = 0;
    sliderImg.forEach(img => {
        img.style.transform = `translateX(${offset}px)`;
    });
};
// Slider ===============================================================================================================================================================>
// Questions and answers ===============================================================================================================================================================>
const QuestionOpen = document.querySelectorAll('button.question-open'),
      QuestionClose = document.querySelectorAll('button.question-close'),
      QuestionAnswer = document.querySelectorAll('.question-answers_description-bottom1'),
      QuestionP = document.querySelectorAll('.questions-answers_description-detailed p strong');

QuestionP.forEach((p)=>{
    p.addEventListener('click',(e)=>{
        if(p === QuestionP[0]){
            QuestionAnswer[0].classList.toggle('description-active');
            QuestionAnswer[0].classList.toggle('description-disable');
            QuestionOpen[0].classList.toggle('question-disable');
            QuestionClose[0].classList.toggle('question-active');
        };
        if (p === QuestionP[1]) {
            QuestionAnswer[1].classList.toggle('description-active');
            QuestionAnswer[1].classList.toggle('description-disable');
            QuestionOpen[1].classList.toggle('question-disable');
            QuestionClose[1].classList.toggle('question-active');
        }
         else if(p === QuestionP[2]){
            QuestionAnswer[2].classList.toggle('description-active');
            QuestionAnswer[2].classList.toggle('description-disable');
            QuestionOpen[2].classList.toggle('question-disable');
            QuestionClose[2].classList.toggle('question-active');
        }else if(p === QuestionP[3]){
            QuestionAnswer[3].classList.toggle('description-active');
            QuestionAnswer[3].classList.toggle('description-disable');
            QuestionOpen[3].classList.toggle('question-disable');
            QuestionClose[3].classList.toggle('question-active');
        }else if(p === QuestionP[4]){
            QuestionAnswer[4].classList.toggle('description-active');
            QuestionAnswer[4].classList.toggle('description-disable');
            QuestionOpen[4].classList.toggle('question-disable');
            QuestionClose[4].classList.toggle('question-active');
        }else if(p === QuestionP[5]){
            QuestionAnswer[5].classList.toggle('description-active');
            QuestionAnswer[5].classList.toggle('description-disable');
            QuestionOpen[5].classList.toggle('question-disable');
            QuestionClose[5].classList.toggle('question-active');
        }
    })
})

QuestionOpen.forEach((open1) => {
    open1.addEventListener('click',(e)=>{
        if (open1 === QuestionOpen[0]) {
            open(QuestionOpen[0],QuestionClose[0],QuestionAnswer[0]);  
        };
        if (open1 === QuestionOpen[1]) {
            open(QuestionOpen[1],QuestionClose[1],QuestionAnswer[1]);  
        };
        if (open1 === QuestionOpen[2]) {
            open(QuestionOpen[2],QuestionClose[2],QuestionAnswer[2]);  
        };
        if (open1 === QuestionOpen[3]) {
            open(QuestionOpen[3],QuestionClose[3],QuestionAnswer[3]);  
        };
        if (open1 === QuestionOpen[4]) {
            open(QuestionOpen[4],QuestionClose[4],QuestionAnswer[4]);  
        };
        if (open1 === QuestionOpen[5]) {
            open(QuestionOpen[5],QuestionClose[5],QuestionAnswer[5]);  
        };
    })
});
QuestionClose.forEach((close1) => {
    close1.addEventListener('click',(e)=>{
        if (close1 === QuestionClose[0]) {
            close(QuestionOpen[0],QuestionClose[0],QuestionAnswer[0]);
        };
        if (close1 === QuestionClose[1]) {
            close(QuestionOpen[1],QuestionClose[1],QuestionAnswer[1]);  
        };
        if (close1 === QuestionClose[2]) {
            close(QuestionOpen[2],QuestionClose[2],QuestionAnswer[2]);  
        };
        if (close1 === QuestionClose[3]) {
            close(QuestionOpen[3],QuestionClose[3],QuestionAnswer[3]);  
        };
        if (close1 === QuestionClose[4]) {
            close(QuestionOpen[4],QuestionClose[4],QuestionAnswer[4]);  
        };
        if (close1 === QuestionClose[5]) {
            close(QuestionOpen[5],QuestionClose[5],QuestionAnswer[5]);  
        };
    })
});
// QuestionOpen[0].addEventListener('click',()=>{
//     open(QuestionOpen[0],QuestionClose[0]);
// });
// QuestionClose[0].addEventListener('click',()=>{
//     close(QuestionOpen[0],QuestionClose[0]);
// })
function open(open,close,answer){
    open.classList.remove('question-active');
    open.classList.add('question-disable');
    close.classList.remove('question-disable');
    close.classList.add('question-active');
    answer.classList.remove('description-disable');
    answer.classList.add('description-active');
};
function close(open,close,answer){
    close.classList.remove('question-active');
    close.classList.add('question-disable');
    open.classList.remove('question-disable');
    open.classList.add('question-active');
    answer.classList.add('description-disable');
    answer.classList.remove('description-active');
};
    

// Questions and answers ===============================================================================================================================================================>
// Cost calculation ===============================================================================================================================================================>

});
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