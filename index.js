

// let bars_button = document.getElementById('bars');
const bars_button = document.getElementById('bars');
const cross_button = document.getElementById('cross');
const menu_item_collection = document.getElementsByClassName('menu-bar-item');
const menu = document.getElementById('menu');
const dom_width = window.innerWidth;


bars_button.addEventListener("click",showMenu);
cross_button.addEventListener("click",closeMenu);


function showMenu(){

    bars_button.style.display = "none";
    cross_button.style.display = "block";
    for (let i = 0; i < menu_item_collection.length; i++) {
        menu_item_collection[i].style.display = "block";
    }
    
}

function closeMenu(){
    
    bars_button.style.display = "block";
    cross_button.style.display = "none";
    for (let i = 0; i < menu_item_collection.length; i++) {
        menu_item_collection[i].style.display = "none";
    }

}

      
