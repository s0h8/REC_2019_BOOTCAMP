//Editor

document.getElementById("test").onclick=function (){
  document.getElementById("container5").style.display="block";
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
      document.getElementById("percentage").innerHTML = "Percentage : " + String(Math.round((total/(total+total1))*100))+"%";
      if (total > 10)
          document.getElementById("feedback").innerHTML = "Feedback : Excellent";
      else if (total > 5)
          document.getElementById("feedback").innerHTML = "Feedback : It's Ok";
      else
          document.getElementById("feedback").innerHTML = "Feedback : Try Again";
      document.getElementById("show").style.display = "block";
  }

}
function checkans1() {
  var a = document.getElementById("a111");
  var b = document.getElementById("a22");
  var c = document.getElementById("a33");
  if (a.value == '"fmt"')
      {
        total += 1;
        document.getElementById("sh1").style.color="green";
        a.style.borderColor="green";
        document.getElementById("sh1").innerHTML='Correct Answer : "fmt"';
        document.getElementById("a111").disabled=true;
        document.getElementById("sh1").style.borderColor="green";
      }

  if (b.value == "main")
  {
    total += 1;
    document.getElementById("sh2").style.color="green";
    b.style.borderColor="green";
    document.getElementById("sh2").innerHTML='Correct Answer : main';
    document.getElementById("a22").disabled=true;
    document.getElementById("sh2").style.borderColor="green";
  }
  if (c.value == "fmt") 
  {
    total += 1;
    document.getElementById("sh3").style.color="green";
    c.style.borderColor="green";
    document.getElementById("sh3").innerHTML='Correct Answer : fmt';
    document.getElementById("a33").disabled=true;
    document.getElementById("sh3").style.borderColor="green";
  }
  if (a.value != '"fmt"')
  {
    total1 += 1;
    document.getElementById("sh1").style.color="green";
    a.style.borderColor="red";
    document.getElementById("sh1").innerHTML='Correct Answer : "fmt"';
    document.getElementById("a111").disabled=true;
    document.getElementById("sh1").style.borderColor="red";
  }
  if (b.value != "main")
  {
    total1 += 1;
    document.getElementById("sh2").style.color="green";
    b.style.borderColor="red";
    document.getElementById("sh2").innerHTML='Correct Answer : main';
    document.getElementById("a22").disabled=true;
    document.getElementById("sh2").style.borderColor="red";
  }
  if (c.value != "fmt")
  {
    total1 += 1;
    document.getElementById("sh3").style.color="green";
    c.style.borderColor="red";
    document.getElementById("sh3").innerHTML='Correct Answer : fmt';
    document.getElementById("a33").disabled=true;
    document.getElementById("sh3").style.borderColor="red";
  }
  console.log(total,total1);
}
function checkans2() {
  var a = document.getElementById("b11");
  var b = document.getElementById("b22");
  var c = document.getElementById("b33");
  if (a.value == 'import')
  {
    total += 1;
    
    document.getElementById("sh4").style.color="green";
    a.style.borderColor="green";
    document.getElementById("sh4").innerHTML='Correct Answer : import';
    document.getElementById("b11").disabled=true;
    document.getElementById("sh4").style.borderColor="green";
  }
  if (b.value == "a*(a+1)/2")
  {
    total += 1;
    document.getElementById("sh5").style.color="green";
    b.style.borderColor="green";
    document.getElementById("sh5").innerHTML='Correct Answer : a*(a+1)/2';
    document.getElementById("b22").disabled=true;
    document.getElementById("sh5").style.borderColor="green";
  }
  if (c.value == "fmt")
  { 
    total += 1;
    c.style.borderColor="green";
    document.getElementById("sh6").style.color="green";
    document.getElementById("sh6").innerHTML='Correct Answer : fmt';
    document.getElementById("b33").disabled=true;
    document.getElementById("sh6").style.borderColor="green";
  }

  if (a.value != 'import')
  {
    total1 += 1;
    document.getElementById("sh4").style.color="green";
    a.style.borderColor="red";
    document.getElementById("sh4").innerHTML='Correct Answer : import';
    document.getElementById("b11").disabled=true;
    document.getElementById("sh4").style.borderColor="red";
  }
  if (b.value != "a*(a+1)/2")
  {
    total1 += 1;
    document.getElementById("sh5").style.color="green";
    b.style.borderColor="red";
    document.getElementById("sh5").innerHTML='Correct Answer : a*(a+1)/2';
    document.getElementById("b22").disabled=true;
    document.getElementById("sh5").style.borderColor="red";
  }
  if (c.value != "fmt")
  { 
    total1 += 1;
    document.getElementById("sh6").style.color="green";
    c.style.borderColor="red";
    document.getElementById("sh6").innerHTML='Correct Answer : fmt';
    document.getElementById("b33").disabled=true;
    document.getElementById("sh6").style.borderColor="red";
  }
}
function checkans3() {
  var a = document.getElementById("c11");
  var b = document.getElementById("c22");

  var c = document.getElementById("c33");
  if (a.value == 'var')
  { 
    total += 1;
    a.style.borderColor="green";
    document.getElementById("sh7").style.color="green";
    document.getElementById("sh7").innerHTML='Correct Answer : var';
    document.getElementById("c11").disabled=true;
    document.getElementById("sh7").style.borderColor="green";
  }
  if (b.value == "2")
  { 
    total += 1;
    b.style.borderColor="green";
    document.getElementById("sh8").style.color="green";
    document.getElementById("sh8").innerHTML='Correct Answer : 2';
    document.getElementById("c22").disabled=true;
    document.getElementById("sh8").style.borderColor="green";
  }
  if (c.value == "result")
  { 
    total += 1;
    c.style.borderColor="green";
    document.getElementById("sh9").style.color="green";
    document.getElementById("sh9").innerHTML='Correct Answer : result';
    document.getElementById("c33").disabled=true;
    document.getElementById("sh9").style.borderColor="green";
  }

  if (a.value != 'var')
  { 
    total1 += 1;
    document.getElementById("sh7").style.color="green";
    a.style.borderColor="red";
    document.getElementById("sh7").innerHTML='Correct Answer : var';
    document.getElementById("c11").disabled=true;
    document.getElementById("sh7").style.borderColor="red";
  }
  if (b.value != "2")
  { 
    total1 += 1;
    document.getElementById("sh8").style.color="green";
    b.style.borderColor="red";
    document.getElementById("sh8").innerHTML='Correct Answer : 2';
    document.getElementById("c22").disabled=true;
    document.getElementById("sh8").style.borderColor="red";
  }
  if (c.value != "result")
  { 
    total1 += 1;
    document.getElementById("sh9").style.color="green";
    c.style.borderColor="red";
    document.getElementById("sh9").innerHTML='Correct Answer : result';
    document.getElementById("c33").disabled=true;
    document.getElementById("sh9").style.borderColor="red";
  }
}
function checkans4() {
  var a = document.getElementById("d11");
  if (a.value == 'k')
  { 
    total += 1;
    document.getElementById("sh10").style.color="green";
    a.style.borderColor="green";
    document.getElementById("sh10").innerHTML='Correct Answer : k';
    document.getElementById("d11").disabled=true;
    document.getElementById("sh10").style.borderColor="green";
  }
  if (a.value != 'k')
  { 
    total1 += 1;
    document.getElementById("sh10").style.color="green";
    a.style.borderColor="red";
    document.getElementById("sh10").innerHTML='Correct Answer : k';
    document.getElementById("d11").disabled=true;
    document.getElementById("sh10").style.borderColor="red";
  }
}
function checkans5() {
  var a = document.getElementById("e11");
  if (a.value == 'result')
  { 
    total += 1;
    document.getElementById("sh11").style.color="green";
    a.style.borderColor="green";
    document.getElementById("sh11").innerHTML='Correct Answer : result';
    document.getElementById("e11").disabled=true;
    document.getElementById("sh11").style.borderColor="green";
  }
  if (a.value != 'result')
  { 
    total1 += 1;
    document.getElementById("sh11").style.color="green";
    a.style.borderColor="red";
    document.getElementById("sh11").innerHTML='Correct Answer : result';
    document.getElementById("e11").disabled=true;
    document.getElementById("sh11").style.borderColor="red";
  }

}
function checkans6() {
  var a = document.getElementById("f11");
  if (a.value == 'result')
  { 
    total += 1;
    document.getElementById("sh12").style.color="green";
    a.style.borderColor="green";
    document.getElementById("sh12").innerHTML='Correct Answer : result';
    document.getElementById("f11").disabled=true;
    document.getElementById("sh12").style.borderColor="green";
  }
  if (a.value != 'result')
  { 
    total1 += 1;
    document.getElementById("sh12").style.color="green";
    a.style.borderColor="red";
    document.getElementById("sh12").innerHTML='Correct Answer : result';
    document.getElementById("f11").disabled=true;
    document.getElementById("sh12").style.borderColor="red";
  }

}
function checkans8() {
  var store=["package main",'import("fmt")',"func main(){","var a,b,c int","a=10","b=20","c=b/a",'fmt.Print("Result",c)',"}"];
  for (var j = 0; j < 9; j++) {
      console.log("cb" + (j + 1));
      console.log(document.getElementById("cb" + (j + 1)).value)
      if ((document.getElementById("cb" + (j + 1))).checked == true) {
          if (document.getElementById("cb" + (j + 1)).value == "e")
          {
            total++;
            document.getElementById("sh"+""+(j+13)).innerHTML="Correct Answer : "+store[j];
            document.getElementById("sh"+""+(j+13)).style.color="green";
            document.getElementById("cb"+""+(j+1)).style.backgroundColor="green";
            document.getElementById("cb"+""+(j+1)).disabled=true;
          }
          else
          {
            document.getElementById("cb"+""+(j+1)).style.borderColor="red";
            document.getElementById("sh"+""+(j+13)).innerHTML="Correct Answer : "+store[j];
            document.getElementById("sh"+""+(j+13)).style.color="green";
            document.getElementById("cb"+""+(j+1)).disabled=true;
            total1++;
          }
      }
      else
          {
            document.getElementById("cb"+""+(j+1)).style.borderColor="red";
            document.getElementById("sh"+""+(j+13)).innerHTML="Correct Answer : "+store[j];
            document.getElementById("sh"+""+(j+13)).style.color="green";
            document.getElementById("cb"+""+(j+1)).disabled=true;
            if (document.getElementById("cb" + (j + 1)).value == "e") {
                total1++;
            }
          }
      console.log(total, total1);
  }

}
function checkans9() {
  var store=["package main",'import("fmt")',"func main(){","var a,b,c,d int","a=10","b=20","c=25","d=a*b+c",'fmt.Print(result)',"}"];
  for (var j = 0; j < 10; j++) {
      if ((document.getElementById("cb" + (j + 10))).checked == true) {
          if (document.getElementById("cb" + (j + 10)).value == "e")
              {
                total++;
                document.getElementById("sh"+""+(j+22)).innerHTML="Correct Answer : "+store[j];
                document.getElementById("sh"+""+(j+22)).style.color="green";
                document.getElementById("cb"+""+(j+10)).style.borderColor="green";
                document.getElementById("cb"+""+(j+10)).disabled=true;
              }
          else
          {
            document.getElementById("cb"+""+(j+10)).style.borderColor="red";
            document.getElementById("sh"+""+(j+22)).innerHTML="Correct Answer : "+store[j];
            document.getElementById("sh"+""+(j+22)).style.color="green";
            document.getElementById("cb"+""+(j+10)).disabled=true;
            total1++;
          }
      }
      else
      {
        document.getElementById("cb"+""+(j+10)).style.borderColor="red";
        document.getElementById("sh"+""+(j+22)).innerHTML="Correct Answer : "+store[j];
        document.getElementById("sh"+""+(j+22)).style.color="green";
        document.getElementById("cb"+""+(j+10)).disabled=true;
        if (document.getElementById("cb" + (j + 10)).value == "e") {
          total1++;
        }
      }
  }
}
document.getElementById("show").onclick=function(){
  document.getElementById("resul").style.display="none";
  document.getElementById("res").style.display="inline-block";
  document.getElementById("container"+""+myArray[0]).style.display="block";
  document.getElementById("container77").style.display="none";
}
function rel(){
  window.location.reload(true);
}

