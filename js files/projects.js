const container = document.getElementById('container')
const imgsSrc = ['team-01.png', 
                  'team-02.png',
                  'team-03.png',
                  'team-04.png',
                  'team-05.png']


function fillSec(date, nameProj, projInfo, imgs, processes, progValue, price) {
  return `
  <section>
  <p class="date">${date}</p>
  <header>
    <h2>${nameProj}</h2>
    <p>${projInfo}</p>
  </header>
  <div class="developers">
    ${displayDevImgs(imgs)}
  </div>
  <div class="processes">
    ${displayProcesses(processes)}
  </div>
  <footer>
    <progress value="${progValue}"></progress>
    <p>$${price}</p>
  </footer>
  </section>
  `
}

function displayDevImgs(numImgs) {
  let result = ''
  for (let i = 0; i < numImgs; i++) {
    result += `<img src="../imgs/team-0${i+1}.png" />`;
  }
  return result
}

function displayProcesses(processes) {
  let result = ''
  for (let process of processes) {
    result += `<p>${process}</p>`
  }
  return result
}

// add each section alone
container.innerHTML += fillSec('15/10/2021', 'abdullah dashboard', 
                                'Elzero Dashboard Project Design And Programming And Hosting',
                                5,
                                ['design', 'programming', 'hosting', 'marketing'],
                                .5,
                                2500)

container.innerHTML += fillSec('23/5/2022', 'Academy Portal', 
                                'Academy Portal Project Design And Programming',
                                3,
                                ['design'],
                                .75,
                                1800)

container.innerHTML += fillSec('3/4/2022', 'mohsen dashboard', 
                                'Ahmed Dashboard Project Design And Programming And Hosting',
                                4,
                                ['programming', 'design', 'hosting', 'marketing'],
                                .6,
                                1700)

container.innerHTML += fillSec('3/1/2023', 'mohsen portal', 
                                'Ahmed Portal Project Design And Programming',
                                3,
                                ['programming', 'design'],
                                .6,
                                850)

container.innerHTML += fillSec('28/7/2022', 
                                'Mohamed Application', 
                                'Mohamed Application Project Design And Programming And Hosting',
                                5,
                                ['programming', 'design', 'hosting', 'marketing'],
                                .3,
                                950)

container.innerHTML += fillSec('5/9/2022', 'mohsen portal', 
                                'moshen portal Project Design',
                                3,
                                ['design'],
                                .7,
                                1650)

container.innerHTML += fillSec('5/9/2022', 'mohsen dashboard', 
                                'Ahmed Dashboard Project Design And Programming And Hosting',
                                4,
                                ['programming', 'design', 'hosting', 'marketing'],
                                .6,
                                1700)

container.innerHTML += fillSec('15/1/2022', 'academy portal', 
                                'academy portal Project Design And Programming',
                                3,
                                ['programming', 'design'],
                                .8,
                                1800)

container.innerHTML += fillSec('4/3/2022', 'chatting app', 
                                'chatting app Project Design And Programming And Hosting',
                                3,
                                ['design'],
                                .9,
                                950)