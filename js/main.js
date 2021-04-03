$(document).ready(function() {

    $('#app').vide({
        mp4: 'video/video.mp4',
        webm: 'video/video.webm',
        ogv: 'video/video.ogv',
        poster: 'img/cover-image.jpg'
    });
});

$(".button-primary").fancybox({
    "padding": 20,
    "frameWidth": 700,
    "frameHeight": 600,
    "overlayOpacity": 0.8,
});