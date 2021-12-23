const btn1 = document.querySelector('#p1')
const p1 = document.querySelector('#p1Display')

const btn2 = document.querySelector('#p2')
const p2 = document.querySelector('#p2Display')

const btn3 = document.querySelector('#reset')

var select = document.querySelector('#playto')

btn1.addEventListener('click', function () {
    if(p1.innerHTML != select.value && p2.innerHTML !=select.value){
        p1.innerHTML++;
    }
    if(p1.innerHTML == select.value){
        p1.classList.add('green')
        p2.classList.add('red')
        buttonDisabled();
    }
})

btn2.addEventListener('click', function () {
    if(p1.innerHTML != select.value && p2.innerHTML !=select.value){
        p2.innerHTML++;
    }
    if(p2.innerHTML == select.value){
        p2.classList.add('green')
        p1.classList.add('red')
        buttonDisabled();
    }
    
})


btn3.addEventListener('click', function () {
    p1.innerHTML = '0';
    p2.innerHTML = '0';
    p1.classList.remove('red');
    p2.classList.remove('red')
    p1.classList.remove('green');
    p2.classList.remove('green')
    btn1.disabled = false;
    btn2.disabled = false;
})

function buttonDisabled(){
    btn1.disabled = true;
    btn2.disabled = true;
}
