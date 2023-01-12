const btn = document.querySelector('.btn');
const btn_blue = document.querySelector('.btn_blue');

btn_blue.addEventListener('click',function(e){
    e.preventDefault();

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let span = document.createElement('span');
    span.style.left = x + "px";
    span.style.top = y + "px";
    btn_blue.appendChild(span);

    setTimeout(() => {
        span.remove();
    },1000);
});