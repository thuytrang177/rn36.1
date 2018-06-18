// bai 1

function tinhTong() {
    var sum = 0;
    var n = 7;

    if (n > 0) {
        for (i = 1; i <= n; i++) {
            sum += (i*i);
        }
        console.log('S = '+ sum);
        
    } else {
        console.log('khong hop le');
    }
}

tinhTong();

// bai 2 
function mySum () {
    var sum = 0; 
    while (i >= 1) {
        sum += i;
        if (sum >= 1000) {
            console.log('n nho nhat = ' + i);
            break;
        }
        i++;
    }
}
mySum();

// bai 3

function isPrime (n) {
    if (n < 2) {
        return false;
    }
    for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;

}

const tichPrime = (N) => {
    var tich = 1;
    for (j = 2; j <= N; j++) {
        if (isPrime(j) == true); {
            tich *= j;
        }
    }
    console.log(tich);
}
tichPrime(17);


