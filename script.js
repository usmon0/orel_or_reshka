let img = document.querySelector('.orel');
let dice =  document.querySelector('.d span');
let orel = document.querySelector('.o span')
let reshka = document.querySelector('.r span')
let d = 0;
let r = 0
let o = 0 



img.addEventListener('click', function() {
    let rnum = Math.ceil(Math.random()*2);
    d+=1;
    console.log(d);
    dice.textContent = d;
    if (rnum == 1) {
        r+=1
        img.src = './img/reshka.png'
        reshka.textContent = r
        console.log('reshka');
    } else {
        o+=1
        img.src = './img/orel.png'
        orel.textContent = o
        console.log('orel');
    }
})