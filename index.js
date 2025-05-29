const NUMBERS_CONTAINER = document.querySelector('.numbers')

const onNumberClick = (e) => {
    console.log(e.target)
}   

NUMBERS_CONTAINER.addEventListener('click', onNumberClick)

