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
var myArray = ["11", "22", "33", "44", "55", "66", "88", "99"];
var noq = [3, 3, 3, 1, 1, 1, 9, 10];
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
  var a = document.getElementById("a111");
  if (a.value == 'i=1;i<=5;i++') {
    total += 1;
    document.getElementById("sh1").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh1").innerHTML = 'Correct Answer : i=1;i<=5;i++';
    document.getElementById("a111").disabled = true;
    document.getElementById("sh1").style.borderColor = "green";
  }
  if (a.value != 'i=1;i<=5;i++') {
    total1 += 1;
    document.getElementById("sh1").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh1").innerHTML = 'Correct Answer : i=1;i<=5;i++';
    document.getElementById("a111").disabled = true;
    document.getElementById("sh1").style.borderColor = "red";
  }
  console.log(total, total1);
}
function checkans2() {
  var a = document.getElementById("b11");
  var b = document.getElementById("b22");
  if (a.value == '5') {
    total += 1;

    document.getElementById("sh2").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh2").innerHTML = 'Correct Answer : 5';
    document.getElementById("b11").disabled = true;
    document.getElementById("sh2").style.borderColor = "green";
  }

  if (a.value != '5') {
    total1 += 1;
    document.getElementById("sh2").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh2").innerHTML = 'Correct Answer : 5';
    document.getElementById("b11").disabled = true;
    document.getElementById("sh2").style.borderColor = "red";
  }
  if ((b.value == 'f=f*i')||(b.value == 'f*=i')) {
    total += 1;

    document.getElementById("sh3").style.color = "green";
    b.style.borderColor = "green";
    document.getElementById("sh3").innerHTML = 'Correct Answer : f=f*i or f*=i';
    document.getElementById("b22").disabled = true;
    document.getElementById("sh3").style.borderColor = "green";
  }

  if ((b.value != 'f=f*i') &&(b.value != 'f*=i')){
    total1 += 1;
    document.getElementById("sh3").style.color = "green";
    b.style.borderColor = "red";
    document.getElementById("sh3").innerHTML = 'Correct Answer : f=f*i or f*=i';
    document.getElementById("b22").disabled = true;
    document.getElementById("sh3").style.borderColor = "red";
  }
}
function checkans3() {
  var a = document.getElementById("c11");
  var b = document.getElementById("c22");
  if (a.value == 'j=1;j<=i;j++') {
    total += 1;
    a.style.borderColor = "green";
    document.getElementById("sh4").style.color = "green";
    document.getElementById("sh4").innerHTML = 'Correct Answer : j=1;j<=i;j++';
    document.getElementById("c11").disabled = true;
    document.getElementById("sh4").style.borderColor = "green";
  }

  if (a.value != 'j=1;j<=i;j++') {
    total1 += 1;
    document.getElementById("sh4").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh4").innerHTML = 'Correct Answer : j=1;j<=i;j++';
    document.getElementById("c11").disabled = true;
    document.getElementById("sh4").style.borderColor = "red";
  }
  if (b.value == 'fmt.Print("*")') {
    total += 1;
    b.style.borderColor = "green";
    document.getElementById("sh5").style.color = "green";
    document.getElementById("sh5").innerHTML = 'Correct Answer : fmt.Print("*")';
    document.getElementById("c22").disabled = true;
    document.getElementById("sh5").style.borderColor = "green";
  }

  if (b.value != 'fmt.Print("*")') {
    total1 += 1;
    document.getElementById("sh5").style.color = "green";
    b.style.borderColor = "red";
    document.getElementById("sh5").innerHTML = 'Correct Answer : fmt.Print("*")';
    document.getElementById("c22").disabled = true;
    document.getElementById("sh5").style.borderColor = "red";
  }
}
function checkans4() {
  var a = document.getElementById("d11");
  var b = document.getElementById("d22");
  if (a.value == 'for') {
    total += 1;
    document.getElementById("sh6").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh6").innerHTML = 'Correct Answer : for';
    document.getElementById("d11").disabled = true;
    document.getElementById("sh6").style.borderColor = "green";
  }
  if (a.value != 'for') {
    total1 += 1;
    document.getElementById("sh6").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh6").innerHTML = 'Correct Answer : for';
    document.getElementById("d11").disabled = true;
    document.getElementById("sh6").style.borderColor = "red";
  }
  if (b.value == 'sum=sum+2*k') {
    total += 1;
    document.getElementById("sh7").style.color = "green";
    b.style.borderColor = "green";
    document.getElementById("sh7").innerHTML = 'Correct Answer : sum=sum+2*k';
    document.getElementById("d22").disabled = true;
    document.getElementById("sh7").style.borderColor = "green";
  }
  if (b.value != 'sum=sum+2*k') {
    total1 += 1;
    document.getElementById("sh7").style.color = "green";
    b.style.borderColor = "red";
    document.getElementById("sh7").innerHTML = 'Correct Answer : sum=sum+2*k';
    document.getElementById("d22").disabled = true;
    document.getElementById("sh7").style.borderColor = "red";
  }
}
function checkans5() {
  var a = document.getElementById("e11");
  var b = document.getElementById("e22");
  if (a.value == 'j=1;j<=i;j++') {
    total += 1;
    document.getElementById("sh8").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh8").innerHTML = 'Correct Answer : j=1;j<=i;j++';
    document.getElementById("e11").disabled = true;
    document.getElementById("sh8").style.borderColor = "green";
  }
  if (a.value != 'j=1;j<=i;j++') {
    total1 += 1;
    document.getElementById("sh8").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh8").innerHTML = 'Correct Answer : j=1;j<=i;j++';
    document.getElementById("e11").disabled = true;
    document.getElementById("sh8").style.borderColor = "red";
  }
  if (b.value == 'fmt.Print(j)') {
    total += 1;
    document.getElementById("sh9").style.color = "green";
    b.style.borderColor = "green";
    document.getElementById("sh9").innerHTML = 'Correct Answer : fmt.Print(j)';
    document.getElementById("e22").disabled = true;
    document.getElementById("sh9").style.borderColor = "green";
  }
  if (b.value != 'fmt.Print(j)') {
    total1 += 1;
    document.getElementById("sh9").style.color = "green";
    b.style.borderColor = "red";
    document.getElementById("sh9").innerHTML = 'Correct Answer : fmt.Print(j)';
    document.getElementById("e22").disabled = true;
    document.getElementById("sh9").style.borderColor = "red";
  }

}
function checkans6() {
  var a = document.getElementById("f11");
  if (a.value == 'i=1;i<=10;i++') {
    total += 1;
    document.getElementById("sh10").style.color = "green";
    a.style.borderColor = "green";
    document.getElementById("sh10").innerHTML = 'Correct Answer : i=1;i<=10;i++';
    document.getElementById("f11").disabled = true;
    document.getElementById("sh10").style.borderColor = "green";
  }
  if (a.value != 'i=1;i<=10;i++') {
    total1 += 1;
    document.getElementById("sh10").style.color = "green";
    a.style.borderColor = "red";
    document.getElementById("sh10").innerHTML = 'Correct Answer : i=1;i<=10;i++';
    document.getElementById("f11").disabled = true;
    document.getElementById("sh10").style.borderColor = "red";
  }

}
function checkans8() {
  var store = ["package main", 'import("fmt")', "func main(){", "var sum,i int=0,1", "for i=1;i<=5;i++", 'sum=sum+i',  'fmt.Print("The Sum is : ",sum)}'];
  for (var j = 0; j < 7; j++) {
    console.log("cb"+(j + 1));
    if ((document.getElementById("cb" + (j + 1))).checked == true) {
      if (document.getElementById("cb" + (j + 1)).value == "e") {
        total++;
        document.getElementById("sh" + "" + (j + 12)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j + 12)).style.color = "green";
        document.getElementById("cb" + "" + (j + 1)).disabled = true;
      }
      else {
        document.getElementById("sh" + "" + (j + 12)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j + 12)).style.color = "green";
        document.getElementById("cb" + "" + (j + 1)).disabled = true;
        total1++;
      }
    }
    else {
      if (document.getElementById("cb" + (j + 1)).value == "e") {
        total1++;
      }
      document.getElementById("sh" + "" + (j + 12)).innerHTML = "Correct Answer : " + store[j];
      document.getElementById("sh" + "" + (j + 12)).style.color = "green";
      document.getElementById("cb" + "" + (j + 1)).disabled = true;
    }
    console.log(total, total1);
  }

}
function checkans9() {
  var store = ["package main", 'import("fmt")', "func main(){", "var n,i int", "for i=1;i<=10;i=i+2", 'sum=sum+i',  'fmt.Print("Sum is : ",sum)', "}"];
  for (var j = 0; j < 8; j++) {
    if ((document.getElementById("cb" + (j+8))).checked == true) {
      if (document.getElementById("cb" + (j+8)).value == "e") {
        total++;
        document.getElementById("sh" + "" + (j+19)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j+19)).style.color = "green";
        document.getElementById("cb" + "" + (j+8)).disabled = true;
      }
      else {
        document.getElementById("sh" + "" + (j+19)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j+19)).style.color = "green";
        document.getElementById("cb" + "" + (j+8)).disabled = true;
        total1++;
      }
    }
    else {
      if (document.getElementById("cb" + (j+8)).value == "e") {
        total1++;
      }
      document.getElementById("sh" + "" + (j+19)).innerHTML = "Correct Answer : " + store[j];
      document.getElementById("sh" + "" + (j+19)).style.color = "green";
      document.getElementById("cb" + "" + (j+8)).disabled = true;
    }
  }
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
ra3 = Math.floor(Math.random() * (1000 - 100)) + 100;
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

