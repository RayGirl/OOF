let list = document.querySelector(`.slider .list`);
let iems = document.querySelectorAll(`.slider .list .item`);
let dots = document.querySelectorAll(`.slider .dots li`);
let prev = document.getElementById(`prev`);
let next = document.getElementById(`next`);

let active = 0;
let lenghtItems =items.length -1;

next.onclick = function(){
    if (active + 1 > lenghtItems){
        active = 0;
    }else{
        active = active + 1
    }
        reloadSlider();
    }
    prev.onclick =function(){
        if (active - 1 <  0){
            active = lenghtItems;
        }else{
            active =active - 1;
        }
    }

    let refreshSlider = setInterval
        function reloaderSlider(){
            let checkLeft = items[active].offsetLeft;
            list.style.left = -checkleft + `px`;
            
            let lastActiveDot = document.querySelector(`.slider .dots li active`);
            lastActiveDot.classList.remove(`active`);
            dots[active].classList.add(`active`);
    }
    
    
    

    