//Retriving the Values for Both the Input Fields
var fno = document.getElementById("first");
var lno = document.getElementById("last");
var option;
var aa,bb;
//Retrieving the Button Elements by Id
n = document.getElementById("btn1");
r = document.getElementById("btn2");
e = document.getElementById("btn3");
p = document.getElementById("btn4");
ra1 = Math.floor(Math.random() * (1000 - 100)) + 100;
ra2 = Math.floor(Math.random() * (1000 - 100)) + 100;
ra3 = Math.floor(Math.random() * (1000 - 100)) + 100;
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("ins");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

document.getElementById("sm").onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.getElementById("a1").onmouseover = function () {
  document.getElementById("i1").style.display = "block";
}
document.getElementById("a1").onmouseout = function () {
  document.getElementById("i1").style.display = "none";
}
document.getElementById("a2").onmouseover = function () {
  document.getElementById("i2").style.display = "block";
}
document.getElementById("a2").onmouseout = function () {
  document.getElementById("i2").style.display = "none";
}
document.getElementById("a3").onmouseover = function () {
  document.getElementById("i3").style.display = "block";
}
document.getElementById("a3").onmouseout = function () {
  document.getElementById("i3").style.display = "none";
}
document.getElementById("a5").onmouseover = function () {
  document.getElementById("i4").style.display = "block";
}
document.getElementById("a5").onmouseout = function () {
  document.getElementById("i4").style.display = "none";
}
document.getElementById("a6").onmouseover = function () {
  document.getElementById("i5").style.display = "block";
}
document.getElementById("a6").onmouseout = function () {
  document.getElementById("i5").style.display = "none";
}

