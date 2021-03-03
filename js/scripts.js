const button = document.getElementById('button-share')
const cardShow = document.getElementById('card-show')

button.addEventListener('click', () =>{
    button.classList.toggle('card-buttom__share--active')
    cardShow.classList.toggle('card-show--active')
})