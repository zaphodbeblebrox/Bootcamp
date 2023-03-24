function changeColor(circle, color){
    circle.style.backgroundColor = color;
}

function login(btn){
    if (btn.innerText =="Login"){
        btn.innerText = "Logout";
    } 
    else {
        btn.innerText = "Login"
    };
}

function hideButton(button){
    button.style.display = 'none';
}