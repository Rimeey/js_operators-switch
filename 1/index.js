'use strict'

let width = +prompt('Enter the width');
let height = +prompt('Enter the height');

if (width == height) {
    alert("You quadrilateral is a square")
} else if (width !== height) {
    alert("You quadrilateral is not a square or you enter not a number")
} else {
    alert("NaN")
}