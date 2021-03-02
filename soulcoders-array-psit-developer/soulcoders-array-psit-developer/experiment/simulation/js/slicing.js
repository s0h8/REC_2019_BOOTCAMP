//find slicing for arr[1:4]
var valid1 = [0, 0, 0, 0, 0];
var low = 1, high = 4;
function checkValid(x) {
    if (valid1[x] == 0)
        return 1;
    else
        return 0;
}
function store1(x) {
    console.log("a");
    if (checkValid(x - 1)) {
        valid1[x - 1] = 1;
        document.getElementById("t" + x).style.backgroundColor = "red";
    }
    else {
        valid1[x - 1] = 0;
        document.getElementById("t" + x).style.backgroundColor = "blue";
    }
}
function check1() {
    if (disFlag1 == 1)
        return;
    var temp1 = 0;
    for (var i = 0; i < 5; i++) {
        if (i < low) {
            if (valid1[i] == 1) {
                temp1 = 1;
                break;
            }
        }
        else if (i >= high) {
            if (valid1[i] == 1) {
                temp1 = 1;
                break;
            }
        }
        else {
            if (valid1[i] == 0) {
                temp1 = 1;
                break;
            }
        }
    }
    if (temp1 == 0) {
        total++;
        console.log("Correct");
    }
    else {
        total1++;
        console.log("Incorrect");
    }
}