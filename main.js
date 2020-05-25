//1.
document.querySelector('#hide-btn').addEventListener('click', function () {
    let text = document.querySelector('#text');
    if (text.style.display != 'none') {
        text.style.display = 'none';
        this.textContent = 'Show text';
    } else {
        text.style.display = 'block';
        this.textContent = 'Hide text'
    }
})

//2.
document.querySelector('#hide-me').addEventListener('click', function () {
    this.remove();
})

//3.
document.querySelector('#nav').addEventListener('click', function () {
    let ul = this.querySelector('ul');
    if (ul.style.display != 'none') {
        ul.style.display = 'none';
    } else {
        ul.style.display = 'block';
    }
})
