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