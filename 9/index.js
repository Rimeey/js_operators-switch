'use strict'

let uah = +prompt('Enter the sum in UAH');
let currency = prompt('Enter the currency you want: USD, EURO, PLN, GBP');

switch (currency) {
    case 'USD':
        alert(uah / 36.93 + ' USD in this moment(11.08)')
    break;

    case 'EURO':
        alert(uah / 40.43 + ' EURO in this moment(11.08)')
    break;

    case 'PLN':
        alert(uah / 9.13 + ' PLN in this moment(11.08)')
    break;

    case 'GBP':
        alert(uah / 46.88 + ' GBP in this moment(11.08)')
    break;

    default:
        alert('Incorrent currency, please enter the example');
    break;
}