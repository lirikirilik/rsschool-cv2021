
// переводчик кастомный

const select = document.querySelector('.change-lang');
const allLang = ['en', 'ru'];
select.addEventListener('click',(e)=> changeLanguage(e.target.textContent));

// перенаправить на url с указанием языка который выбран пользователем

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
};


function changeLanguage(e) {
 let hash = e
  console.log(hash);
  if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#en';
      location.reload()
  }

  select.value = hash;
  console.log(select.value);
    document.querySelector('title').textContent = i18Obj['lang-tittle'][hash];
   
    for (let key in i18Obj) {
        let elem = document.querySelectorAll('.lng-' + key);
        
            elem.forEach((el)=>{
              el.textContent = i18Obj[key][hash];
            })
        
    }
};

// changeLanguage();





const anchors = document.querySelectorAll('.header_list a[href="#"]')

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


const winter  = document.querySelector("#winter");
const foto1  = document.querySelector("#portfolio-image-1");
const foto2  = document.querySelector("#portfolio-image-2");
const foto3  = document.querySelector("#portfolio-image-3");
const foto4  = document.querySelector("#portfolio-image-4")
const foto5  = document.querySelector("#portfolio-image-5");
const foto6  = document.querySelector("#portfolio-image-6");

winter.addEventListener("click", winterHandler);
function winterHandler(e) {
  foto1.src= "./assets/img/winter/1.jpg";
  foto2.src= "./assets/img/winter/2.jpg";
  foto3.src= "./assets/img/winter/3.jpg";
  foto4.src= "./assets/img/winter/4.jpg";
  foto5.src= "./assets/img/winter/5.jpg";
  foto6.src= "./assets/img/winter/6.jpg";
}

const spring  = document.querySelector("#spring");
spring.addEventListener("click", springHandler);
function springHandler(e) {
  foto1.src= "./assets/img/spring/1.jpg";
  foto2.src= "./assets/img/spring/2.jpg";
  foto3.src= "./assets/img/spring/3.jpg";
  foto4.src= "./assets/img/spring/4.jpg";
  foto5.src= "./assets/img/spring/5.jpg";
  foto6.src= "./assets/img/spring/6.jpg";
}


const summer  = document.querySelector("#summer");
summer.addEventListener("click", summerHandler);
function summerHandler(e) {
  foto1.src= "./assets/img/summer/1.jpg";
  foto2.src= "./assets/img/summer/2.jpg";
  foto3.src= "./assets/img/summer/3.jpg";
  foto4.src= "./assets/img/summer/4.jpg";
  foto5.src= "./assets/img/summer/5.jpg";
  foto6.src= "./assets/img/summer/6.jpg";
}

const autumn  = document.querySelector("#autumn");
autumn.addEventListener("click", autumnHandler);
function autumnHandler(e) {
  foto1.src= "./assets/img/autumn/1.jpg";
  foto2.src= "./assets/img/autumn/2.jpg";
  foto3.src= "./assets/img/autumn/3.jpg";
  foto4.src= "./assets/img/autumn/4.jpg";
  foto5.src= "./assets/img/autumn/5.jpg";
  foto6.src= "./assets/img/autumn/6.jpg";
}

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("portfolio-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
};



// кнопки все
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var allButtons = document.getElementsByClassName("header_link");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', animateButton, false);
};



let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
  page.classList.toggle('light-theme');
};





// // локалка
// const selectlang = document.querySelector('.change-lang');
// selectlang.addEventListener('click',(e)=> UserLocalStorage(e.target.textContent));

// function UserLocalStorage(e) {
//   let hash = e
//   console.log("Твой язык");
//    console.log(hash);
//    localStorage.setItem('lang:', hash)
//   }
//   // let theme = document.getElementById('on');
//   // theme.addEventListener('change',(e)=> themeLocalStorage(e.target.textContent));
//   // function themeLocalStorage(e) {
//   //   let temaUser = e
//   //   console.log("Твоя тема:");
//   //    console.log(temaUser);
//   //    localStorage.setItem('tema:', temaUser)
//   //   }

//   window.addEventListener('beforeunload', UserLocalStorage)


// // function setLocalStorage() {
// //  localStorage.setItem('lang', lang);
// //  localStorage.setItem('light-them', Light);
// // }
// // window.addEventListener('beforeunload', setLocalStorage)

// // function getLocalStorage() {
// //  if(localStorage.getItem('lang')) {
// //    const lang = localStorage.getItem('lang');
// //    getTranslate(lang);
// //  }
// // }
// // window.addEventListener('load', getLocalStorage)