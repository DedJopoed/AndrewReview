const NUMBERS_CONTAINER = document.querySelector('.numbers');
const INPUT_CONTAINER = document.querySelector('.input-container');
const input_array = [];

const onNumberClick = (e) => {
    const { target } = e;
    if (target.classList.contains('number-el')) {
        if(target.innerHTML !== `&lt;`) {
            input_array.push(target.innerHTML)
        }
        else if(target.innerHTML == `&lt;`) {
            input_array.pop()
        }
        
        INPUT_CONTAINER.innerHTML = input_array.join(' ')
    }
    
}   

NUMBERS_CONTAINER.addEventListener('click', onNumberClick)

