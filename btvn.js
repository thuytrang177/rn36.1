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
    for (i = 1; i <= 1000; i++) {
        sum += i;
        if (sum >= 1000) {
            console.log('n nho nhat = ' + i);
            break;
        }
    }
}
mySum();