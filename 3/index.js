'use strict'

let side1 = +prompt('Enter the 1 side of triangle');
let side2 = +prompt('Enter the 2 side');
let side3 = +prompt('Enter the 3 side');

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    alert('Triangle exists')

    let perimeter = confirm('Do you want a know Perimeter of you triangle?'); // 3a
    if (perimeter) {
        console.log(side1 + side2 + side3)
    } else if (!perimeter) {
        console.log("ok")
    }
} else if (!side1 || !side2 || !side3) {
    console.log('Not exist')
} else {
    console.log('Not exist')
}