document.getElementById('share-icon').addEventListener('click', function () {
    var popup, visibility;


    if (window.matchMedia("(max-width: 25em)").matches) {
        popup = document.getElementById('popup-mobile');
        visibility = popup.style.visibility;
        if (visibility === 'hidden' || visibility === '') {
            popup.style.visibility = 'visible';
            popup.style.animation = 'scaleUp .2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
        } else {
            popup.style.visibility = 'hidden';
            popup.style.animation = '';
        }
    } else {
        popup = document.getElementById('popup');
        visibility = popup.style.visibility;
        if (visibility === 'hidden' || visibility === '') {
            popup.style.visibility = 'visible';
            popup.style.animation = 'scaleUp .2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
        } else {
            popup.style.visibility = 'hidden';
            popup.style.animation = '';
        }
    }
});