/* 
*   Author: Brandon Withrow
*/

// @brief:  Hides the passed in element from view
// @param:  element    :  element being hid
function hideThisElement(element){
    element.style.display = 'none';
}

// @brief:  Takes the current value of #species and displays an Alert message
//          with said information.
function displaySearchAlert(){
    var searchTarget = document.querySelector("#species").value;
    alert(`You are looking for a: ${searchTarget}`);
}

// @brief:  Takes the current text value of '#[pet name] .num_pets' and increments it by one.
// @param:  element    :  '#[pet name] .num_pets' element being incremented
function incrementPets(element){
    document.querySelector(element).innerText++;
}