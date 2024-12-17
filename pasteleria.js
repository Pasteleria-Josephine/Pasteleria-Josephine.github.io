document.addEventListener('DOMContentLoaded', function () {
    new Splide('#galeria', {
        type: 'loop', 
        perPage: 1,   
        arrows: true, 
        pagination: false,
    }).mount();
});

function toggleList(id) {
    const list = document.getElementById(id);
    if (list.style.display === 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
}