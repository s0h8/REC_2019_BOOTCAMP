function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}
//Editor

document.getElementById("test").onclick = function () {
  document.getElementById("container5").style.display = "block";
}
function shuffle(arra1) {
  var ctr = arra1.length, temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
var myArray = ["11", "22", "33", "44", "55", "66", "88", "99", "1010", "1111"];
var noq = [3, 3, 3, 1, 1, 1, 9, 10];
var disFlag1 = 0, disFlag2 = 0;
myArray = shuffle(myArray);
console.log(myArray);
document.getElementById("container" + "" + myArray[0]).style.display = "inline-block";
document.getElementById("btn" + "" + myArray[0]).onclick = function () {
  document.getElementById("container" + "" + myArray[0]).style.display = "none";
  document.getElementById("container" + "" + myArray[1]).style.display = "inline-block";
  if (myArray[0] == "11")
    checkans1();
  if (myArray[0] == "22")
    checkans2();
  if (myArray[0] == "33")
    checkans3();
  if (myArray[0] == "44")
    checkans4();
  if (myArray[0] == "55")
    checkans5();
  if (myArray[0] == "66")
    checkans6();
  if (myArray[0] == "88")
    checkans8();
  if (myArray[0] == "99")
    checkans9();
  if (myArray[0] == "1010")
    checkans10();
  if (myArray[0] == "1111")
    checkans11();
}
document.getElementById("btn" + "" + myArray[1]).onclick = function () {
  if (myArray[1] == "11")
    checkans1();
  if (myArray[1] == "22")
    checkans2();
  if (myArray[1] == "33")
    checkans3();
  if (myArray[1] == "44")
    checkans4();
  if (myArray[1] == "55")
    checkans5();
  if (myArray[1] == "66")
    checkans6();
  if (myArray[1] == "88")
    checkans8();
  if (myArray[1] == "99")
    checkans9();
  if (myArray[1] == "1010")
    checkans10();
  if (myArray[1] == "1111")
    checkans11();
  document.getElementById("container" + "" + myArray[1]).style.display = "none";
  document.getElementById("container" + "" + myArray[2]).style.display = "inline-block";
}
document.getElementById("btn" + "" + myArray[2]).onclick = function () {
  if (myArray[2] == "11")
    checkans1();
  if (myArray[2] == "22")
    checkans2();
  if (myArray[2] == "33")
    checkans3();
  if (myArray[2] == "44")
    checkans4();
  if (myArray[2] == "55")
    checkans5();
  if (myArray[2] == "66")
    checkans6();
  if (myArray[2] == "88")
    checkans8();
  if (myArray[2] == "99")
    checkans9();
  if (myArray[2] == "1010")
    checkans10();
  if (myArray[2] == "1111")
    checkans11();
  document.getElementById("container" + "" + myArray[2]).style.display = "none";
  document.getElementById("container" + "" + myArray[3]).style.display = "inline-block";
}
document.getElementById("btn" + "" + myArray[3]).onclick = function () {
  if (myArray[3] == "11")
    checkans1();
  if (myArray[3] == "22")
    checkans2();
  if (myArray[3] == "33")
    checkans3();
  if (myArray[3] == "44")
    checkans4();
  if (myArray[3] == "55")
    checkans5();
  if (myArray[3] == "66")
    checkans6();
  if (myArray[3] == "88")
    checkans8();
  if (myArray[3] == "99")
    checkans9();
  if (myArray[3] == "1010")
    checkans10();
  if (myArray[3] == "1111")
    checkans11();
  document.getElementById("container" + "" + myArray[3]).style.display = "none";
  document.getElementById("container" + "" + myArray[4]).style.display = "inline-block";
}
document.getElementById("btn" + "" + myArray[4]).onclick = function () {
  if (myArray[4] == "11")
    checkans1();
  if (myArray[4] == "22")
    checkans2();
  if (myArray[4] == "33")
    checkans3();
  if (myArray[4] == "44")
    checkans4();
  if (myArray[4] == "55")
    checkans5();
  if (myArray[4] == "66")
    checkans6();
  if (myArray[4] == "88")
    checkans8();
  if (myArray[4] == "99")
    checkans9();
  if (myArray[4] == "1010")
    checkans10();
  if (myArray[4] == "1111")
    checkans11();
  document.getElementById("container" + "" + myArray[4]).style.display = "none";
  document.getElementById("container77").style.display = "inline-block";
}

var total = 0, total1 = 0;
function cal() {
  console.log(total);

  document.getElementById("ans").classList.add("fullSizeBox1");
  setTimeout(result, 1000);
  function result() {
    document.getElementById("corr").innerHTML = "Correct Answers : " + String(total);
    document.getElementById("incorr").innerHTML = "Incorrect Answers : " + String(total1);
    document.getElementById("percentage").innerHTML = "Percentage : " + String(Math.round((total / (total + total1)) * 100)) + "%";
    if (Math.round((total / (total + total1)) * 100) > 90)
      document.getElementById("feedback").innerHTML = "Feedback : Excellent";
    else if (Math.round((total / (total + total1)) * 100) > 60)
      document.getElementById("feedback").innerHTML = "Feedback : It's Ok";
    else
      document.getElementById("feedback").innerHTML = "Feedback : Try Again";
    document.getElementById("show").style.display = "block";
  }

}
function checkans1() {
  var a = document.getElementById("a52");
  if (a.value == 'arr[2]') {
    total += 1;
    document.getElementById("sh1").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh1").innerHTML = 'Correct Answer : arr[2]';
    document.getElementById("a52").disabled = true;
    document.getElementById("sh1").style.borderColor = "green";
  }
  if (a.value != 'arr[2]') {
    total1 += 1;
    document.getElementById("sh1").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh1").innerHTML = 'Correct Answer : arr[2]';
    document.getElementById("a52").disabled = true;
    document.getElementById("sh1").style.borderColor = "red";
  }
  console.log(total, total1);
}
function checkans2() {
  var a = document.getElementById("b12");
  if (a.value == 'arr[1][1]') {
    total += 1;

    document.getElementById("sh2").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh2").innerHTML = 'Correct Answer : arr[1][1]';
    document.getElementById("b12").disabled = true;
    document.getElementById("sh2").style.borderColor = "green";
  }

  if (a.value != 'arr[1][1]') {
    total1 += 1;
    document.getElementById("sh2").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh2").innerHTML = 'Correct Answer : arr[1][1]';
    document.getElementById("b12").disabled = true;
    document.getElementById("sh2").style.borderColor = "red";
  }
}
function checkans3() {
  var a = document.getElementById("c11");
  if (a.value == 'arr[0][0]+arr[1][1]+arr[2][2]') {
    total += 1;
    a.style.borderColor = "green";
    document.getElementById("sh3").style.color = "green";
    document.getElementById("sh3").innerHTML = 'Correct Answer : arr[0][0]+arr[1][1]+arr[2][2]';
    document.getElementById("c11").disabled = true;
    document.getElementById("sh3").style.borderColor = "green";
  }

  if (a.value != 'arr[0][0]+arr[1][1]+arr[2][2]') {
    total1 += 1;
    document.getElementById("sh3").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh3").innerHTML = 'Correct Answer : arr[0][0]+arr[1][1]+arr[2][2]';
    document.getElementById("c11").disabled = true;
    document.getElementById("sh3").style.borderColor = "red";
  }
}
function checkans4() {
  var a = document.getElementById("d11");
  var b = document.getElementById("d22");
  if (a.value == '3') {
    total += 1;
    document.getElementById("sh4").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh4").innerHTML = 'Correct Answer : 3';
    document.getElementById("d11").disabled = true;
    document.getElementById("sh4").style.borderColor = "green";
  }
  if (a.value != '3') {
    total1 += 1;
    document.getElementById("sh4").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh4").innerHTML = 'Correct Answer : 3';
    document.getElementById("d11").disabled = true;
    document.getElementById("sh4").style.borderColor = "red";
  }
  if (b.value == 'j=0;j<3;j++') {
    total += 1;
    document.getElementById("sh5").style.color = "green";
    b.style.borderColor = "green";
    document.getElementById("sh5").innerHTML = 'Correct Answer : j=0;j<3;j++';
    document.getElementById("d22").disabled = true;
    document.getElementById("sh5").style.borderColor = "green";
  }
  if (b.value != 'j=0;j<3;j++') {
    total1 += 1;
    document.getElementById("sh5").style.color = "green";
    b.style.borderColor = "red";
    document.getElementById("sh5").innerHTML = 'Correct Answer : j=0;j<3;j++';
    document.getElementById("d22").disabled = true;
    document.getElementById("sh5").style.borderColor = "red";
  }
}
function checkans5() {
  var a = document.getElementById("e11");
  var b = document.getElementById("e22");
  if (a.value == 'int') {
    total += 1;
    document.getElementById("sh6").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh6").innerHTML = 'Correct Answer : int';
    document.getElementById("e11").disabled = true;
    document.getElementById("sh6").style.borderColor = "green";
  }
  if (a.value != 'int') {
    total1 += 1;
    document.getElementById("sh6").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh6").innerHTML = 'Correct Answer : int';
    document.getElementById("e11").disabled = true;
    document.getElementById("sh6").style.borderColor = "red";
  }
  if (b.value == 'arr[i]') {
    total += 1;
    document.getElementById("sh7").style.color = "green";
    b.style.borderColor = "green";
    document.getElementById("sh7").innerHTML = 'Correct Answer : arr[i]';
    document.getElementById("e22").disabled = true;
    document.getElementById("sh7").style.borderColor = "green";
  }
  if (b.value != 'arr[i]') {
    total1 += 1;
    document.getElementById("sh7").style.color = "green";
    b.style.borderColor = "red";
    document.getElementById("sh7").innerHTML = 'Correct Answer : arr[i]';
    document.getElementById("e22").disabled = true;
    document.getElementById("sh7").style.borderColor = "red";
  }

}
function checkans6() {
  var a = document.getElementById("f11");
  if (a.value == 'a[i]<min') {
    total += 1;
    document.getElementById("sh8").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh8").innerHTML = 'Correct Answer : a[i]<min';
    document.getElementById("f11").disabled = true;
    document.getElementById("sh8").style.borderColor = "green";
  }
  if (a.value != 'a[i]<min') {
    total1 += 1;
    document.getElementById("sh8").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh8").innerHTML = 'Correct Answer : a[i]<min';
    document.getElementById("f11").disabled = true;
    document.getElementById("sh8").style.borderColor = "red";
  }

}
function checkans8() {
  var store = ["package main", 'import("fmt")', "func main(){", "var arr=[5]int{2,4,1,8,10}", "for i=0;i<5;i++", 'fmt.Print(arr[i])}'];
  for (var j = 0; j < 6; j++) {
    console.log("cb" + (j + 1));
    if ((document.getElementById("cb" + (j + 1))).checked == true) {
      if (document.getElementById("cb" + (j + 1)).value == "e") {
        total++;
        document.getElementById("sh" + "" + (j + 9)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j + 9)).style.color = "green";
        document.getElementById("cb" + "" + (j + 1)).disabled = true;
      }
      else {
        document.getElementById("sh" + "" + (j + 9)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j + 9)).style.color = "green";
        document.getElementById("cb" + "" + (j + 1)).disabled = true;
        total1++;
      }
    }
    else {
      if (document.getElementById("cb" + (j + 1)).value == "e") {
        total1++;
      }
      document.getElementById("sh" + "" + (j + 9)).innerHTML = "Correct Answer : " + store[j];
      document.getElementById("sh" + "" + (j + 9)).style.color = "green";
      document.getElementById("cb" + "" + (j + 1)).disabled = true;
    }
    console.log(total, total1);
  }

}
function checkans9() {
  var store = ["package main", 'import("fmt")', "func main(){", "var arr=[3][3]int{{1,2,3},{4,5,6},{7,8,9}}", 'fmt.Print(arr[2])', "}"];
  for (var j = 0; j < 6; j++) {
    if ((document.getElementById("cb" + (j + 8))).checked == true) {
      if (document.getElementById("cb" + (j + 8)).value == "e") {
        total++;
        document.getElementById("sh" + "" + (j + 15)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j + 15)).style.color = "green";
        document.getElementById("cb" + "" + (j + 8)).disabled = true;
      }
      else {
        document.getElementById("sh" + "" + (j + 15)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j + 15)).style.color = "green";
        document.getElementById("cb" + "" + (j + 8)).disabled = true;
        total1++;
      }
    }
    else {
      if (document.getElementById("cb" + (j + 8)).value == "e") {
        total1++;
      }
      document.getElementById("sh" + "" + (j + 15)).innerHTML = "Correct Answer : " + store[j];
      document.getElementById("sh" + "" + (j + 15)).style.color = "green";
      document.getElementById("cb" + "" + (j + 8)).disabled = true;
    }
  }
}

