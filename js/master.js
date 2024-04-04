
// start toggle
let sittingBox = document.querySelector('.sitting-box')
let open = document.querySelector('.fa-gear');
open.onclick = function (){
    this.classList.toggle('fa-spin')
    sittingBox.classList.toggle('open')
}
// end toggle


// start color box
if(localStorage.getItem('data-color')){
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('data-color'))
    //remove class active
    let removeActive = document.querySelectorAll(".colors-list li")
    removeActive.forEach(li => {
        li.classList.remove('active')
        //add class active to clicked item
        if(li.dataset.color === localStorage.getItem('data-color')) {
            li.classList.add("active");
        }
    })
}
let colorsli = document.querySelectorAll('.colors-list li');
colorsli.forEach((li) => {
    li.addEventListener('click', (e)=> {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem("data-color", e.target.dataset.color);
        //remove active class
        handleActive(e)
    } )
    })
localStorage.getItem('data-color');
// end color box

// function and setinteral let for chose if you awnt back ground switch or no
let backgroundOption = true
let backRandomIntervel;


let backgroundLocalstorage = localStorage.getItem('background-option');

if(backgroundLocalstorage !== null) {
    if(backgroundLocalstorage === 'true') {
        backgroundOption = true
    }else {
        backgroundOption = false
    }
}



// start background random box 
let backgroundRandom = document.querySelectorAll('.background-random-box span');
backgroundRandom.forEach((span) => {
    span.addEventListener('click', (e)=> {
        //remove active class
        handleActive(e)
        // chose if you want background switch or not
        if(e.target.dataset.background === 'yes') {
            backgroundOption = true
            backgroundsfunction()
            localStorage.setItem('background-option', true)
        }else {
            backgroundOption = false
            clearInterval(backRandomIntervel)
            localStorage.setItem('background-option', false)
        }
    })
})
// end background random box 

// start backgrounda switch






// function to hide mouse and swich it with orange point
function moveCustomPointer(event) {
const customPointer = document.getElementById('custom-pointer');
customPointer.style.left = event.clientX + 'px';
customPointer.style.top = event.clientY + 'px';
}

// Show the custom pointer when the mouse enters the window
document.addEventListener('mouseenter', function() {
document.getElementById('custom-pointer').style.display = 'block';
});

// Hide the custom pointer when the mouse leaves the window
document.addEventListener('mouseleave', function() {
document.getElementById('custom-pointer').style.display = 'none';
});

// Move the custom pointer on mousemove
document.addEventListener('mousemove', moveCustomPointer);




// Function to move the highlight element to follow the mouse pointer
function moveHighlight(event) {
    const highlight = document.getElementById('highlight');
    const x = event.clientX - highlight.offsetWidth / 2.6;
    const y = event.clientY - highlight.offsetHeight / 2.5;
    highlight.style.transform = `translate(${x}px, ${y}px)`;
}
  // Listen for mousemove event to move the highlight element
document.addEventListener('mousemove', moveHighlight);






// Function to write words dynamically
function writeAndRepeat(words, index, speed, repeat) {
if (index < words.length) {
    document.getElementById('text').innerText += words[index];
    index++;
    setTimeout(function() {
    writeAndRepeat(words, index, speed, repeat);
    }, speed);
} else {
    setTimeout(function() {
    document.getElementById('text').innerText = ''; // Clear the text
    if (repeat) {
        writeAndRepeat(words, 0, speed, repeat); // Repeat if necessary
    }
    }, speed * 40); // Wait for a brief moment before repeating
}
}

// Words to be written
    const wordsToWrite = 'creative';
    const speed = 100; // Speed of writing (milliseconds per character)
    const repeat = true; // Whether to repeat after writing

    // Call the function to start writing and repeating the words
writeAndRepeat(wordsToWrite, 0, speed, repeat);
















// let main = document.querySelector('.landing-page');
// let images = [ 'template2', 'template3', 'template4', 'template5', 'template6', 'template7'];
// // end backgrounda switch

// // backgrounda switch option yes or no
// function backgroundsfunction() {
//     backRandomIntervel = setInterval(() => {
//         let rand = Math.floor(Math.random() * images.length) 
//         main.style.backgroundImage = 'url(./imgs/'+ images[rand] +'.png)';
//         main.style.opcity = 1
//     }, 6000);
// }

// if(backgroundOption === true) {
//     backgroundsfunction()
// }else {
//     clearInterval(backRandomIntervel)
// }



document.querySelectorAll('.background-random-box span').forEach(ele => {
    ele.classList.remove('active')
})
if(backgroundLocalstorage === 'true') {
    document.querySelector('#yes').classList.add('active')
}else{
    document.querySelector('#no').classList.add('active')
}






