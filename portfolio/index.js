const anchors = document.querySelectorAll('.header_list a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()
   
  const blockID = anchor.getAttribute('href').substr(1)
   
  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
  })
  })
}



console.log ("Моя оценка 100-110 баллов \n 1) Вёрстка валидная +10 \n 2) Вёрстка семантическая +20 \n 3) Вёрстка соответствует макету +48 \n 4) Требования к css выполнены + 12 \n 5) Интерактивность, реализована через css +20 " )


// fo Burger
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}