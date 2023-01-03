// Video Playbackratio // 

var video = document.getElementById("background");
video.playbackRate = .5;

// Tabs //

function openTab(event, idTab) {
    var cont = document.getElementsByTagName('section')
    for (var i = 0; i < cont.length; i++) {
        cont[i].style.display = 'none';
    }

    var tabs = document.getElementsByClassName('tab-btn');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace('active', '');
    }

    document.getElementById(idTab).style.display = 'flex';
    event.currentTarget.className = 'tab-btn cybr-btn active';
}

// Nav LowWidth Menu //

const btnNav = document.querySelector('#btnNav');
const divNav = document.querySelector('#ulNav');
const navButtons = document.querySelectorAll('#nav-btn');

btnNav.addEventListener('click', function (){
    divNav.classList.toggle('hidden')
})

navButtons.forEach(button => button.addEventListener('click', function (){
    divNav.classList.toggle('hidden')
}))

