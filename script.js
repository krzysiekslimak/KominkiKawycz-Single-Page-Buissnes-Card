document.addEventListener('DOMContentLoaded', function () {
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    const nav = document.querySelector('.navbar')

    allNavItems.forEach(
        item => item.addEventListener('click', () => navList.classList.remove('show'))
    )

    function addShadow () {
        if(window.scrollY >= 250){
            nav.classList.add('shadow-bg')
        }else{
            nav.classList.remove('shadow-bg')
        }
    }
window.addEventListener('scroll', addShadow )
})