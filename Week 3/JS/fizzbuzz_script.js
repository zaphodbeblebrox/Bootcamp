for(var i=1; i<=100; i++){
    var msg = "";
    var fizz = i%3;
    var buzz = i%5;
    if(fizz == 0){
        msg += "Fizz";
    }
    if(buzz == 0){
        msg += "Buzz"
    }
    if(buzz != 0 && fizz != 0){
        msg += i
    }

    console.log(msg);
}