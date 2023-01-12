const container = document.getElementById('container')

function displaySec(imgNum, devName, friendNum, projNum, articlesNum, joinDate) {
  return `
    <section>
      <div class="contact">
        <i class="material-icons">call</i>
        <i class="material-icons">mail</i>
      </div>
      <header>
        <img src="../imgs/friend-0${imgNum}.jpg" alt="">
        <h2>${devName[0]}</h2>
        <p>${devName[1]}</p>
      </header>
      <div class="status">
        <p><i class="material-icons">face</i> ${friendNum} friend</p>
        <p><i class="material-icons">backup_table</i> ${projNum} projects</p>
        <p><i class="material-icons">newspaper</i> ${articlesNum} articles</p>
      </div>
      <footer>
        <div class="left">
          <p>Joined ${joinDate}</p>
        </div>
        <div class="right">
          <button>profile</button>
          <button>remove</button>
        </div>
      </footer>
    </section>  
  `
}

const devNames = [
  ['ahmed nasser', 'JavaScript Developer'],
  ['omar fathy', 'cloud developer'],
  ['omar sameh', 'front-end developer'],
  ['ali abdo', 'mobile developer'], 
  ['mohamed el-said', 'back-end developer'],
  ['fayed emad', 'graphic disigner'], 
  ['momen wael', 'front-end developer'], 
  ['unknown', 'algorithm developer'],
  ['alaa abd-elfatah', 'content creator']
]

for (let i in devNames) {
  console.log('hey')
  container.innerHTML += displaySec(
    Number(i)+1,
    devNames[i],
    Math.floor(Math.random()*31+70),
    Math.floor(Math.random()*20+10),
    Math.floor(Math.random()*25),
    `0${i}/03/2021`
  )
}