//onclick event for Execute Button
e.onclick = function () {
  option = document.getElementById("op").value;
  if (option == "") {
    alert("Please Select Operation");
  }
  else {
    document.getElementById("btn1").style.display = "inline-block";

    document.getElementById("btn4").style.display = "inline-block";
    if (option >= 0 && option <= 4)
      console.log(option);

    if (option == 0) {
      document.getElementById("a9").innerHTML = "&nbsp c = a + b";
      document.getElementById("a10").innerHTML = '&nbsp fmt.print("The Sum is", c)';
      document.getElementById("sumpic").style.display = "block";
      document.getElementById("subpic").style.display = "none";
      document.getElementById("mulpic").style.display = "none";
      document.getElementById("divpic").style.display = "none";
      document.getElementById("modpic").style.display = "none";
    }
    if (option == 2) {
      document.getElementById("a9").innerHTML = "&nbsp c = a * b";
      document.getElementById("a10").innerHTML = '&nbsp fmt.Print("The Multiplication is", c)';
      document.getElementById("sumpic").style.display = "none";
      document.getElementById("subpic").style.display = "none";
      document.getElementById("mulpic").style.display = "block";
      document.getElementById("divpic").style.display = "none";
      document.getElementById("modpic").style.display = "none";
    } if (option == 1) {
      document.getElementById("a9").innerHTML = "&nbsp c = a - b";
      document.getElementById("a10").innerHTML = '&nbsp fmt.Print("The Subtraction is", c)';
      document.getElementById("sumpic").style.display = "none";
      document.getElementById("subpic").style.display = "block";
      document.getElementById("mulpic").style.display = "none";
      document.getElementById("divpic").style.display = "none";
      document.getElementById("modpic").style.display = "none";
    } if (option == 3) {
      document.getElementById("a9").innerHTML = "&nbsp c = a / b";
      document.getElementById("a10").innerHTML = '&nbsp fmt.Print("The Division is", c)';
      document.getElementById("sumpic").style.display = "none";
      document.getElementById("subpic").style.display = "none";
      document.getElementById("mulpic").style.display = "none";
      document.getElementById("divpic").style.display = "block";
      document.getElementById("modpic").style.display = "none";
    }
    if (option == 4) {
      document.getElementById("a9").innerHTML = "&nbsp c = a % b";
      document.getElementById("a10").innerHTML = '&nbsp fmt.Print("The Modulus is"+ c)';
      document.getElementById("sumpic").style.display = "none";
      document.getElementById("subpic").style.display = "none";
      document.getElementById("mulpic").style.display = "none";
      document.getElementById("divpic").style.display = "none";
      document.getElementById("modpic").style.display = "block";
    }
    document.getElementById("code").style.display = "block";
  }
}
var i = 0;
//onclick event for Start Button
n.onclick = function abc() {
  aa=0,bb=0;
  document.getElementById('tbl').style.display = "block";
  var c;
  var v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  if (option == 0) {
    c = parseInt(fno.value) + parseInt(lno.value);
  }
  if (option == 1) {
    c = parseInt(fno.value) - parseInt(lno.value);
  }
  if (option == 2) {
    c = parseInt(fno.value) * parseInt(lno.value);
  }
  if (option == 4) {
    c = parseInt(fno.value) % parseInt(lno.value);
  }
  if (option == 3) {
    if (parseInt(lno.value) == 0) {
      lno.style.borderColor = "green";
      document.getElementById("b2").innerHTML = String(0);
      document.getElementById("r3c4").style.display = "inline-block";
      document.getElementById("r3c4").innerHTML = "Divisible by Zero Error!";
      i = 12;
      document.getElementById("r3c1").style.display = "none";
    }
    else {
      c = parseInt(fno.value) / parseInt(lno.value);
    }
  }
  if (v[i] == 1) {
    document.getElementById("i1").style.display = "block";

    setTimeout(function () {
      document.getElementById("i1").style.display = "none";
    }, 3000);
    document.getElementById("a1").style.color = "#f50707";
    i++;
  }
  else if (v[i] == 2) {
    document.getElementById("i2").style.display = "block";

    setTimeout(function () {
      document.getElementById("i2").style.display = "none";
    }, 3000);
    document.getElementById("a1").style.color = "#018013";
    document.getElementById("a2").style.color = "#f50707";
    i++;
  }
  else if (v[i] == 3) {
    document.getElementById("i3").style.display = "block";

    setTimeout(function () {
      document.getElementById("i3").style.display = "none";
    }, 3000);
    document.getElementById("a2").style.color = "#018013";
    document.getElementById("a3").style.color = "#f50707";
    i++;
  }
  else if (v[i] == 4) {
    document.getElementById("r4c1").style.display = "inline-block";
    document.getElementById("r4c2").style.display = "inline-block";
    document.getElementById("b1").classList.add("fullSizebox");
    document.getElementById("r4c8").style.display = "inline-block";
    document.getElementById("m1").innerHTML = String(ra1);
    document.getElementById("m11").innerHTML = String(ra1);
    document.getElementById("r4c3").style.display = "inline-block";
    document.getElementById("r4c4").style.display = "inline-block";
    document.getElementById("b2").classList.add("fullSizebox");
    document.getElementById("r4c9").style.display = "inline-block";
    document.getElementById("m2").innerHTML = String(ra2);
    document.getElementById("m22").innerHTML = String(ra2);
    document.getElementById("r4c5").style.display = "inline-block";
    document.getElementById("r4c6").style.display = "inline-block";
    document.getElementById("b3").classList.add("fullSizebox");
    document.getElementById("r4c10").style.display = "inline-block";
    document.getElementById("m3").innerHTML = String(ra3);
    document.getElementById("m33").innerHTML = String(ra3);
    document.getElementById("r4c7").style.display = "block";
    document.getElementById("a3").style.color = "#018013";
    document.getElementById("a4").style.color = "#f50707";
    i++;

  }
  else if (v[i] == 5) {
    document.getElementById("i4").style.display = "block";

    setTimeout(function () {
      document.getElementById("i4").style.display = "none";
    }, 3000);
    document.getElementById("fn1").style.display="inline-block";
    document.getElementById("a4").style.color = "#018013";

    document.getElementById("a5").style.color = "#f50707";
    i++;
    console.log("aa"+aa);
  }
  else if (v[i] == 6) {
    document.getElementById("r1c1").style.display = "inline-block";
    document.getElementById("i5").style.display = "block";

    setTimeout(function () {
      document.getElementById("i5").style.display = "none";
    }, 3000);
    document.getElementById("a5").style.color = "#018013";
    document.getElementById("a6").style.color = "#f50707";
    
    if (fno.value == "") {
      fno.style.borderColor = "red";
      aa=1;
    }
    if (isNaN(fno.value)) {
      alert("Not A Number");
      aa=1;
    }
    if (!isNaN(fno.value) && (fno.value != "")) {
      fno.style.borderColor = "green";
      document.getElementById("b1").innerHTML = fno.value;
      document.getElementById("b1").style.backgroundColor = "red";
      aa=2;
      i++;
    }
  }
  else if (v[i] == 7) {
    document.getElementById("ln1").style.display="inline-block";
    document.getElementById("a6").style.color = "#018013";
    document.getElementById("a7").style.color = "#f50707";

    i++;
    console.log("bb"+bb);
  }
  else if (v[i] == 8) {
    document.getElementById("r2c1").style.display = "inline-block";
    document.getElementById("b1").style.backgroundColor = "blue";
    document.getElementById("a7").style.color = "#018013";
    document.getElementById("a8").style.color = "#f50707";
    if (lno.value == "") {
      lno.style.borderColor = "red";
      bb=1;
    }
    if (isNaN(lno.value)) {
      alert("Not A Number");
      bb=1;
    }
    if (!isNaN(lno.value) && (lno.value != "")) {
      bb=2;
      lno.style.borderColor = "green";
      document.getElementById("b2").innerHTML = lno.value;
      document.getElementById("b2").style.backgroundColor = "red";
      i++;
    }
  }
  else if (v[i] == 9) {
    document.getElementById("b2").style.backgroundColor = "blue";
    document.getElementById("a8").style.color = "#018013";
    document.getElementById("a9").style.color = "#f50707";
    
    document.getElementById("b3").style.backgroundColor = "red";
    document.getElementById("b3").innerHTML = String(c);
    i++;
  }
  else if (v[i] == 10) {
    
    
    if (option == 0) {
      document.getElementById("r3c1").style.display = "inline-block";
    }
    if (option == 1) {
      document.getElementById("r3c2").style.display = "inline-block";
    }
    if (option == 2) {
      document.getElementById("r3c3").style.display = "inline-block";
    }
    if (option == 3) {
      document.getElementById("r3c4").style.display = "inline-block";
    }
    if (option == 4) {
      document.getElementById("r3c6").style.display = "inline-block";
    }
    document.getElementById("a9").style.color = "#018013";
    document.getElementById("a10").style.color = "#f50707";
    document.getElementById("r3c5").innerHTML = String(c);
    i++;
  }
  else if (v[i] == 12) {
    document.getElementById("b3").style.backgroundColor = "blue";
    document.getElementById("a" + String(v[i] - 1)).style.color = "#018013";
    i++;
  }
  else if (v[i] == 13) {
    alert('Program Completed');

    document.getElementById("test").style.display = "inline-block";
    if(i==12)
    i++;
    else 
    return;
  }
  else {
    document.getElementById("a" + String(v[i] - 1)).style.color = "#018013";
    document.getElementById("a" + String(v[i])).style.color = "#f50707";
    i++;
  }
  console.log("i(n)" + i);
}

