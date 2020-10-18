/**
 * This is for the code that loads the animtion
 * 
 */


 lottie.loadAnimation({
    container: document.getElementById('banner-animation'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'user/themes/moh-theme/js/data.json' // the path to the animation json
 });