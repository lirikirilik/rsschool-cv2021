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


console.log('Ваша отметка - 85 балла(ов) Отзыв по пункам ТЗ:Все пункты выполнены полностью!')