// global variables ;))
const burger = document.querySelector('.burger ');
const navBlock = document.querySelector('.nav__block');
const inputBlocks = [...document.querySelectorAll('.input')];
const sendBtn  = document.querySelector('.send_btn ');
const formOutput  = document.querySelector('.form_output ');
const warringOutput = document.querySelectorAll('.warringOutput')
// functions

const chekForm = ()=>{
    if (inputBlocks[0].value == '') {
        warringOutput[0].textContent = 'please write your name';
    }
    if (inputBlocks[1].value == '') {
        warringOutput[1].textContent = 'please write your email';
    }
    if (inputBlocks[2].value == '') {
        warringOutput[2].textContent = 'please write your subject';
    }
    if (inputBlocks[3].value == '') {
        warringOutput[3].textContent = 'please write your text';
    }else{
        formOutput.innerHTML = 'Thank you for your intereset for us, your message has been sent!';
    }
}
sendBtn.addEventListener('click',()=>{
    chekForm();
});

// eventlisteners
burger.addEventListener('click',()=>{
    navBlock.classList.toggle('open_nav');
    document.querySelector('.burger').classList.toggle('open_burger');
})