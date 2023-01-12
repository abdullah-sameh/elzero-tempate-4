const container = document.getElementById('container')
function displaySection(i, courseName, courseInfo, views, price) {
  return `
  <section>
    <img src="../imgs/course-0${i}.jpg" alt="">
    <img src="../imgs/team-0${i}.png" alt="" class="team-img">
    <header>
      <h2>${courseName}</h2>
      <p>${courseInfo}</p>
    </header>
    <button>course info</button>
    <footer>
      <div class="left">
        <i class="material-icons">person</i>
        <p>${views}</p>
      </div>
      <div class="right">
        <i class="material-icons">attach_money</i>
        <p>${price}</p>
      </div>
    </footer>
  </section>
  `
} 

const coursesName = [
  'HTML fundmental',
  'CSS fundmental',
  'master CSS & layouts',
  'fundemental of programming',
  'master JavaScript',
  'PHP course',
  'python course',
  'data structure course',
  'responsive web design'
]
const coursesInfo = [
  'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
  'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
  'Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints',
  'PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases',
  'Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering',
  'PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases',
  'Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life',
  'Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints',
  'Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering',
]

for (let i in coursesName) {
  container.innerHTML += displaySection(Number(i)+1, coursesName[i], coursesInfo[i], 100, Math.floor(Math.random()*(2001)+1000)) 
}