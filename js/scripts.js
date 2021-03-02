const share = document.getElementById('share');

const removeClass = (element) => {
    element.target.classList.remove('card-show--active')
    element.target.parentElement.classList.remove('card-show--active')
}

share.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-show--active')) {
        removeClass(e)
    } else if (e.target.classList.contains('card-show__img')) {
        removeClass(e)
    }
    
    if (e.target.classList.contains('card-buttom__share')) {
        e.target.parentElement.nextElementSibling.classList.add('card-show--active')
    }
})

    /*
    notas:

    Arreglar o tratar de hacer funcionar: 
    
    if (e.target.classList.contains('card-buttom') && e.target.nextElementSibling.classList.contains('card-show')) {
        e.target.nextElementSibling.classList.add('card-show--active')
    }else

    posible solucion (nuevo bug a arreglar):
    else if(e.target.parentElement.classList.contains('footer'))  e.target.parentElement.children[1].classList.add('card-show--active')
    
    */