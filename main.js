//task 1
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//task 2
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

//task 3
let sum = 0; // varialble is created so the sum value is saved in it as the loop is executed
for (let i = 1; i <= 50; i++) { //the loop starts with 1; 50 iterations, each iteration increments i by 1
    sum += i;  // after each iteration value of i is added to the value of sum
}
console.log(sum); // sum of all numbers from 1 to 50


//task 4
for (let i = 0; i < 10; i += 2) { // 5 iterations: 0 2 4 6 8
    console.log(i);
}

//task 5
//break statement exits the loop

for (let i = 1; i <= 5; i++) {   //loop iterates from 1 through 5
    if (i > 3){                  // with this condition + break statement the loops breaks/ends once value of i is more than 3
        console.log(i);          //prints 4 and loop is exited after i becomes 4 
        break;
    }      
}

//task 6
//continue statement skips the current iteration

for(i = 1; i<= 10; i++){
    if(i % 3 ===0){
        continue;
    }
    console.log(i);
}

//task 7

