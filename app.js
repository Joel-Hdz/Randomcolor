const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const div = document.querySelector('div');
div.style.textAlign = 'center';
button.addEventListener('click', function () {
    const display = randomcolor();
    document.body.style.backgroundColor = display[0];
    h1.innerText = display[0];
    if (display[1] <= 50) {
        h1.style.color = 'white';
    } else h1.style.color = 'black';
})
function randomcolor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const darkness = r + g + b;
    const colors = [`rgb(${r}, ${g}, ${b})`, darkness]
    return colors
}