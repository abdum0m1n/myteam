const modal = document.querySelector('.nv-modal')
const menu = document.querySelector('.menu')
const x = document.querySelector('.ix')


menu.addEventListener('click' , ()=>{
    modal.style.display = 'block'
})
x.addEventListener('click' , ()=>{
    modal.style.display = 'none'
})