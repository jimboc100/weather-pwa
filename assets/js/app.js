if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('service-worker.js').then(function (registration) {
            // Registration was successful
            console.log('Registered!');
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        }).catch(function (err) {
            console.log(err);
        });
    });
} else {
    console.log('service worker is not supported');
}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('main-menu-toggle').addEventListener('click',()=>{
        document.getElementById('main-menu').setAttribute('aria-expanded', true);
    });
    document.getElementById('main-menu-close').addEventListener('click',()=>{
        document.getElementById('main-menu').setAttribute('aria-expanded', false);
    });
    document.querySelector('.backdrop').addEventListener('click',()=>{
        document.getElementById('main-menu').setAttribute('aria-expanded', false);
    });
});