function datainput() {
  e.disabled = "true";
  addClass(e, "out");
  document.getElementById("demo").innerHTML = "";
  var iftag = [];
  option = document.getElementById("operation").value;
  if (option == "") {
    alert("Please Select the Correct Statement");
  }
  else {
    if (option == "0") {
      document.getElementById("pic1").style.display = "block";
      document.getElementById("flow1").style.display="block";
      iftag = ['package main', 'import "fmt"', 'func main(){', '    var sum int= 0', '    var i,n int','    fmt.Print("Enter The Value Of n : ")', '    fmt.Scan(&n)', '    for  ', '    sum += i', '    fmt.Printf("The Sum Of first %d natural numbers is : %d",n,sum)', '}'];
    }
    if (option == "1") {
      document.getElementById("pic2").style.display = "block";
      document.getElementById("flow2").style.display="block";
      iftag = ['package main', 'import "fmt"', 'func main() {', '    var sum,i int=0,1', '    var n int', '    fmt.Print("Enter The Value Of n : ")', '    fmt.Scan(&n)', '    for i<=n {', '        sum += i', '        i++','     }', '    fmt.Printf("The Sum Of first %d natural numbers is : %d",n,sum)', '}'];
    }
    if (option == "2") {
      document.getElementById("pic3").style.display = "block";
      iftag = ['package main', 'import "fmt"', 'func main() {', '    var i,j int', '    for {', '    for {', '    fmt.Print("*")', '     }', '    fmt.Println()', '      }', '}']
    }
    var iflen = iftag.length;
    var pretag = "";
    for (var i = 0; i < iflen; i++) {
      pretag = document.createElement("pre");
      pretag.id = "a1" + i;
      var pretext = document.createTextNode(iftag[i]);
      pretag.append(pretext);
      document.getElementById("demo").appendChild(pretag);
      if((i==7)&&(option==0))
      {
        var m=['i=1;','i<=n;','i++']
        for(j=0;j<3;j++)
        {
          spantag = document.createElement("span");
          spantag.id = "s" + (j+1);
          var spantext = document.createTextNode(m[j]);
          spantag.append(spantext);
          document.getElementById("a17").appendChild(spantag);
        }
      }
      if((i==4)&&(option==2))
      {
        var m=['i=1;','i<=5;','i++']
        for(j=0;j<3;j++)
        {
          spantag = document.createElement("span");
          spantag.id = "s" + (j+1);
          var spantext = document.createTextNode(m[j]);
          spantag.append(spantext);
          document.getElementById("a14").appendChild(spantag);
        }
      }
        if((i==5)&&(option==2))
      {
        var m=['j=1;','j<=3;','j++']
        for(j=0;j<3;j++)
        {
          spantag = document.createElement("span");
          spantag.id = "s1"+(j+1);
          var spantext = document.createTextNode(m[j]);
          spantag.append(spantext);
          document.getElementById("a15").appendChild(spantag);
        }
      }
    }
    n.style.display = "inline-block";
  }
}
var i = 0;
var aa = 0;
var sum=0;
var lflag=0,rflag=0;
var w=0,x=0;
n.onclick = function () {
  if (option == 0) {
    v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    if (v[i] == 1) {
      document.getElementById("a10").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 4) {
      document.getElementById("tbl").style.display = "block";
      document.getElementById("r4c1").style.display = "inline-block";
      document.getElementById("r4c8").style.display = "inline-block";
      document.getElementById("m1").innerHTML = String(ra1);
      document.getElementById("a12").style.color = "#018013";
      document.getElementById("a13").style.color = "#f50707";
      document.getElementById("b1").classList.add("fullSizebox");
      
      document.getElementById("b2").style.backgroundColor = "red";
      document.getElementById("b1").innerHTML = String(0);
      i++;
    }
    else if(v[i]==5)
    {
      document.getElementById("b2").style.backgroundColor = "blue";
      document.getElementById("a13").style.color = "#018013";
      document.getElementById("a14").style.color = "#f50707";
      document.getElementById("r4c3").style.display = "inline-block";
      document.getElementById("r4c5").style.display = "inline-block";
      document.getElementById("r4c9").style.display = "inline-block";
      document.getElementById("m2").innerHTML = String(ra2);
      document.getElementById("r4c7").style.display = "inline-block";
      document.getElementById("m3").innerHTML = String(ra3);
      document.getElementById("b2").classList.add("fullSizebox");
      document.getElementById("b3").classList.add("fullSizebox");
      i++;
    }
    else if (v[i] == 6) {
      document.getElementById("fn1").style.display = "inline-block";
      document.getElementById("a14").style.color = "#018013";
      document.getElementById("a15").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 7) {
      document.getElementById("r1c1").style.display = "inline-block";
      document.getElementById("a15").style.color = "#018013";
      document.getElementById("a16").style.color = "#f50707";
      if (fno.value == "") {
        fno.style.borderColor = "red";
        aa = 1;
      }
      else if (isNaN(fno.value)) {
        alert("Not A Number");
        aa = 1;
      }
      else {
        fno.style.borderColor = "green";
        document.getElementById("b3").innerHTML = fno.value;
        document.getElementById("b3").style.backgroundColor = "red";
        i++;
        aa = 2;
      }
    }
    else if (v[i] == 8) {
        document.getElementById("a17").style.color = "black";
        document.getElementById("a18").style.color = "black";
        document.getElementById("s1").style.color = "black";
        document.getElementById("s2").style.color = "black";
        document.getElementById("s3").style.color = "black";
        document.getElementById("b2").style.backgroundColor = "red";
        document.getElementById("b3").style.backgroundColor = "blue";
        document.getElementById("b1").style.backgroundColor = "blue";
        document.getElementById("a16").style.color = "#018013";
        document.getElementById("a17").style.color = "#f50707";
        if(lflag==0)
        {
          document.getElementById("s1").style.color="blue";
          document.getElementById("s2").style.color="blue";
        }
        else{
          document.getElementById("s3").style.color="blue";
          document.getElementById("s2").style.color="blue";
        }
        document.getElementById("b2").innerHTML=String(++w);
        if(w==(parseInt(fno.value)+1))
        {
          document.getElementById("a17").style.color="#018013";
          document.getElementById("a18").style.color="#018013";
          i+=2;
        }
        else
        i++;
        lflag=1;
        console.log("W:",w);
      }
      else if (v[i] == 9) {
        document.getElementById("b1").style.backgroundColor = "red";
        document.getElementById("b2").style.backgroundColor = "blue";
        sum=sum+w;
        console.log(sum);
        document.getElementById("b1").innerHTML=String(sum);
        document.getElementById("a17").style.color = "#018013";
        document.getElementById("a18").style.color = "#f50707";
        var val=parseInt(fno.value);
        console.log(val);
        i=7;
      }
    else if (v[i] == 10) {
      if(w==(parseInt(fno.value)+1))
      {
        document.getElementById("a17").style.color="#018013";
        document.getElementById("a18").style.color="#018013";
        document.getElementById("b2").style.backgroundColor="blue";
      }
      document.getElementById("s1").style.color = "#018013";
      document.getElementById("s2").style.color = "#018013";
      document.getElementById("s3").style.color = "#018013";
      document.getElementById("r3c1").style.display = "inline-block";
      document.getElementById("r3c5").innerHTML = String("The Sum Of first "+parseInt(fno.value)+" natural numbers is : "+parseInt(sum));
      document.getElementById("a18").style.color = "#018013";
      document.getElementById("a19").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 12) {
      document.getElementById("a110").style.color = "#018013";
      alert("Program Completed");
      document.getElementById("test").style.display = "block";
      if (i == 11)
        i++;
      else
        return;
    }
    else {
      if (v[i] == 7)
        document.getElementById("b1").style.backgroundColor = "blue";
      if (v[i] == 9)
        document.getElementById("b1").style.backgroundColor = "blue";
      document.getElementById("a1" + (i - 1)).style.color = "#018013";
      document.getElementById("a1" + i).style.color = "#f50707";
      i++;
    }
    console.log("v[i]", v[i]);
  }
  else if (option == 1) {
      v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14];
      if (v[i] == 1) {
        w=1;
        document.getElementById("a10").style.color = "#f50707";
        i++;
      }
      else if (v[i] == 4) {
        document.getElementById("tbl").style.display = "block";
        document.getElementById("r4c1").style.display = "inline-block";
        document.getElementById("r4c8").style.display = "inline-block";
        document.getElementById("r4c3").style.display = "inline-block";
        document.getElementById("r4c9").style.display = "inline-block";
        document.getElementById("m2").innerHTML = String(ra2);
        document.getElementById("m1").innerHTML = String(ra1);
        document.getElementById("a12").style.color = "#018013";
        document.getElementById("a13").style.color = "#f50707";
        document.getElementById("b1").style.backgroundColor = "red";
        document.getElementById("b2").style.backgroundColor = "red";
        document.getElementById("b1").classList.add("fullSizebox");
        document.getElementById("b2").classList.add("fullSizebox");
        document.getElementById("b1").innerHTML = String(0);
        document.getElementById("b2").innerHTML = String(1);
        i++;
      }
      else if(v[i]==5)
      {
        document.getElementById("b1").style.backgroundColor = "blue";
        document.getElementById("b2").style.backgroundColor = "blue";
        document.getElementById("a13").style.color = "#018013";
        document.getElementById("a14").style.color = "#f50707";
        
        document.getElementById("r4c5").style.display = "inline-block";
        
        document.getElementById("r4c7").style.display = "inline-block";

        document.getElementById("m3").innerHTML = String(ra3);
        document.getElementById("b3").classList.add("fullSizebox");
        i++;
      }
      else if (v[i] == 6) {
        document.getElementById("fn1").style.display = "inline-block";
        document.getElementById("a14").style.color = "#018013";
        document.getElementById("a15").style.color = "#f50707";
        i++;
      }
      else if (v[i] == 7) {
        document.getElementById("r1c1").style.display = "inline-block";
        document.getElementById("a15").style.color = "#018013";
        document.getElementById("a16").style.color = "#f50707";
        if (fno.value == "") {
          fno.style.borderColor = "red";
          aa = 1;
        }
        else if (isNaN(fno.value)) {
          alert("Not A Number");
          aa = 1;
        }
        else {
          fno.style.borderColor = "green";
          document.getElementById("b3").innerHTML = fno.value;
          document.getElementById("b3").style.backgroundColor = "red";
          i++;
          aa = 2;
        }
      }
      else if (v[i] == 8) {
          document.getElementById("a17").style.color="black";
          document.getElementById("a18").style.color="black";
          document.getElementById("a19").style.color="black";
          document.getElementById("b3").style.backgroundColor = "blue";
          document.getElementById("b2").style.backgroundColor = "blue";
          document.getElementById("a16").style.color = "#018013";
          document.getElementById("a17").style.color = "#f50707";
          var val=parseInt(fno.value);
          if(w==(parseInt(fno.value)+1))
          {
            document.getElementById("a17").style.color="#018013";
            document.getElementById("a18").style.color="#018013";
            document.getElementById("a19").style.color="#018013";
            i=11;
          }
          else
          i++;
        }
        else if (v[i] == 9) {
          document.getElementById("b1").style.backgroundColor = "red";
          sum+=w;
          console.log(sum);
          document.getElementById("b1").innerHTML=String(sum);
          document.getElementById("a17").style.color = "#018013";
          document.getElementById("a18").style.color = "#f50707";
          i++;
        }
        else if(v[i]==10)
        {
          document.getElementById("b2").innerHTML=String(++w);
          document.getElementById("b1").style.backgroundColor = "blue";
          document.getElementById("b2").style.backgroundColor = "red";
          document.getElementById("a18").style.color = "#018013";
          document.getElementById("a19").style.color = "#f50707";
          i=7;
        }
      else if (v[i] == 12) {
        document.getElementById("r3c1").style.display = "inline-block";
        document.getElementById("r3c5").innerHTML = String("The Sum Of first "+parseInt(fno.value)+" natural numbers is : "+parseInt(sum));
        document.getElementById("a110").style.color = "#018013";
        document.getElementById("a111").style.color = "#f50707";
        i++;
      }
      else if (v[i] == 14) {
        document.getElementById("a112").style.color = "#018013";
        alert("Program Completed");
        document.getElementById("test").style.display = "block";
        if (i == 13)
          i++;
        else
          return;
      }
      else {
        document.getElementById("a1" + (i - 1)).style.color = "#018013";
        document.getElementById("a1" + i).style.color = "#f50707";
        i++;
      }
      console.log("v[i]", v[i]);
    }
  else if (option == 2) {
    v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    if (v[i] == 1) {
      document.getElementById("a10").style.color = "#f50707";
      i++;
    }
    else if (v[i] == 4) {
      document.getElementById("tbl").style.display = "block";
      document.getElementById("change1").innerHTML="i";
      document.getElementById("change2").innerHTML="j";
      document.getElementById("r4c1").style.display = "inline-block";
      document.getElementById("r4c8").style.display = "inline-block";
      document.getElementById("m1").innerHTML = String(ra1);
      document.getElementById("r4c3").style.display = "inline-block";
      document.getElementById("r4c9").style.display = "inline-block";
      document.getElementById("m2").innerHTML = String(ra2);
      document.getElementById("a12").style.color = "#018013";
      document.getElementById("a13").style.color = "#f50707";
      document.getElementById("b1").classList.add("fullSizebox");
      document.getElementById("b2").classList.add("fullSizebox");
      i++;
    }
    else if (v[i] == 5) {
        document.getElementById("a14").style.color = "black";
        document.getElementById("a15").style.color = "black";
        document.getElementById("a16").style.color = "black";
        document.getElementById("a17").style.color = "black";
        document.getElementById("a18").style.color = "black";
        document.getElementById("s1").style.color = "black";
        document.getElementById("s2").style.color = "black";
        document.getElementById("s3").style.color = "black";
        document.getElementById("s11").style.color = "black";
        document.getElementById("s12").style.color = "black";
        document.getElementById("s13").style.color = "black";
        document.getElementById("a13").style.color = "#018013";
        document.getElementById("a14").style.color = "#f50707";
        if(lflag==0)
        {
          document.getElementById("s1").style.color="blue";
          document.getElementById("s2").style.color="blue";
          document.getElementById("b1").innerHTML=String(++w);
        }
        else{
          document.getElementById("s3").style.color="blue";
          document.getElementById("s2").style.color="blue";
          document.getElementById("b1").innerHTML=String(++w);
        }
        document.getElementById("b1").style.backgroundColor="red";
        if(w==6)
        i+=5;
        else
        i++;
        lflag=1;
      document.getElementById("a13").style.color = "#018013";
      document.getElementById("a14").style.color = "#f50707";
    }
    else if(v[i]==6)
    {
      document.getElementById("b1").style.backgroundColor="blue";
        document.getElementById("a15").style.color = "black";
        document.getElementById("a16").style.color = "black";
        document.getElementById("a17").style.color = "black";
        document.getElementById("a18").style.color = "black";
        document.getElementById("s11").style.color = "black";
        document.getElementById("s12").style.color = "black";
        document.getElementById("s13").style.color = "black";
        document.getElementById("a14").style.color = "#018013";
        document.getElementById("a15").style.color = "#f50707";
        if(rflag==0)
        {
          document.getElementById("s11").style.color="blue";
          document.getElementById("s12").style.color="blue";
          document.getElementById("b2").innerHTML=String(++x);
        }
        else{
          document.getElementById("s13").style.color="blue";
          document.getElementById("s12").style.color="blue";
          document.getElementById("b2").innerHTML=String(++x);
        }
        document.getElementById("b2").style.backgroundColor="red";
        if(x==4)
        {
          i+=2;
          x=0;
        }
        else
        i++;
        rflag=1;
      document.getElementById("a14").style.color = "#018013";
      document.getElementById("a15").style.color = "#f50707";
    }
    else if(v[i]==7)
    {
      document.getElementById("b2").style.backgroundColor="blue";
      document.getElementById("r3c1").style.display="block";
      document.getElementById("a15").style.color = "#018013";
      document.getElementById("a16").style.color = "#f50707";
        i=5;
        document.getElementById("r3c5").innerHTML+="* ";
    }
    else if(v[i]==9)
    {
      document.getElementById("r3c5").innerHTML+="<br>";
      document.getElementById("a17").style.color = "#018013";
      document.getElementById("a18").style.color = "#f50707";
        i=4;
        rflag=0;
    }
    
    else if (v[i] == 12) {
      alert("Program Completed");
      document.getElementById("a110").style.color = "#018013";
      document.getElementById("test").style.display = "block";
      if (i == 11)
        i++;
      else
        return;
    }
    else {
      if(v[i]==8)
      {
        document.getElementById("b2").style.backgroundColor="blue";
        document.getElementById("a17").style.color = "#018013";
        document.getElementById("a16").style.color = "#018013";
        document.getElementById("a15").style.color = "#018013";
      }
      if(v[i]==10)
      {
        document.getElementById("b1").style.backgroundColor="blue";
        document.getElementById("a19").style.color = "#018013";
        document.getElementById("a18").style.color = "#018013";
        document.getElementById("a17").style.color = "#018013";
        document.getElementById("a16").style.color = "#018013";
        document.getElementById("a15").style.color = "#018013";
        document.getElementById("a14").style.color = "#018013";
        document.getElementById("s1").style.color="#018013";
        document.getElementById("s2").style.color="#018013";
        document.getElementById("s3").style.color="#018013";
        document.getElementById("s11").style.color="#018013";
        document.getElementById("s12").style.color="#018013";
        document.getElementById("s13").style.color="#018013";
      }
      document.getElementById("a1" + (i - 1)).style.color = "#018013";
      document.getElementById("a1" + i).style.color = "#f50707";
      i++;
    }
  }
}