
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')
search=document.querySelector('.search')
searcharea=document.querySelector('.vissible')




burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');   
})

search.addEventListener('click',()=>{
    searcharea.classList.toggle('vissible')

})