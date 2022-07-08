const first_i = document.querySelector("gallary_i");
const left1 = document.querySelector("#left1");
const right1 = document.querySelector("#right1");

let leftmar =0;

left1.onclick = ()=> {
leftmar = leftmar - 300;
first_i.style.marginleft = leftmar + 'px';
}

left1.onclick = ()=> {
    leftmar = leftmar + 300;
    first_i.style.marginleft = leftmar + 'px';
    }