let canldeMask = document.querySelector('.landing-page .image-box img');
let aboutUsMask = document.querySelector('.about-us .image-box img');
let landingPageBackground = document.querySelector('.landing-page')
let htmlSkill = document.querySelector('.html-skill');
let cssSkill = document.querySelector('.css-skill');
let jsSkill = document.querySelector('.js-skill');
let problemSolvingSkill = document.querySelector('.problem-solving-skill');
let phpSkill = document.querySelector('.php-skill');
let uiuxSkill = document.querySelector('.uiux-skill');


let colorsli2 = document.querySelectorAll('.colors-list li');
colorsli2.forEach(ele => {
    ele.onclick = () => {
        if (ele.getAttribute('data-color') === "#ff9800" && ele.className === 'active') {
            localStorage.setItem('orange-mask', canldeMask.src = 'imgs/orange-mask.png')
            canldeMask.src = localStorage.getItem('orange-mask');

            localStorage.setItem('orange-mask', aboutUsMask.src = './imgs/about-us-orange-mask.png')
            aboutUsMask.src = localStorage.getItem('orange-mask');

            landingPageBackground.style.cssText = "background-image: url('/css/layered-waves-haikeiorange.svg');"

            htmlSkill.src = '/imgs/html-skill-orange.png'
            cssSkill.src = '/imgs/css-skill2-orange.png'
            jsSkill.src = '/imgs/js-skill2-orange.png'
            problemSolvingSkill.src = '/imgs/problem-solving2-orange.png'
            phpSkill.src = '/imgs/php-skill2-orange.png'
            uiuxSkill.src = '/imgs/uiux-skill2-orange.png'

        }
        else if (ele.getAttribute('data-color') === "#e91e63" && ele.className === 'active') {
            localStorage.setItem('pink-mask', canldeMask.src = './imgs/pink-mask.png')
            canldeMask.src = localStorage.getItem('pink-mask');

            localStorage.setItem('pink-mask', aboutUsMask.src = './imgs/about-us-pink-mask.png')
            aboutUsMask.src = localStorage.getItem('pink-mask');

            landingPageBackground.style.cssText = "background-image: url('/css/layered-waves-haikeipink.svg');"

            htmlSkill.src = '/imgs/html-skill-pink.png'
            cssSkill.src = '/imgs/css-skill2-pink.png'
            jsSkill.src = '/imgs/js-skill2-pink.png'
            problemSolvingSkill.src = '/imgs/problem-solving2-pink.png'
            phpSkill.src = '/imgs/php-skill2-pink.png'
            uiuxSkill.src = '/imgs/uiux-skill2-pink.png'
        }
        else if (ele.getAttribute('data-color') === "#009688" && ele.className === 'active') {
            localStorage.setItem('baby-blue-mask', canldeMask.src = './imgs/lyer2.png')
            canldeMask.src = localStorage.getItem('baby-blue-mask');

            localStorage.setItem('baby-blue-mask', aboutUsMask.src = './imgs/about-us-babyblue-mask.png')
            aboutUsMask.src = localStorage.getItem('baby-blue-mask');

            landingPageBackground.style.cssText = "background-image: url('/css/layered-waves-haikeibabyblue.svg');"
        }
        else if (ele.getAttribute('data-color') === "#03A9F4" && ele.className === 'active') {
            localStorage.setItem('blue-mask', canldeMask.src = './imgs/blue-mask.png')
            canldeMask.src = localStorage.getItem('blue-mask');

            localStorage.setItem('blue-mask', aboutUsMask.src = './imgs/about-us-blue-mask.png')
            aboutUsMask.src = localStorage.getItem('blue-mask');

            landingPageBackground.style.cssText = "background-image: url('/css/layered-waves-haikeiblue.svg');"
        }
        else if (ele.getAttribute('data-color') === "#4CAF50" && ele.className === 'active') {
            localStorage.setItem('green-mask', canldeMask.src = './imgs/green-mask.png')
            canldeMask.src = localStorage.getItem('green-mask');

            localStorage.setItem('green-mask', aboutUsMask.src = './imgs/about-us-green-mask.png')
            aboutUsMask.src = localStorage.getItem('green-mask');

            landingPageBackground.style.cssText = "background-image: url('/css/layered-waves-haikeigreen.svg');"
        }
    }
    })




    //get in touch button go to contact us
    let getInTouch = document.querySelector('.get-in-touch');
    getInTouch.onclick = function (e){
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
    })}




// skills progress 
let skills = document.querySelector('.skills');

