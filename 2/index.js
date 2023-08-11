'use strict'

let password = prompt('Enter the password');

if (password == "Step" || password == "Web" || password == "JavaScript") {
    alert('Confirmed');
} else if (!password) {
    alert('NaN');
} else {
    alert('Denied');
}