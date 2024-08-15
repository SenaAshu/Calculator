const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(item.id=='C'){
            display.innerHTML = '';
        }
        else if(item.id=='backspace'){
            let string = display.innerHTML.toString();
            display.innerHTML = string.substring(0,string.length-1)
        }
        else if(display.innerHTML !='' && item.id == "equalTo"){
            // display.innerHTML = eval(display.innerText)
            display.innerHTML = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
            // display.innerHTML
        }
        else if(display.innerHTML =='' && item.id == "equalTo"){
            display.innerHTML = 'Empty!'
            setTimeout(()=>{
                display.innerHTML=''
            },2000)
        }
        else{
            display.innerHTML += item.innerHTML;
        }
    })
})

const lightMode = document.querySelector('.theme-changing-button')
const myContainer = document.querySelector('.container')
const theme_changer = document.querySelector('.theme-changer')
const displayInput = document.querySelector('.display')
const brackets= document.querySelectorAll('.switch.bracket')
const mathematicalTerms = document.querySelectorAll('.switch.math')
const mainBackgroundColor = document.getElementById('body')


lightMode.addEventListener('click',()=>{
    myContainer.classList.toggle('light-mode')
    lightMode.classList.toggle('theme-changing-button2')
    displayInput.classList.toggle('display2')
    mainBackgroundColor.classList.toggle('body-backgroundColor-change')

    brackets.forEach((bracket) => {
        if (myContainer.classList.contains('light-mode')) {
            // Light mode styles
            bracket.style.color = '#1B4D3E';
            bracket.style.backgroundColor = '#ACE1AF';
        } else {
            // Dark mode styles (default)
            bracket.style.color = ''; 
            bracket.style.backgroundColor = ''; 
        }
    },

    mathematicalTerms.forEach((math)=>{
        if(myContainer.classList.contains('light-mode')){
            math.style.color = '#002D62'
            math.style.backgroundColor = '#89CFF0'
        }else{
            math.style.color = '';
            math.style.backgroundColor = '';
        }
    })
)})