function checkans10() {
  check2();
  console.log("Check asn 10 called")
  disFlag2 = 1;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      addClass(document.getElementById("t" + (i + 1) + (j + 1)), "out");
    }
  }
  document.getElementById("matrixT").style.visibility = "visible";
  document.getElementById("sh21").style.color = "green";
  document.getElementById("sh21").innerHTML = "Correct Answer";
}

function checkans11() {
  check1();
  console.log("Check asn 11 called")
  disFlag1 = 1;
  for (var i = 0; i < 5; i++) {
    addClass(document.getElementById("t" + (i + 1)), "out");
  }
  document.getElementById("sh22").style.color = "green";
  document.getElementById("sh22").innerHTML = "Correct Answer";
  document.getElementById("slicingA").style.visibility = "visible";
}

document.getElementById("show").onclick = function () {
  document.getElementById("resul").style.display = "none";
  document.getElementById("res").style.display = "inline-block";
  document.getElementById("container" + "" + myArray[0]).style.display = "block";
  document.getElementById("container77").style.display = "none";
}
function rel() {
  window.location.reload(true);
}
//Retriving the Values from Input Field
var fno = document.getElementById("first");
var option;
//Retrieving the Button Elements by Id
n = document.getElementById("btn1");
r = document.getElementById("btn2");
e = document.getElementById("btn3");
p = document.getElementById("btn4");
ra1 = Math.floor(Math.random() * (1000 - 100)) + 100;
ra2 = Math.floor(Math.random() * (1000 - 100)) + 100;
r.onclick = function () {
  window.location.reload(true);
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("ins");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

document.getElementById("sm").onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var arr;
var val2D = 1, val = 0, store = [];

function datainput() {
  document.getElementById("demo").innerHTML = "";
  arr = (document.getElementById("arrval").value).split(",");
  var iftag = [];
  option = document.getElementById("operation").value;
  if (option == "") {
    launch_toast("Please Select the Correct Statement");
  }
  else if ((document.getElementById("key").value == "") && (option == "0")) {
    launch_toast("Please Enter The Key Element");
  }
  else if (arr.length != parseInt(document.getElementById("size1DArr").value) && ((option == "0") || (option == "2"))) {
    launch_toast("Please Enter Values As Per The Size Of Array");
  }
  else if (((document.getElementById("size2DArrrow").value == "")) && (option == "2")) {
    launch_toast("Enter The Starting Index");
  }
  else if (((document.getElementById("size2DArrcol").value == "")) && (option == "2")) {
    launch_toast("Enter The Ending Index");
  }
  else {
    if (option == "0") {
      iftag = ["package main", 'import("fmt")', "func main(){", "      arr:=[5]int{1,4,2,3,7}", "      var i int", "      var flag,key int=0,", "      for i=0;i<5;i++{", "     if arr[i]==key{", "      flag=i+1", "   break}", "   }", "    if flag!=0{", 'fmt.Print("Element Found At Position ",flag)', "}else{", 'fmt.Print("Element Not Found")}', '}'];
    }
    if (option == "1") {
      iftag = ['package main', 'import "fmt"', 'func main() {', '    var arr[2][5] int', "      for i:=0;i<5;i++{", "      for j:=0;j<5;j++{", '          fmt.Print(arr[i][j]+brr[i][j]," ")', '       }', '       fmt.Println()}', '}'];
    }
    if (option == "2") {
      iftag = ['package main', 'import "fmt"', 'func main() {', '    arr := [6]int{2, 3, 5, 7, 11, 13}', "      var i,j int=", "      var subarr []int = arr[", '          fmt.Println(subarr)', '}'];
    }
    if (((document.getElementById("size2DArrrow").value != "") && (document.getElementById("size2DArrcol").value != "")) || (document.getElementById("size1DArr").value != "")) {
      var iflen = iftag.length;
      var pretag = "";
      for (var i = 0; i < iflen; i++) {
        pretag = document.createElement("pre");
        pretag.id = "a1" + i;
        var pretext = document.createTextNode(iftag[i]);
        pretag.append(pretext);
        document.getElementById("demo").appendChild(pretag);
      }
      if (option == "0") {
        document.getElementById("a15").innerHTML += document.getElementById("key").value;
        document.getElementById("a13").innerHTML = "      arr:=[" + document.getElementById("size1DArr").value + "]int{" + document.getElementById("arrval").value + "}";
        document.getElementById("a16").innerHTML = "      for i=0;i<" + document.getElementById("size1DArr").value + ";i++{";
        document.getElementById("pic1").style.display = "block";
        document.getElementById("flow1").style.display = "block";
      }
      if (option == "2") {
        document.getElementById("a13").innerHTML = "      arr:=[" + document.getElementById("size1DArr").value + "]int{" + document.getElementById("arrval").value + "}";
        document.getElementById("a14").innerHTML += document.getElementById("size2DArrrow").value + "," + document.getElementById("size2DArrcol").value;
        document.getElementById("a15").innerHTML += document.getElementById("size2DArrrow").value + ":" + document.getElementById("size2DArrcol").value + "]";
      }
      if (option == "1") {
        document.getElementById("a13").innerHTML = "      var arr,brr=[" + document.getElementById("size2DArrrow").value + "][" + document.getElementById("size2DArrcol").value + "]int";
        document.getElementById("a14").innerHTML = "      for i:=0;i<" + document.getElementById("size2DArrrow").value + ";i++{";
        document.getElementById("a15").innerHTML = "      for j:=0;j<" + document.getElementById("size2DArrcol").value + ";j++{";
        document.getElementById("pic2").style.display = "block";
        document.getElementById("flow2").style.display = "block";
        for (i = 0; i < parseInt(document.getElementById("size2DArrrow").value); i++) {
          if (i == 0)
            document.getElementById("a13").innerHTML += "{";
          for (j = 0; j < parseInt(document.getElementById("size2DArrcol").value); j++) {
            if (j == 0)
              document.getElementById("a13").innerHTML += "{" + (val2D++) + ",";
            else if ((j == (parseInt(document.getElementById("size2DArrcol").value) - 1)) && (i == (parseInt(document.getElementById("size2DArrrow").value) - 1)))
              document.getElementById("a13").innerHTML += (val2D++) + "}";
            else if (j == (parseInt(document.getElementById("size2DArrcol").value) - 1))
              document.getElementById("a13").innerHTML += (val2D++) + "},";
            else
              document.getElementById("a13").innerHTML += (val2D++) + ",";
          }
          if (i == (parseInt(document.getElementById("size2DArrrow").value) - 1))
            document.getElementById("a13").innerHTML += "},";
        }
        document.getElementById("a13").innerHTML += "[" + document.getElementById("size2DArrrow").value + "][" + document.getElementById("size2DArrcol").value + "]int";
        for (i = 0; i < parseInt(document.getElementById("size2DArrrow").value); i++) {
          if (i == 0)
            document.getElementById("a13").innerHTML += "{";
          for (j = 0; j < parseInt(document.getElementById("size2DArrcol").value); j++) {
            store[val++] = (Math.floor(Math.random() * (100 - 1)) + 1);
            if (j == 0)
              document.getElementById("a13").innerHTML += "{" + store[val - 1] + ",";
            else if ((j == (parseInt(document.getElementById("size2DArrcol").value) - 1)) && (i == (parseInt(document.getElementById("size2DArrrow").value) - 1)))
              document.getElementById("a13").innerHTML += store[val - 1] + "}";
            else if (j == (parseInt(document.getElementById("size2DArrcol").value) - 1))
              document.getElementById("a13").innerHTML += store[val - 1] + "},";
            else
              document.getElementById("a13").innerHTML += store[val - 1] + ",";
          }
          if (i == (parseInt(document.getElementById("size2DArrrow").value) - 1))
            document.getElementById("a13").innerHTML += "}";
        }
      }

      addClass(e, "out");
      n.style.display = "inline-block";
    }
    else {
      launch_toast("Please Enter The Values");
    }

  }
}
document.getElementById("operation").onchange = function () {
  if (document.getElementById("operation").selectedIndex == 1) {
    document.getElementById("size1DArr").style.display = "block";
    document.getElementById("key").style.display = "block";
    document.getElementById("arrval").style.display = "block";
    document.getElementById("size2DArrrow").style.display = "none";
    document.getElementById("size2DArrcol").style.display = "none";
  }
  else if (document.getElementById("operation").selectedIndex == 2) {
    document.getElementById("size1DArr").style.display = "none";
    document.getElementById("key").style.display = "none";
    document.getElementById("arrval").style.display = "none";
    document.getElementById("size2DArrrow").style.display = "block";
    document.getElementById("size2DArrcol").style.display = "block";

  }
  else if (document.getElementById("operation").selectedIndex == 3) {
    document.getElementById("size2DArrrow").placeholder = "Enter The Starting Index";
    document.getElementById("size2DArrcol").placeholder = "Enter The Ending Index";
    document.getElementById("size2DArrrow").style.display = "block";
    document.getElementById("size2DArrcol").style.display = "block";
    document.getElementById("size1DArr").style.display = "block";
    document.getElementById("arrval").style.display = "block";
  }
  else {
    launch_toast("Please Select The Operation");
  }
}
var count = 0;
var i = 0;
var sum = 0, flag = 0;
var w = 0;
var k = 0;
var x = 0, temp;
n.onclick = function () {
  if (option == 0) {
    v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    if (v[i] == 1) {
      document.getElementById("a10").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 4) {
      document.getElementById("tbl").style.display = "block";
      var table = document.getElementById("arr1D");
      var row1 = table.insertRow(0);
      var row2 = table.insertRow(1);
      var row3 = table.insertRow(2);
      for (m = 0; m <= parseInt(document.getElementById("size1DArr").value); m++) {
        var cell1 = row1.insertCell(m);
        var cell2 = row2.insertCell(m);
        cell2.id = "col" + m;
        var cell3 = row3.insertCell(m);

        if (m == 0) {
          cell1.innerHTML = "Index";
          cell2.innerHTML = "Values";
          cell3.innerHTML = "Address";
          cell1.style.backgroundColor = "grey";
          cell2.style.backgroundColor = "grey";
          cell3.style.backgroundColor = "grey";
        }
        else {
          cell1.innerHTML = "arr[" + String(m - 1) + "]";
          cell1.style.backgroundColor = "grey";
          cell2.innerHTML = arr[m - 1];
          cell3.innerHTML = String(ra1 + 2 * m);
          cell3.style.backgroundColor = "grey";

        }
      }
      document.getElementById("info").innerHTML = "Where arr is the base address of array and arr[i] means element at i<sup>th</sup>index where i=0,1,2,....,n-1 if size of array is n.";
      document.getElementById("a12").style.color = "#018013";
      document.getElementById("a13").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 7) {
      w++;
      if (w == (parseInt(document.getElementById("size1DArr").value) + 1))
        i += 4;
      else
        i++;
      document.getElementById("a15").style.color = "#018013";
      document.getElementById("a16").style.color = "#f50707";
    }
    else if (v[i] == 8) {
      document.getElementById("col" + w).style.backgroundColor = "#f50707";
      if (parseInt(arr[w - 1]) == parseInt(document.getElementById("key").value)) {
        flag = 1;
        document.getElementById("col" + w).style.backgroundColor = "#018013";
        temp = w;
        w = parseInt(document.getElementById("size1DArr").value);
        i++;
      }
      else {
        i += 3;
      }
      document.getElementById("a16").style.color = "#018013";
      document.getElementById("a17").style.color = "#f50707";
    }
    else if (v[i] == 11) {
      if (w == parseInt(document.getElementById("size1DArr").value))
        i++;
      else
        i = 6;
      if (flag == 1)
        document.getElementById("a19").style.color = "#018013";
      else
        document.getElementById("a17").style.color = "#018013";
      document.getElementById("a110").style.color = "#f50707";
    }
    else if (v[i] == 12) {
      if (flag == 1)
        i++;
      else
        i += 2;
      document.getElementById("a110").style.color = "#018013";
      document.getElementById("a111").style.color = "#f50707";
    }
    else if (v[i] == 13) {
      if (flag == 1) {
        document.getElementById("r3c1").style.display = "block";
        document.getElementById("r3c1").innerHTML += "Element Found At Position " + temp;
      }
      i += 3;
      document.getElementById("a111").style.color = "#018013";
      document.getElementById("a112").style.color = "#f50707";
    }
    else if (v[i] == 14) {
      if (flag == 0)
        document.getElementById("a111").style.color = "#018013";
      document.getElementById("a113").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 16) {
      if (flag == 1) {
        document.getElementById("a112").style.color = "#018013";
      }
      else {
        document.getElementById("a114").style.color = "#018013";
      }
      i++;
      document.getElementById("a115").style.color = "#f50707";
    }
    else if (v[i] == 17) {
      document.getElementById("a115").style.color = "#018013";
      launch_toast("Program Completed");
      document.getElementById("test").style.display = "block";
      document.getElementById("btn1").disabled = true;
      addClass(document.getElementById("btn1"), "out");
    }
    else {
      if (v[i] == 15) {
        document.getElementById("r3c1").style.display = "block";
        document.getElementById("r3c1").innerHTML += "Element Not Found";
      }
      document.getElementById("a1" + (i - 1)).style.color = "#018013";
      document.getElementById("a1" + i).style.color = "#f50707";
      i++;
    }
    console.log("v[i]", v[i]);
  }
  else if (option == 1) {
    v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    if (v[i] == 1) {
      document.getElementById("a10").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 4) {
      document.getElementById("tbl").style.display = "block";
      var table = document.getElementById("arr2D");
      for (m = 0; m <= parseInt(document.getElementById("size2DArrrow").value); m++) {
        var row = table.insertRow(m);
        row.id = "row" + m;

      }
      for (p = 0; p <= parseInt(document.getElementById("size2DArrrow").value); p++)
        for (m = 0; m <= parseInt(document.getElementById("size2DArrcol").value); m++) {
          var cell = document.getElementById("row" + p).insertCell(m);
          cell.id = "col" + p + m;
          if (p == 0) {
            if (m == 0) {
              document.getElementById("col" + p + m).innerHTML = "arr";
              document.getElementById("col" + p + m).style.backgroundColor = "grey";
            }
            else {
              document.getElementById("col" + p + m).style.backgroundColor = "grey";
              document.getElementById("col" + p + m).innerHTML = "col" + m;
            }
          }
          else {
            if (m != 0)
              document.getElementById("col" + p + m).innerHTML = String(++k);
            else {
              document.getElementById("col" + p + m).style.backgroundColor = "grey";
              document.getElementById("col" + p + m).innerHTML = "row" + p;
            }
          }
        }
      k = 0;
      var table1 = document.getElementById("arr2D1");
      for (m = 0; m <= parseInt(document.getElementById("size2DArrrow").value); m++) {
        var row1 = table1.insertRow(m);
        row1.id = "row" + m + "" + m;

      }
      for (p = 0; p <= parseInt(document.getElementById("size2DArrrow").value); p++)
        for (m = 0; m <= parseInt(document.getElementById("size2DArrcol").value); m++) {
          var cell1 = document.getElementById("row" + p + "" + p).insertCell(m);
          cell1.id = "col" + p + "" + p + m;
          if (p == 0) {
            if (m == 0) {
              document.getElementById("col" + p + "" + p + m).innerHTML = "brr";
              document.getElementById("col" + p + "" + p + m).style.backgroundColor = "grey";
            }
            else {
              document.getElementById("col" + p + "" + p + m).style.backgroundColor = "grey";
              document.getElementById("col" + p + "" + p + m).innerHTML = "col" + m;
            }
          }
          else {
            if (m != 0)
              document.getElementById("col" + p + "" + p + m).innerHTML = String(store[k++]);
            else {
              document.getElementById("col" + p + "" + p + m).style.backgroundColor = "grey";
              document.getElementById("col" + p + "" + p + m).innerHTML = "row" + p;
            }
          }
        }
      k = 0;
      var table2 = document.getElementById("arr2D2");
      for (m = 0; m <= parseInt(document.getElementById("size2DArrrow").value); m++) {
        var row2 = table2.insertRow(m);
        row2.id = "row" + m + "" + m + "" + m;

      }
      for (p = 0; p <= parseInt(document.getElementById("size2DArrrow").value); p++)
        for (m = 0; m <= parseInt(document.getElementById("size2DArrcol").value); m++) {
          var cell2 = document.getElementById("row" + p + "" + p + "" + p).insertCell(m);
          cell2.id = "col" + p + "" + p + m + "" + m;
          if (p == 0) {
            if (m == 0) {
              document.getElementById("col" + p + "" + p + m + "" + m).innerHTML = "Output";
              document.getElementById("col" + p + "" + p + m + "" + m).style.backgroundColor = "grey";
            }
            else {
              document.getElementById("col" + p + "" + p + m + "" + m).style.backgroundColor = "grey";
              document.getElementById("col" + p + "" + p + m + "" + m).innerHTML = "col" + m;
            }
          }
          else {
            if (m != 0)
              document.getElementById("col" + p + "" + p + m + "" + m).innerHTML = "NaN";
            else {
              document.getElementById("col" + p + "" + p + m + "" + m).style.backgroundColor = "grey";
              document.getElementById("col" + p + "" + p + m + "" + m).innerHTML = "row" + p;
            }
          }
        }
      k = 0;
      document.getElementById("info").innerHTML = "Where arr is the base address of array and arr[i][j] means element at i<sup>th</sup>row and j<sup>th</sup> column where i=0,1,2,....,n-1 and j=0,1,2,....,m-1 if size of matrix is n*m.";
      document.getElementById("a12").style.color = "#018013";
      document.getElementById("a13").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 5) {
      w++;
      if (w == (parseInt(document.getElementById("size2DArrrow").value) + 1))
        i += 5;
      else
        i++;
      document.getElementById("a13").style.color = "#018013";
      document.getElementById("a14").style.color = "#f50707";
    }
    else if (v[i] == 6) {
      x++;
      if (x == (parseInt(document.getElementById("size2DArrcol").value) + 1))
        i += 3;
      else
        i++;
      document.getElementById("a14").style.color = "#018013";
      document.getElementById("a15").style.color = "#f50707";
    }
    else if (v[i] == 7) {
      var temp1 = store[count] + (++count);
      document.getElementById("col" + w + "" + w + x + "" + x).innerHTML = String(temp1);
      if ((w == 1) && (x == 1))
        document.getElementById("r3c1").style.display = "block";
      document.getElementById("col" + w + x).style.backgroundColor = "red";
      document.getElementById("col" + w + "" + w + x + "" + x).style.backgroundColor = "red";
      document.getElementById("col" + w + "" + w + x).style.backgroundColor = "red";
      if (x == 1)
        document.getElementById("r3c5").innerHTML += "<br>";
      document.getElementById("r3c5").innerHTML += temp1 + " ";
      document.getElementById("a15").style.color = "#018013";
      document.getElementById("a16").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 8) {
      document.getElementById("col" + w + x).style.backgroundColor = "blue";
      document.getElementById("col" + w + "" + w + x + "" + x).style.backgroundColor = "blue";
      document.getElementById("col" + w + "" + w + x).style.backgroundColor = "blue";
      document.getElementById("a16").style.color = "#018013";
      document.getElementById("a17").style.color = "#f50707";
      if (x == parseInt(document.getElementById("size2DArrcol").value)) {
        i++;
        x = 0;
        console.log("Hello");
      }
      else
        i = 5;
    }
    else if (v[i] == 9) {
      document.getElementById("a17").style.color = "#018013";
      document.getElementById("a18").style.color = "#f50707";
      if (w == parseInt(document.getElementById("size2DArrrow").value))
        i++;
      else
        i = 4;
    }
    else if (v[i] == 11) {
      document.getElementById("a19").style.color = "#018013";
      launch_toast("Program Completed");
      document.getElementById("test").style.display = "block";
      document.getElementById("btn1").disabled = true;
      addClass(document.getElementById("btn1"), "out");
    }
    else {
      if (i == 11)
        return;
      document.getElementById("a1" + (i - 1)).style.color = "#018013";
      document.getElementById("a1" + i).style.color = "#f50707";
      i++;
    }
    console.log("v[i]", v[i]);
    console.log(w, x, i);
  }
  else if (option == 2) {
    v = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (v[i] == 1) {
      document.getElementById("a10").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 4) {
      document.getElementById("tbl").style.display = "block";
      var table = document.getElementById("arr1D");
      var row1 = table.insertRow(0);
      var row2 = table.insertRow(1);
      var row3 = table.insertRow(2);
      for (m = 0; m <= parseInt(document.getElementById("size1DArr").value); m++) {
        var cell1 = row1.insertCell(m);
        var cell2 = row2.insertCell(m);
        cell2.id = "col" + m;
        var cell3 = row3.insertCell(m);

        if (m == 0) {
          cell1.innerHTML = "Index";
          cell2.innerHTML = "Values";
          cell3.innerHTML = "Address";
          cell1.style.backgroundColor = "grey";
          cell2.style.backgroundColor = "grey";
          cell3.style.backgroundColor = "grey";
        }
        else {
          cell1.innerHTML = "arr[" + String(m - 1) + "]";
          cell1.style.backgroundColor = "grey";
          cell2.innerHTML = arr[m - 1];
          cell3.innerHTML = String(ra1 + 2 * m);
          cell3.style.backgroundColor = "grey";

        }
      }
      document.getElementById("info").innerHTML = "Where arr is the base address of array and arr[i] means element at i<sup>th</sup>index where i=0,1,2,....,n-1 if size of array is n.";
      document.getElementById("a12").style.color = "#018013";
      document.getElementById("a13").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 6) {
      var table = document.getElementById("arr2D");
      var p = parseInt(document.getElementById("size2DArrrow").value);
      var q = parseInt(document.getElementById("size2DArrcol").value) - 1;
      var row1 = table.insertRow(0);
      var row2 = table.insertRow(1);
      var row3 = table.insertRow(2);
      for (m = 0; m <= (q - p + 1); m++) {
        var cell1 = row1.insertCell(m);
        var cell2 = row2.insertCell(m);
        var cell3 = row3.insertCell(m);

        if (m == 0) {
          cell1.innerHTML = "Index";
          cell2.innerHTML = "Values";
          cell3.innerHTML = "Address";
          cell1.style.backgroundColor = "grey";
          cell2.style.backgroundColor = "grey";
          cell3.style.backgroundColor = "grey";
        }
        else {
          cell1.innerHTML = "subarr[" + String(m - 1) + "]";
          cell1.style.backgroundColor = "grey";
          cell2.innerHTML = arr[m + p - 1];
          cell3.innerHTML = String(ra2 + 2 * m);
          cell3.style.backgroundColor = "grey";
          document.getElementById("col" + (m + p)).style.backgroundColor = "red";
        }
      }
      document.getElementById("a14").style.color = "#018013";
      document.getElementById("a15").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 7) {
      var p = parseInt(document.getElementById("size2DArrrow").value);
      var q = parseInt(document.getElementById("size2DArrcol").value);
      document.getElementById("r3c1").style.display = "block";
      document.getElementById("r3c5").innerHTML = "[" + arr.slice(p, q) + "]";
      document.getElementById("a15").style.color = "#018013";
      document.getElementById("a16").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 9) {
      document.getElementById("a17").style.color = "#018013";
      launch_toast("Program Completed");
      document.getElementById("test").style.display = "block";
      document.getElementById("btn1").disabled = true;
      addClass(document.getElementById("btn1"), "out");
    }
    else {
      document.getElementById("a1" + (i - 1)).style.color = "#018013";
      document.getElementById("a1" + i).style.color = "#f50707";
      i++;
    }
    console.log("v[i]", v[i]);
  }
}
function launch_toast(text) {
  var x = document.getElementById("toast")
  x.className = "show";
  document.getElementById("desc").innerHTML = text;
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}