//Prev Button

p.onclick = function () {
  var v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  if (i > 0) {
    if(aa==1)
    {
      document.getElementById("r1c1").style.display = "none";

      document.getElementById("a5").style.color = "#f50707";

      document.getElementById("a6").style.color = "black";
      aa=0;
      return;
    }
    if(bb==1)
    {
      document.getElementById("r2c1").style.display = "none";

      document.getElementById("a7").style.color = "#f50707";

      document.getElementById("a8").style.color = "black";
      bb=0;
      return;
    }
    else
    i--;
    console.log("i(p)" + i);
    if (v[i] == 1) {
      document.getElementById("a1").style.color = "black";
    }
    else if (v[i] == 4) {
      document.getElementById("r4c1").style.display = "none";
      document.getElementById("r4c2").style.display = "none";
      document.getElementById("b1").classList.remove("fullSizeBox");
      document.getElementById("r4c8").style.display = "none";
      document.getElementById("r4c3").style.display = "none";
      document.getElementById("r4c4").style.display = "none";
      document.getElementById("b2").classList.remove("fullSizeBox");
      document.getElementById("r4c9").style.display = "none";
      document.getElementById("r4c5").style.display = "none";
      document.getElementById("r4c6").style.display = "none";
      document.getElementById("b3").classList.remove("fullSizeBox");
      document.getElementById("r4c10").style.display = "none";
      document.getElementById("r4c7").style.display = "none";
      document.getElementById("a3").style.color = "#f50707";
      document.getElementById("a4").style.color = "black";

    }
    else if (v[i] == 5) {
      document.getElementById("fn1").style.display="none";
      document.getElementById("a4").style.color = "#f50707";

      document.getElementById("a5").style.color = "black";

    }
    else if (v[i] == 6) {
      fno.value = "";
      document.getElementById("r1c1").style.display = "none";
      document.getElementById("a5").style.color = "#f50707";
      document.getElementById("a6").style.color = "black";
      document.getElementById("b1").innerHTML = "";

      document.getElementById("b1").style.backgroundColor = "blue";
    }
    else if (v[i] == 7) {
      document.getElementById("ln1").style.display="none";
      document.getElementById("b1").style.backgroundColor = "red";
      document.getElementById("a6").style.color = "#f50707";
      document.getElementById("a7").style.color = "black";
    }
    else if (v[i] == 8) {
      lno.value = "";
      document.getElementById("r2c1").style.display = "none";
      document.getElementById("b2").innerHTML = ""
      document.getElementById("a7").style.color = "#f50707";
      document.getElementById("a8").style.color = "black";
      document.getElementById("b2").style.backgroundColor = "blue";
    }
    else if (v[i] == 9) {
      document.getElementById("b3").innerHTML = ""
      document.getElementById("b2").style.backgroundColor = "red";
      document.getElementById("a8").style.color = "#f50707";
      document.getElementById("a9").style.color = "black";
      document.getElementById("b3").style.backgroundColor = "blue";
    }
    else if (v[i] == 10) {
      document.getElementById("r3c5").innerHTML = "";
      document.getElementById("b3").style.backgroundColor = "red";
      if (option == 0) {
        document.getElementById("r3c1").style.display = "none";
      }
      if (option == 1) {
        document.getElementById("r3c2").style.display = "none";
      }
      if (option == 2) {
        document.getElementById("r3c3").style.display = "none";
      }
      if (option == 3) {
        document.getElementById("r3c4").style.display = "none";
      }
      document.getElementById("a9").style.color = "#f50707";
      document.getElementById("a10").style.color = "black";
    }
    else if (v[i] == 12) {
      document.getElementById("a12").style.color = "black";
      document.getElementById("a11").style.color = "#f50707";
    }
    else if (v[i] == 13) {
      document.getElementById("a11").style.color="#f50707";
      document.getElementById("test").style.display = "none";
      document.getElementById("container5").style.display = "none";
    }
    else {
      document.getElementById("a" + String(v[i] - 1)).style.color = "#f50707";
      document.getElementById("a" + String(v[i])).style.color = "black";
    }
  }
}
//onclick event for Reset Button
r.onclick = function () {
  window.location.reload(true);
}
document.getElementById("op").onchange = function () {
  document.getElementById("sumpic").style.display = "none";
  document.getElementById("subpic").style.display = "none";
  document.getElementById("mulpic").style.display = "none";
  document.getElementById("divpic").style.display = "none";
  document.getElementById('code').style.display = "none";
  for (var k = 1; k <= 8; k++)
    document.getElementById("a" + k).style.color = "black";
  document.getElementById("a9").innerHTML = "";
  document.getElementById("a10").innerHTML = "";
  document.getElementById("a9").style.color = "black";
  document.getElementById("a10").style.color = "black";
  document.getElementById("a11").style.color = "black";
  document.getElementById("r4c1").style.display = "none";
  document.getElementById("r4c8").style.display = "none";
  document.getElementById("r4c3").style.display = "none";
  document.getElementById("r4c9").style.display = "none";
  document.getElementById("r4c5").style.display = "none";
  document.getElementById("r4c10").style.display = "none";
  document.getElementById("r4c7").style.display = "none";
  document.getElementById("r1c1").style.display = "none";
  document.getElementById("r2c1").style.display = "none";
  for (var k = 1; k <= 4; k++)
    document.getElementById("r3c" + k).style.display = "none";
  document.getElementById("r3c6").style.display = "none";
  document.getElementById("r3c5").innerHTML = "";
  document.getElementById("test").style.display = "none";
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn4").style.display = "none";
  document.getElementById("b1").classList.remove("fullSizebox");
  document.getElementById("b2").classList.remove("fullSizebox");
  document.getElementById("b3").classList.remove("fullSizebox");
  document.getElementById("b1").innerHTML = "";
  document.getElementById("b2").innerHTML = "";
  document.getElementById("b3").innerHTML = "";
  fno.value = "";
  lno.value = "";
  document.getElementById("b1").style.backgroundColor = "blue";
  document.getElementById("b2").style.backgroundColor = "blue";
  document.getElementById("b3").style.backgroundColor = "blue";
  ra1 = Math.floor(Math.random() * (1000 - 100)) + 100;
  ra2 = Math.floor(Math.random() * (1000 - 100)) + 100;
  ra3 = Math.floor(Math.random() * (1000 - 100)) + 100;
  i = 0;
  document.getElementById('tbl').style.display = "none";
  document.getElementById("container5").style.display="none";
}
console.log();