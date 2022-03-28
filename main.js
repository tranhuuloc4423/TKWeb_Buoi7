// var a = 100;

// {
//     var a = 1000;
//     {
//         var a = 10000;
//     }
// }
// console.log(a)

// Hàm kiêm tra số nguyên dương
const isPositive = value => (Number.isInteger(value) && value > 0)

// console.log(isPositive(0))

// Hàm kiêm tra số nguyên âm
const isNegative = value => (Number.isInteger(value) && value < 0)

// console.log(isNegative(-1))

// Hàm tính tổng hai số
const sum = (a, b) => a + b;

console.log(sum(10, 100))


const myArr = [1, 2, 3, 5, 6, 7, 8]

// hàm tính tổng các phần tử trong mảng
const sumOfArray = array => {
    let sum = 0;
    let arrLength = array.length;
    for(let i = 0; i < arrLength; i++) {
        sum += array[i];
    }

    return sum;
}


function sumOfArray2(myArr) {
    let sum = 0;

    myArr.forEach(value => {
        return sum += value;
    });

    return sum;
}

const sumOfArray3 = myArr.reduce((total, currentValue) => {
    return total + currentValue;
}, 0);

// console.log(sumOfArray3)

// Hàm giải phương trình bậc 1
function giaiPhuongTrinhBac1(a, b) {
    if(a == 0) {
        if(b == 0) {
            return "phương trình có vô số nghiệm"
        } else {
            return "phương trình vô nghiệm";
        }
    } else {
        return `x = ${-b/a}`;
    }
}

// console.log(giaiPhuongTrinhBac1(2, 1))

// Hàm kiểm tra số nguyên tố
const checkPrime = value => {
    let isPrime = true;
    if(value < 2) {
        return !isPrime;
    }
    for(let i = 2; i < value; i++) {
        if(value % i == 0) {
            return !isPrime;
        }
    }
    return isPrime;
}

// console.log(checkPrime(12))

function print_number() {
    var number = document.querySelector('#number').value;

    var html = '';

    for(let i = 1; i <= number; i++) {
        html += `${i} <br>`
        // console.log(i);
    }
    document.getElementById('result').innerHTML = html;
}

const sumOfEvenArray = array => {
    let index = 0;
    let arrLength = array.length;
    let sum = 0;
    while(index <= arrLength) {
        if(array[index] % 2 == 0) {
            sum += array[index];
        }
        index++;
    }

    return sum;
}

// console.log(sumOfEvenArray(myArr))

function deleteElement() {
    var elements = document.getElementsByTagName('span');

    const newArray = [];

    let arrLength = elements.length;

    var index = 0;
    while(index < arrLength) {
        if(index % 2 != 0 && index != 0) {
            newArray.push(elements[index]);
        }
        index++;
    }

    index = 0;
    while(index < newArray.length) {
        newArray[index].remove();
        index++;
    }
}