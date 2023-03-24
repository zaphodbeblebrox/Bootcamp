// @brief:  Reads the setting to convert .high & .low temperature values to.
//          Pulls all instances of above classes and modifies each accordingly
//          ***Note that this is a rough conversion as it is rounded. Bouncing between
//             temperature formats will lead to values being off from original value.
// @param:  format     :  object which will have its "value" queried
function changeTempFormat(format) {
    var lowIDs = document.querySelectorAll('.low');
    var highIDs = document.querySelectorAll('.high');

    if(format.value == "F"){
        // Convert to F
        lowIDs.forEach(convert2Fahrenheit)
        highIDs.forEach(convert2Fahrenheit)
    }
    else{
        // Convert to C
        lowIDs.forEach(convert2Celcius)
        highIDs.forEach(convert2Celcius)
    }
}

// @brief:  Takes the current value in 'element', converts it to celcius, & writes to said 'element
// @param:  element    :  element being converted
function convert2Celcius(element){
    element.innerText = Math.floor((element.innerText - 32) * (5/9));
}

// @brief:  Takes the current value in 'element', converts it to celcius, & writes to said 'element
// @param:  element    :  element being converted
function convert2Fahrenheit(element){
    element.innerText = Math.floor(element.innerText * (9/5) + 32);
}

function closeCookie(){
    // ??? --- Question for Corey || Helen --- ???
    // Both of the below work, is there a reason to use one over the other?
    
    // document.getElementById("cookie").remove();
    document.getElementById("cookie").style.display = 'none';
}
