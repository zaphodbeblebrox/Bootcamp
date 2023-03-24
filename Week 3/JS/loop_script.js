// #1
console.log("Problem #1: ");
for(var i=1;i<20;i+=2){
    console.log(i);
}

//  #2
console.log("\nProblem #2: ");
for(var i=100;i>=0;i--){
    if(i%3 == 0){
        console.log(i);
    }
}

//  #3
console.log("\nProblem #3: ");
arr = [4,2.5,1,-0.5,-2,-3.5];
for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
}

//  #4
console.log("\nProblem #4: ");
sum = 0;
for(var i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);

//  #5
console.log("\nProblem #5: ");
product = 1;
for(var i=1;i<=12;i++){
    product*=i;
}
console.log(product);