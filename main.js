const navLinks = document.querySelectorAll('#navLink')

for (const link of navLinks) {
  if (link.innerHTML === document.title) {

    link.parentElement.classList.add('hover')
  }
}