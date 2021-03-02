var valid = [], count1 = 0;
var flag1 = 0, temp;
var x1, y1;
var matrixArr = [1, 4, 7, 2, 5, 8, 3, 6, 9], matCount = 0;
function trans() {
    var tempI = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (matrixArr[matCount++] != document.getElementById("t" + (i + 1) + (j + 1)).innerHTML) {
                tempI = 1;
                break;
            }
        }
    }
    if (tempI == 1)
        return 0;
    else
        return 1;
}
function store2(x2, y2) {
    console.log("a");
    if (flag1 == 0) {
        document.getElementById("t" + x2 + y2).style.backgroundColor = "red";
        x1 = x2;
        y1 = y2;
        flag1++;
    }
    else {
        document.getElementById("t" + x2 + y2).style.backgroundColor = "red";
        temp = document.getElementById("t" + x2 + y2).innerHTML;
        document.getElementById("t" + x2 + y2).innerHTML = document.getElementById("t" + x1 + y1).innerHTML;
        document.getElementById("t" + x1 + y1).innerHTML = temp;
        if ((x2 == y1) && (y2 == x1)) {
            document.getElementById("t" + x2 + y2).style.backgroundColor = "blue";
            document.getElementById("t" + x1 + y1).style.backgroundColor = "blue";
            flag1 = 0;
        }
        else {
            valid[count1++] = "Wrong Swap" + document.getElementById("t" + x2 + y2).innerHTML + document.getElementById("t" + x1 + y1).innerHTML;
            document.getElementById("t" + x2 + y2).style.backgroundColor = "blue";
            document.getElementById("t" + x1 + y1).style.backgroundColor = "blue";
            flag1 = 0;
        }
    }
    console.log(valid);
}
function check2() {
    if (disFlag2 == 1)
        return;
    if ((valid.length == 0) && (trans())) {
        total++;
        console.log("Correct");
    }
    else {
        total1++;
        console.log(valid);
    }
}