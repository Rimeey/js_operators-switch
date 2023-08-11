'use strict'

let name_user = prompt('Hello, whats your name?');
let earn_user = +prompt('What is Your monthly income?');
let transport_user = +prompt('What is the approximate amount of transportation costs?');
let food_user = +prompt('What is the approximate cost of food?');
let home_user = +prompt('What is the approximate amount of costs for paying utilities?');

let spend_user = transport_user + food_user + home_user
let day_user = earn_user / 30 
let rest_user = earn_user - spend_user

if (earn_user > transport_user + food_user + home_user) {
    console.log(`${name_user}, Your balance after spending: ${rest_user}`)
    console.log(`${name_user}, Your average spend per day: ${day_user}`)
    
    if (day_user < 1000) {
        console.log(`${name_user}, Your income is low`)
    } else if (day_user < 1000 && day_user > 2000) {
        console.log(`${name_user}, Your income is average`)
    } else {
        console.log(`${name_user}, Your income is high`)
    }
} else {
    alert(`${name_user}, Your income is too low :(`)
}
