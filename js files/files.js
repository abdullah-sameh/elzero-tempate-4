const container = document.getElementById('container')
const fileType = ['dll', 'avi', 'eps', 'pdf']

function displaySec(fileType, name, date, size) {
  return `
  <section>
    <i class="material-icons">download</i>
    <header>
      <img src="../imgs/${fileType}.svg" alt="">
      <h2>my-file.${fileType}</h2>
    </header>
    <p>${name}</p>
    <footer>
      <p>${date}</p>
      <p>${size}MB</p>
    </footer>
  </section>
  `
}

const names = ['abdo', 'mosen', 'alaa', 'ali']
for (let i = 0; i < 20; i++) {
  container.innerHTML += displaySec(fileType[Math.floor(Math.random()*3)], names[Math.floor(Math.random()*3)], `${Number(i)+1}/5/2021`, `1${i}0.3`)
}