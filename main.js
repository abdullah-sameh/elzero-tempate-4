const navLinks = document.querySelectorAll('#navLink')

// for display hove effect on a link that reffer to current page
for (const link of navLinks) {
  if (link.innerText.split('\n')[1] === document.title) {
    link.parentElement.classList.add('hover')
  }
}