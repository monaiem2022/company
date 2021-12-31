
let navbar = document.getElementById('navbar');
let navbarSupportedContent = document.getElementById('navbarSupportedContent')

window.onscroll = function () {
    if(window.scrollY >=200){
        navbar.style.backgroundColor = '#212529';
        navbar.style.height = '65px';
        navbarSupportedContent.style.backgroundColor = '#212529';
    }
    else{
        navbar.style.backgroundColor = '';
        navbarSupportedContent.style.backgroundColor = '';
    }
}







window.onload = function () {
    let web = new CountUp('web-count', 0 ,250 ,0 ,3);
    web.start();
    let app = new CountUp('app-count', 0 ,1000, 0, 3);
    app.start();
    let user = new CountUp('user-count',0 ,999 , 0, 3);
    user.start();
    let video = new CountUp('video-count',0 ,1325 , 0, 3);
    video.start();
 }




document.getElementById('fullYear').innerHTML = new Date().getFullYear();