window.onscroll = function () {
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;

    let aboutUs = document.querySelector('.sec2');
    let aboutUsTop = aboutUs.offsetTop;
    let aboutUsHeight = aboutUs.offsetHeight;
    if (windowScrollTop > (aboutUsTop + aboutUsHeight - windowHeight -500)) {
        let imagesBox = document.querySelector('.sec2 .image-box')
        imagesBox.classList.add('animation')

        let infoBox = document.querySelector('.sec2 .info-box')
        infoBox.classList.add('animation')

        let infoBoxH2 = document.querySelector('.about-us h2')
        infoBoxH2.classList.add('animation')


    }
    let skillsTop = aboutUs.offsetTop;
    let skillsHeight = aboutUs.offsetHeight;

    if (windowScrollTop > (skillsTop + skillsHeight - windowHeight +370)) {
        let ui = document.querySelectorAll('.skills .skill-box');
        ui.forEach((e)=> {
            e.classList.add('animation')

            let allSkillsText = document.querySelectorAll('.skills .skill-text');
            let laptop = document.querySelector('.html .laptop');
            let cssLayer = document.querySelector('.css .css-layer');
            let apiLayer = document.querySelector('.js .api-layer');
            let problemSolvingLayer = document.querySelector('.problem-solving .problem-solving-layer');
            let phpLayer = document.querySelector('.php .php-layer');
            let animationClass = [laptop, cssLayer, apiLayer, problemSolvingLayer, phpLayer];
            animationClass.forEach((e)=> {
                e.classList.add('animation')
            })

            allSkillsText.forEach((e)=> {
                e.classList.add('animation')
            })
        })
    }   

}



let aboutUs = document.querySelector('.sec2');

// popup box 
let allEmages = document.querySelectorAll('.images-box img');
allEmages.forEach(img => {
    img.addEventListener('click', ()=> {
        let popup = document.createElement('div');
        popup.className = 'popup'
        popup.style.cssText = 'position: fixed; z-index: 1000; background-color: rgba(0, 0, 0, .7); width: 100%; height: 100%; left: 0; top: 0';
        document.body.appendChild(popup)

        let popupBox = document.createElement('div')
        popupBox.className = 'popupBox';
        popupBox.style.cssText = 'z-index:1001; position: fixed; background-color: white; left: 50%; top: 50%; transform: translate(-50%, -50%); padding:20px'

        if(img.alt !== null) {
            let headingImg = document.createElement('h3');
            let textHeadingImg = document.createTextNode(img.alt);
            headingImg.appendChild(textHeadingImg);
            popupBox.appendChild(headingImg);
        }

        let popupImg = document.createElement('img');
        popupImg.src = img.src
        popupImg.style.cssText = 'max-width:100%;'

        popupBox.appendChild(popupImg);
        document.body.appendChild(popupBox)

        let close = document.createElement('span');
        close.className = 'close'
        let closeText = document.createTextNode('x');
        close.appendChild(closeText);
        popupBox.appendChild(close)

    })
})

document.addEventListener('click', function(e) {
    if(e.target.className == 'popup' || e.target.className == 'close') {
        document.querySelector('.popup').remove()
        document.querySelector('.popupBox').remove()
    }
})



// tool tips

let bullets = document.querySelectorAll('.nav-bullets .bullet');

let links = document.querySelectorAll('.links a')

function smoothScroll(element) {
    element.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}


smoothScroll(bullets);
smoothScroll(links);


function handleActive(ev) {
    ev.target.parentElement.querySelectorAll('.active').forEach(ele => {
        ele.classList.remove('active')
    })
    //add active to clicked element
    ev.target.classList.toggle('active')
}

// start nav bullets
let navBullets = document.querySelector('.nav-bullets');
let bulletsOptionSpan = document.querySelectorAll('.bullets-option span');
let bulletLocalsorage = localStorage.getItem('bullet_option')
if(bulletLocalsorage !== null) {
    bulletsOptionSpan.forEach(span => {
        span.classList.remove('active')
    })
    if(bulletLocalsorage === 'block') {
        navBullets.style.display = 'block';
        document.querySelector('.bullets-option #show').classList.add('active')
    }
    else {
        navBullets.style.display = 'none';
        document.querySelector('.bullets-option #hide').classList.add('active')
    }
}

bulletsOptionSpan.forEach(span => {
    span.addEventListener('click', (e) => {
        if(e.target.dataset.display === 'show') {
            navBullets.style.display = 'block';
            localStorage.setItem('bullet_option', 'block')
        }else {
            navBullets.style.display = 'none';
            localStorage.setItem('bullet_option', 'none')
        }
        handleActive(e)
    })
})

// reset options
document.querySelector('.reset-options').onclick = function () {
    localStorage.clear();
    window.location.reload()
}


// open menu 
let linksMenu = document.querySelector('.links');
let toggleMenuIcon = document.querySelector('.toggle-menu-icon');

toggleMenuIcon.onclick = function (e) {
    this.classList.toggle("menu-active");
    linksMenu.classList.toggle('open');
    e.stopPropagation()
}

document.addEventListener('click', (e)=> {
    if(e.target !== linksMenu && e.target !== toggleMenuIcon) {
        if(linksMenu.classList.contains('open')) {
            toggleMenuIcon.classList.toggle("menu-active");
            linksMenu.classList.toggle('open');
        }
    }
})


linksMenu.onclick = function(e) {
    e.stopPropagation()
}







