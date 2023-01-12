const content = document.querySelectorAll('#content')
const caption = [
  'Access All Text Lessons',
  'Access All videos Lessons',
  'appear on leaderboard',
  'browse content without ads',
  'access all assignments',
  'get daily prizes',
  'earn certificate',
  '1 GB space for hosting files',
  'access badge system'
]
function displayP(icon, caption) {
  return `
    <p>
      <i class="material-icons">${icon}</i>
      <span>${caption}</span>
      <i class="material-icons">info</i>
    </p>
  `
}

for (let i = 0; i < 9; i++) {
  if (i < 3) {
    content[0].innerHTML += displayP('done', caption[i])
  } else {
    content[0].innerHTML += displayP('clear', caption[i])
  }
}
for (let i = 0; i < 9; i++) {
  if (i < 7) {
    content[1].innerHTML += displayP('done', caption[i])
  } else {
    content[1].innerHTML += displayP('clear', caption[i])
  }
}
for (let i = 0; i < 9; i++) {
  content[2].innerHTML += displayP('done', caption[i])
}

// content[0].querySelectorAll('p')

content.forEach(cnt => {
  for (let ele of cnt.querySelectorAll('p')) {
    if (ele.querySelector('i:first-child').innerText === 'done') {
      ele.querySelector('i:first-child').classList.add('green')
    } else {
      ele.querySelector('i:first-child').classList.add('red')
    }
  }
})