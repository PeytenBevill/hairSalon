const nav = document.getElementById('navLinks')
const menu = document.getElementById('menu')

menu.addEventListener('click', () => {
  nav.classList.toggle('open')
  if (menu.innerHTML === 'X') {
    menu.innerHTML = '<i class="fa fa-bars"></i>'
  } else {
    menu.innerHTML = 'X'
  }
})