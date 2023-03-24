// #1
console.log("Problem #1: ");
alwaysHungry([3.14, "food", "pie", true, "food"]);
console.log("-----");
alwaysHungry([4,1,5,7,2]);

function alwaysHungry(arr){
    flag_food = false;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy")
            flag_food = true;
        }
    }
    if(flag_food == false){
        console.log("I'm Hungry")
    }
}



//  #2
console.log("\nProblem #2: ");
console.log(highPass([6,8,3,10,-2,5,9], 5));

function highPass(arr, cutoff){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] > cutoff){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//  #3
console.log("\nProblem #3: ");
console.log(betterThanAverage([6,8,3,10,-5,5,9]));

function betterThanAverage(arr){
    var sum = 0;
    var avg = 0;
    var count = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>avg){
            count++;
        }
    }
    return count;
}

//  #4
console.log("\nProblem #4: ");
console.log(reverse(["a","b","c","d","e"]));

function reverse(arr){
    var newArr = [];
    for(var i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

//  #5
console.log("\nProblem #5: ");
console.log(fibonacciArray(10));

function fibonacciArray(n){
    var newArr = [0,1];
    for(var i=1; i<=n-2; i++){
        newArr.push(newArr[i] + newArr[i-1]);
    }
    return newArr;
}