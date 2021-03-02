//Editor

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
    var b = document.getElementById("a22");
    if (a.value == 'if') {
      total += 1;
      document.getElementById("sh1").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh1").innerHTML = 'Correct Answer : if';
      document.getElementById("a111").disabled = true;
      document.getElementById("sh1").style.borderColor = "green";
    }
  
    if (b.value == "else") {
      total += 1;
      document.getElementById("sh2").style.color = "green";
      b.style.borderColor = "green";
      document.getElementById("sh2").innerHTML = 'Correct Answer : else';
      document.getElementById("a22").disabled = true;
      document.getElementById("sh2").style.borderColor = "green";
    }
    if (a.value != 'if') {
      total1 += 1;
      document.getElementById("sh1").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh1").innerHTML = 'Correct Answer : if';
      document.getElementById("a111").disabled = true;
      document.getElementById("sh1").style.borderColor = "red";
    }
    if (b.value != "else") {
      total1 += 1;
      document.getElementById("sh2").style.color = "green";
      b.style.borderColor = "red";
      document.getElementById("sh2").innerHTML = 'Correct Answer : else';
      document.getElementById("a22").disabled = true;
      document.getElementById("sh2").style.borderColor = "red";
    }
    console.log(total, total1);
  }
  function checkans2() {
    var a = document.getElementById("b11");
    if (a.value == '||') {
      total += 1;
  
      document.getElementById("sh3").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh3").innerHTML = 'Correct Answer : ||';
      document.getElementById("b11").disabled = true;
      document.getElementById("sh3").style.borderColor = "green";
    }
  
    if (a.value != '||') {
      total1 += 1;
      document.getElementById("sh3").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh3").innerHTML = 'Correct Answer : ||';
      document.getElementById("b11").disabled = true;
      document.getElementById("sh3").style.borderColor = "red";
    }
  }
  function checkans3() {
    var a = document.getElementById("c11");
    var b = document.getElementById("c22");
    if (a.value == 'bool') {
      total += 1;
      a.style.borderColor = "green";
      document.getElementById("sh4").style.color = "green";
      document.getElementById("sh4").innerHTML = 'Correct Answer : bool';
      document.getElementById("c11").disabled = true;
      document.getElementById("sh4").style.borderColor = "green";
    }
    if (b.value == "&&") {
      total += 1;
      b.style.borderColor = "green";
      document.getElementById("sh5").style.color = "green";
      document.getElementById("sh5").innerHTML = 'Correct Answer : &&';
      document.getElementById("c22").disabled = true;
      document.getElementById("sh5").style.borderColor = "green";
    }
  
    if (a.value != 'bool') {
      total1 += 1;
      document.getElementById("sh4").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh4").innerHTML = 'Correct Answer : bool';
      document.getElementById("c11").disabled = true;
      document.getElementById("sh4").style.borderColor = "red";
    }
    if (b.value != "&&") {
      total1 += 1;
      document.getElementById("sh5").style.color = "green";
      b.style.borderColor = "red";
      document.getElementById("sh5").innerHTML = 'Correct Answer : &&';
      document.getElementById("c22").disabled = true;
      document.getElementById("sh5").style.borderColor = "red";
    }
  }
  function checkans4() {
    var a = document.getElementById("d11");
    var b = document.getElementById("d22");
    if (a.value == 'int') {
      total += 1;
      document.getElementById("sh6").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh6").innerHTML = 'Correct Answer : int';
      document.getElementById("d11").disabled = true;
      document.getElementById("sh6").style.borderColor = "green";
    }
    if (a.value != 'int') {
      total1 += 1;
      document.getElementById("sh6").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh6").innerHTML = 'Correct Answer : int';
      document.getElementById("d11").disabled = true;
      document.getElementById("sh6").style.borderColor = "red";
    }
    if (b.value == 'i>j') {
      total += 1;
      document.getElementById("sh7").style.color = "green";
      b.style.borderColor = "green";
      document.getElementById("sh7").innerHTML = 'Correct Answer : i>j';
      document.getElementById("d22").disabled = true;
      document.getElementById("sh7").style.borderColor = "green";
    }
    if (b.value != 'i>j') {
      total1 += 1;
      document.getElementById("sh7").style.color = "green";
      b.style.borderColor = "red";
      document.getElementById("sh7").innerHTML = 'Correct Answer : i>j';
      document.getElementById("d22").disabled = true;
      document.getElementById("sh7").style.borderColor = "red";
    }
  }
  function checkans5() {
    var a = document.getElementById("e11");
    if (a.value == 'a==b') {
      total += 1;
      document.getElementById("sh8").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh8").innerHTML = 'Correct Answer : a==b';
      document.getElementById("e11").disabled = true;
      document.getElementById("sh8").style.borderColor = "green";
    }
    if (a.value != 'a==b') {
      total1 += 1;
      document.getElementById("sh8").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh8").innerHTML = 'Correct Answer : a==b';
      document.getElementById("e11").disabled = true;
      document.getElementById("sh8").style.borderColor = "red";
    }
  
  }
  function checkans6() {
    var a = document.getElementById("f11");
    if (a.value == 'a<=b') {
      total += 1;
      document.getElementById("sh9").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh9").innerHTML = 'Correct Answer : a<=b';
      document.getElementById("f11").disabled = true;
      document.getElementById("sh9").style.borderColor = "green";
    }
    if (a.value != 'a<=b') {
      total1 += 1;
      document.getElementById("sh9").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh9").innerHTML = 'Correct Answer : a<=b';
      document.getElementById("f11").disabled = true;
      document.getElementById("sh9").style.borderColor = "red";
    }
  
  }
  function checkans8() {
    var store = ["package main", 'import("fmt")', "func main(){", "var a,b bool=true,false","var c bool", "c=a&&b", 'fmt.Print("Result",c)', "}"];
    for (var j = 0; j < 8; j++) {
      console.log("cb" + (j + 1));
      console.log(document.getElementById("cb" + (j + 1)).value)
      if ((document.getElementById("cb" + (j + 1))).checked == true) {
        if (document.getElementById("cb" + (j + 1)).value == "e") {
          total++;
          document.getElementById("sh" + "" + (j+10)).innerHTML = "Correct Answer : " + store[j];
          document.getElementById("sh" + "" + (j+10)).style.color = "green";
          document.getElementById("cb" + "" + (j + 1)).disabled = true;
        }
        else {
          document.getElementById("sh" + "" + (j+10)).innerHTML = "Correct Answer : " + store[j];
          document.getElementById("sh" + "" + (j+10)).style.color = "green";
          document.getElementById("cb" + "" + (j + 1)).disabled = true;
          total1++;
        }
      }
      else {
        if (document.getElementById("cb" + (j + 1)).value == "e") {
          total1++;
        }
        document.getElementById("sh" + "" + (j+10)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j+10)).style.color = "green";
        document.getElementById("cb" + "" + (j + 1)).disabled = true;
      }
      console.log(total, total1);
    }
  
  }
  function checkans9() {
    var store = ["package main", 'import("fmt")', "func main(){", "var a,b,c,d bool", "a=should be boolean", "b=false", "c=true", "d=a&&b&&c", 'fmt.Print("Result",d)', "}"];
    for (var j = 0; j < 10; j++) {
      if ((document.getElementById("cb" + (j + 10))).checked == true) {
        if (document.getElementById("cb" + (j + 10)).value == "e") {
          total++;
          document.getElementById("sh" + "" + (j+18)).innerHTML = "Correct Answer : " + store[j];
          document.getElementById("sh" + "" + (j+18)).style.color = "green";
          document.getElementById("cb" + "" + (j + 10)).disabled = true;
        }
        else {
          document.getElementById("sh" + "" + (j+18)).innerHTML = "Correct Answer : " + store[j];
          document.getElementById("sh" + "" + (j+18)).style.color = "green";
          document.getElementById("cb" + "" + (j + 10)).disabled = true;
          total1++;
        }
      }
      else {
        if (document.getElementById("cb" + (j + 10)).value == "e") {
          total1++;
        }
        document.getElementById("sh" + "" + (j+18)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j+18)).style.color = "green";
        document.getElementById("cb" + "" + (j + 10)).disabled = true;
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
  var option, option1, option2;
  var aa, bb;
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
  document.getElementById("test").onclick=function(){
    document.getElementById("container5").style.display = "block";
    document.getElementById("simu").style.display="none";
    document.getElementById("simu1").style.display="none";
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
  
  var flag=0;
  //onclick event for Execute Button
  e.onclick = function () {
    option = document.getElementById("opr").value;
    option1 = document.getElementById("op1").value;
    option2 = document.getElementById("op2").value;
    console.log(option,option1,option2);
      document.getElementById("a15").onmouseover = function () {
        if(option2==1)
        document.getElementById("i6").style.display = "block";
        if(option2==2)
        document.getElementById("i7").style.display = "block";
        if(option2==3)
        document.getElementById("i8").style.display = "block";
        if(option1==1)
        document.getElementById("i9").style.display = "block";
        if(option1==2)
        document.getElementById("i10").style.display = "block";
        if(option1==3)
        document.getElementById("i11").style.display = "block";
        if(option1==4)
        document.getElementById("i12").style.display = "block";
        if(option1==5)
        document.getElementById("i13").style.display = "block";
        if(option1==6)
        document.getElementById("i14").style.display = "block";
    }
    document.getElementById("a15").onmouseout = function () {
      if(option2==1)
      document.getElementById("i6").style.display = "none";
      if(option2==2)
      document.getElementById("i7").style.display = "none";
      if(option2==3)
      document.getElementById("i8").style.display = "none";
      if(option1==1)
      document.getElementById("i9").style.display = "none";
      if(option1==2)
      document.getElementById("i10").style.display = "none";
      if(option1==3)
      document.getElementById("i11").style.display = "none";
      if(option1==4)
      document.getElementById("i12").style.display = "none";
      if(option1==5)
      document.getElementById("i13").style.display = "none";
      if(option1==6)
      document.getElementById("i14").style.display = "none";
    }
    
    if (option == "") {
      alert("Please Select Operation");
    }
    else {
      if (option == 1) {
        document.getElementById("op1").style.display = "block";
        document.getElementById("opr1").style.display = "block";
        document.getElementById("op2").style.display = "none";
        document.getElementById("opr2").style.display = "none";
        if(flag==0)
        {
          flag=1;
          return;
        }
        if (option1 == "")
          alert("Please Select The Relational Operator");
        else {
          document.getElementById("btn1").style.display = "inline-block";
  
          document.getElementById("btn4").style.display = "inline-block";
          document.getElementById("code").style.display = "block";
  
          if (option1 == 1) {
            document.getElementById("a15").innerHTML = "c=(a==b)";
            document.getElementById("a9").innerHTML = "if( c ) {";
            document.getElementById("a10").innerHTML = 'fmt.Printf(" a is equal to b\n" )';
            document.getElementById("a12").innerHTML = 'fmt.Printf(" a is not equal to b\n")';
            document.getElementById("detpic").style.display = "block";
            document.getElementById("netpic").style.display = "none";
            document.getElementById("lepic").style.display = "none";
            document.getElementById("gepic").style.display = "none";
            document.getElementById("ltetpic").style.display = "none";
            document.getElementById("gtetpic").style.display = "none";
            document.getElementById("netpic").style.display = "none";
          }
          if (option1 == 4) {
            document.getElementById("a15").innerHTML = 'c=(a&ltb)';
            document.getElementById("a9").innerHTML = "if( c ) {";
            document.getElementById("a10").innerHTML = 'fmt.Printf(" a is less than  b\n" )';
            document.getElementById("a12").innerHTML = 'fmt.Printf(" a is not less than b\n")';
            document.getElementById("detpic").style.display = "none";
            document.getElementById("lepic").style.display = "block";
            document.getElementById("gepic").style.display = "none";
            document.getElementById("ltetpic").style.display = "none";
            document.getElementById("gtetpic").style.display = "none";
            document.getElementById("netpic").style.display = "none";
          } 
          if (option1 == 3) {
            document.getElementById("a15").innerHTML = "c=(a&gtb)";
            document.getElementById("a9").innerHTML = "if( c ) {";
            document.getElementById("a10").innerHTML = 'fmt.Printf(" a is greater than  b\n" )';
            document.getElementById("a12").innerHTML = 'fmt.Printf(" a is not greater than b\n")';
            document.getElementById("detpic").style.display = "none";
            document.getElementById("lepic").style.display = "none";
            document.getElementById("gepic").style.display = "block";
            document.getElementById("ltetpic").style.display = "none";
            document.getElementById("gtetpic").style.display = "none";
            document.getElementById("netpic").style.display = "none";
          }
          if (option1 == 6) {
            document.getElementById("a15").innerHTML = "c=(a<=b)";
            document.getElementById("a9").innerHTML = "if( c ) {";
            document.getElementById("a10").innerHTML = 'fmt.Printf(" a is either less than or equal to b\n" )';
            document.getElementById("a12").innerHTML = 'fmt.Printf(" a is greater than b\n")';
            document.getElementById("detpic").style.display = "none";
            document.getElementById("lepic").style.display = "none";
            document.getElementById("gepic").style.display = "none";
            document.getElementById("ltetpic").style.display = "block";
            document.getElementById("gtetpic").style.display = "none";
            document.getElementById("netpic").style.display = "none";
          }
          if (option1 == 5) {
            document.getElementById("a15").innerHTML = "c=(a>=b)";
            document.getElementById("a9").innerHTML = "if( c ) {";
            document.getElementById("a10").innerHTML = 'fmt.Printf(" a is either greater than or equal to b\n" )';
            document.getElementById("a12").innerHTML = 'fmt.Printf(" a is lesser than b\n")';
            document.getElementById("detpic").style.display = "none";
            document.getElementById("lepic").style.display = "none";
            document.getElementById("gepic").style.display = "none";
            document.getElementById("ltetpic").style.display = "none";
            document.getElementById("gtetpic").style.display = "block";
            document.getElementById("netpic").style.display = "none";
          }
  
          if (option1 == 2) {
            document.getElementById("a15").innerHTML = "c=(a!=b)";
            document.getElementById("a9").innerHTML = "if( c ) {";
            document.getElementById("a10").innerHTML = 'fmt.Printf(" a and b are not equal\n" )';
            document.getElementById("a12").innerHTML = 'fmt.Printf(" a and b are equal\n")';
            document.getElementById("detpic").style.display = "none";
            document.getElementById("lepic").style.display = "none";
            document.getElementById("gepic").style.display = "none";
            document.getElementById("ltetpic").style.display = "none";
            document.getElementById("gtetpic").style.display = "none";
            document.getElementById("netpic").style.display = "block";
          }
        }
      }
      else {
        document.getElementById("op2").style.display = "block";
        document.getElementById("opr2").style.display = "block";
        document.getElementById("op1").style.display = "none";
        document.getElementById("opr1").style.display = "none";
        if(flag==0)
        {
          flag=1;
          return;
        }
        if (option2 == "")
          alert("Please Select The Logical Operator");
        else {
          document.getElementById("a10").style.display="none";
          document.getElementById("a11").style.display="none";
          document.getElementById("a12").style.display="none";
          document.getElementById("a13").style.display="none";
          document.getElementById("btn1").style.display = "inline-block";
          document.getElementById("btn4").style.display = "inline-block";
          document.getElementById("code").style.display = "block";
          document.getElementById("a4").innerHTML = "var a,b,c bool";
          
          document.getElementById("a9").innerHTML = 'fmt.Print("Output : ",c)';
          if(option2==1)
          {
            document.getElementById("a15").innerHTML = "c=(a&&b)";
            document.getElementById("and").style.display="block";
            document.getElementById("or").style.display="none";
            document.getElementById("not").style.display="none";
          }
          if(option2==2)
          {
            document.getElementById("a15").innerHTML = "c=(a||b)";
            document.getElementById("and").style.display="none";
            document.getElementById("or").style.display="block";
            document.getElementById("not").style.display="none";
          }
          if(option2==3)
          {
            document.getElementById("a15").innerHTML = "c=!(a&&b)";
            document.getElementById("and").style.display="none";
            document.getElementById("or").style.display="none";
            document.getElementById("not").style.display="block";
          }
        }
      }
    }
  }
  var i = 0;
  //onclick event for Start Button
  n.onclick = function abc() {
    aa = 0, bb = 0,cc=0;
    document.getElementById('tbl').style.display = "block";
    var c;
    var v = [1, 2, 3, 4, 5, 6, 7, 8,15, 9, 10, 11, 12, 13,14,16];
  
  
    if(option2==1)
    c=(fno.value)&&(lno.value);
    if(option2==2)
    c=(fno.value)||(lno.value);
    if(option2==3)
    c=!((fno.value=="true")&&(lno.value=="true"));
  
    if(option1==1)
    c=parseInt(fno.value)==parseInt(lno.value);
    if(option1==2)
    c=parseInt(fno.value)!=parseInt(lno.value);
    if(option1==3)
    c=parseInt(fno.value)>parseInt(lno.value);
    if(option1==4)
    c=parseInt(fno.value)<parseInt(lno.value);
    if(option1==5)
    c=parseInt(fno.value)>=parseInt(lno.value);
    if(option1==6)
    c=parseInt(fno.value)<=parseInt(lno.value);
  
  
    console.log("c"+c);
    if(i<17)
    {
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
      document.getElementById("fn1").style.display = "inline-block";
      document.getElementById("a4").style.color = "#018013";
  
      document.getElementById("a5").style.color = "#f50707";
      i++;
      console.log("aa" + aa);
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
        aa = 1;
      }
      else if ((isNaN(fno.value)&&(option==1))) {
        alert("Not A Number");
        aa = 1;
      }
      else if((fno.value!="true")&&(fno.value!="false")&&(option==2))
      {
        alert("Please Enter Boolean Value true or false");
        aa = 1;
      }
      else {
        fno.style.borderColor = "green";
        document.getElementById("b1").innerHTML = fno.value;
        document.getElementById("b1").style.backgroundColor = "red";
        aa = 2;
        i++;
      }
    }
    else if (v[i] == 7) {
      document.getElementById("ln1").style.display = "inline-block";
      document.getElementById("a6").style.color = "#018013";
      document.getElementById("a7").style.color = "#f50707";
  
      i++;
      console.log("bb" + bb);
    }
    else if (v[i] == 8) {
      document.getElementById("r2c1").style.display = "inline-block";
      document.getElementById("b1").style.backgroundColor = "blue";
      document.getElementById("a7").style.color = "#018013";
      document.getElementById("a8").style.color = "#f50707";
      
      if (lno.value == "") {
        lno.style.borderColor = "red";
        bb = 1;
      }
      else if ((isNaN(lno.value)&&(option==1))) {
        alert("Not A Number");
        bb = 1;
      }
      else if((lno.value!="true")&&(lno.value!="false")&&(option==2)){
        alert("Please Enter Boolean Value true or false");
        bb=1;
      }
      else {
        lno.style.borderColor = "green";
        document.getElementById("b2").innerHTML = lno.value;
        document.getElementById("b2").style.backgroundColor = "red";
        bb = 2;
        i++;
      }
    }
    else if(v[i]==15)
    {
      
      if(option2==1)
      document.getElementById("i6").style.display = "block";
      if(option2==2)
      document.getElementById("i7").style.display = "block";
      if(option2==3)
      document.getElementById("i8").style.display = "block";
      if(option1==1)
      document.getElementById("i9").style.display = "block";
      if(option1==2)
      document.getElementById("i10").style.display = "block";
      if(option1==3)
      document.getElementById("i11").style.display = "block";
      if(option1==4)
      document.getElementById("i12").style.display = "block";
      if(option1==5)
      document.getElementById("i13").style.display = "block";
      if(option1==6)
      document.getElementById("i14").style.display = "block";
  
      setTimeout(function () {
         if(option2==1)
      document.getElementById("i6").style.display = "none";
      if(option2==2)
      document.getElementById("i7").style.display = "none";
      if(option2==3)
      document.getElementById("i8").style.display = "none";
      if(option1==1)
      document.getElementById("i9").style.display = "none";
      if(option1==2)
      document.getElementById("i10").style.display = "none";
      if(option1==3)
      document.getElementById("i11").style.display = "none";
      if(option1==4)
      document.getElementById("i12").style.display = "none";
      if(option1==5)
      document.getElementById("i13").style.display = "none";
      if(option1==6)
      document.getElementById("i14").style.display = "none";
      }, 3000);
      document.getElementById("a8").style.color = "#018013";
      document.getElementById("a15").style.color = "#f50707";
        document.getElementById("b3").innerHTML = String(c);
        document.getElementById("b3").style.backgroundColor = "red";
        document.getElementById("b2").style.backgroundColor = "blue";
        i++;
    }
    else if (v[i] == 9) {
      document.getElementById("b3").style.backgroundColor = "blue";
      document.getElementById("a15").style.color = "#018013";
      document.getElementById("a9").style.color = "#f50707";
      if(option==2)
      {
        
      document.getElementById("r3c1").style.display = "inline-block";
      document.getElementById("r3c5").innerHTML=String(c);
        i+=4;
      }
      else
      {
        i++;
      }
    }
    else if (v[i] == 10) {
      document.getElementById("a9").style.color = "#018013";
      document.getElementById("a10").style.color = "#f50707";
      if(c)
      {
        cc=1;
        if(option==1)
        {
          document.getElementById("r3c1").style.display = "inline-block";
          if(option1==1)
          document.getElementById("r3c5").innerHTML = "a is equal to b";
          if(option1==2)
          document.getElementById("r3c5").innerHTML = "a is not equal to b";
          if(option1==3)
          document.getElementById("r3c5").innerHTML = "a is greater than b";
          if(option1==4)
          document.getElementById("r3c5").innerHTML = "a is less than b";
          if(option1==5)
          document.getElementById("r3c5").innerHTML = "a is greater than and equal to b";
          if(option1==6)
          document.getElementById("r3c5").innerHTML = "a is less than and equal to b";
        }
      }
      i++;
    }
    else if (v[i] == 12) {
      document.getElementById("a11").style.color = "#018013";
      document.getElementById("a12").style.color = "#f50707";
      if(!c)
      {
        if(option==1)
        {
          document.getElementById("r3c1").style.display = "inline-block";
          if(option1==1)
          document.getElementById("r3c5").innerHTML = "a is not equal to b";
          if(option1==2)
          document.getElementById("r3c5").innerHTML = "a is equal to b";
          if(option1==3)
          document.getElementById("r3c5").innerHTML = "a is not greater than b";
          if(option1==4)
          document.getElementById("r3c5").innerHTML = "a is not less than b";
          if(option1==5)
          document.getElementById("r3c5").innerHTML = "a is not greater than and equal to b";
          if(option1==6)
          document.getElementById("r3c5").innerHTML = "a is not less than and equal to b";
        }
      }
      i++;
    }
    else if (v[i] == 16) {
      alert('Program Completed');
      document.getElementById("a14").style.color = "#018013";
      document.getElementById("test").style.display = "inline-block";
      i++;
    }
    else {
      if((v[i]==13)&&(option==2))
      {
        document.getElementById("a9").style.color = "#018013";
        document.getElementById("a14").style.color = "#f50707";
      }
      else if((v[i]==14)&&(option==2))
      {
        document.getElementById("a14").style.color="#018013";
      }
      else{
        document.getElementById("a" + String(v[i-1])).style.color = "#018013";
      document.getElementById("a" + String(v[i])).style.color = "#f50707";
      }
      i++;
    }
    console.log("i(n)" + v[i]);
  }
  }
  
  //Prev Button
  
  p.onclick = function () {
    var v = [1, 2, 3, 4, 5, 6, 7, 8,15, 9, 10, 11, 12, 13,14,16];
    if (i > 0) {
      if (aa == 1) {
        document.getElementById("r1c1").style.display = "none";
  
        document.getElementById("a5").style.color = "#f50707";
  
        document.getElementById("a6").style.color = "black";
        aa = 0;
        return;
      }
      if (bb == 1) {
        document.getElementById("r2c1").style.display = "none";
  
        document.getElementById("a7").style.color = "#f50707";
  
        document.getElementById("a8").style.color = "black";
        bb = 0;
        return;
      }
      else
        i--;
      console.log("i(p)" + v[i]);
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
        document.getElementById("fn1").style.display = "none";
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
        document.getElementById("ln1").style.display = "none";
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
      else if(v[i]==15)
    {
      document.getElementById("a8").style.color = "#f50707";
      document.getElementById("a15").style.color = "black";
      document.getElementById("b3").style.backgroundColor = "blue";
    document.getElementById("b2").style.backgroundColor = "red";
    document.getElementById("b3").innerHTML = ""
    }
      else if (v[i] == 9) {
        document.getElementById("b2").style.backgroundColor = "red";
        document.getElementById("a15").style.color = "#f50707";
        document.getElementById("a9").style.color = "black";
        document.getElementById("b3").style.backgroundColor = "blue";
        if(option==2)
      {
        document.getElementById("r3c1").style.display = "none";
        document.getElementById("r3c5").innerHTML="";
      }
      }
      else if (v[i] == 10) {
        document.getElementById("r3c1").style.display="none";
        document.getElementById("b3").style.backgroundColor = "red";
        document.getElementById("a9").style.color = "#f50707";
        if(option==1)
        document.getElementById("a10").style.color = "black";
        else
        {
          document.getElementById("a14").style.color = "black";
        }
        if(cc)
        document.getElementById("r3c5").innerHTML="";
      }
      else if (v[i] == 12) {
        if(option==2)
        {
          i=i-3;
          document.getElementById("a9").style.color = "black";
          document.getElementById("a15").style.color = "#f50707";
          document.getElementById("r3c5").innerHTML="";
          document.getElementById("r3c1").style.display="none";
        }
        else{
          document.getElementById("a12").style.color = "black";
          document.getElementById("a11").style.color = "#f50707";
          if(!cc)
          {
            document.getElementById("r3c5").innerHTML="";
          }
        }
      }
      else if (v[i] == 16) {
        document.getElementById("test").style.display = "none";
        document.getElementById("container5").style.display = "none";
      }
      else {
        if((v[i]==13)&&(option==2))
        {
          document.getElementById("a9").style.color = "#f50707";
          document.getElementById("a14").style.color = "black";
        }
        else if((v[i]==13)&&(option==1))
        {
          document.getElementById("r3c1").style.display = "none";
          if(cc)
        document.getElementById("r3c5").innerHTML="";
        document.getElementById("a12").style.color = "#f50707";
        document.getElementById("a13").style.color = "black";
        }
        else if((v[i]==11)&&(option==1))
        {
          if(!cc)
        document.getElementById("r3c5").innerHTML="";
        document.getElementById("a10").style.color = "#f50707";
        document.getElementById("a11").style.color = "black";
        }
        else if((v[i]==14)&&(option==2))
        {
          document.getElementById("a14").style.color="black";
          document.getElementById("a9").style.color="#f50707";
        }
        else{
          document.getElementById("a" + String(v[i-1])).style.color = "#f50707";
        document.getElementById("a" + String(v[i])).style.color = "black";
        }
      }
    }
  }
  //onclick event for Reset Button
  r.onclick = function () {
    window.location.reload(true);
  }
  
  document.getElementById("op1").onchange = function () {
    document.getElementById("code").style.display="none";
    document.getElementById("detpic").style.display = "none";
    document.getElementById("netpic").style.display = "none";
    document.getElementById("gepic").style.display = "none";
    document.getElementById("lepic").style.display = "none";
    document.getElementById('gtetpic').style.display = "none";
    document.getElementById("ltetpic").style.display = "none";
    
    document.getElementById("and").style.display = "none";
    document.getElementById("or").style.display = "none";
    document.getElementById("not").style.display = "none";
    for (var k = 1; k <= 8; k++)
    document.getElementById("a" + k).style.color = "black";
  document.getElementById("a9").innerHTML = "";
  document.getElementById("a10").innerHTML = "";
  document.getElementById("a12").innerHTML = "";
  document.getElementById("a11").style.color = "none";
  document.getElementById("a9").style.color = "black";
  document.getElementById("a10").style.color = "black";
  document.getElementById("a12").style.color = "black";
  document.getElementById("a11").style.color = "black";
  document.getElementById("a13").style.color = "black";
  document.getElementById("a14").style.color = "black";
  document.getElementById("a15").style.color = "black";
  document.getElementById("r4c1").style.display = "none";
  document.getElementById("r4c8").style.display = "none";
  document.getElementById("r4c3").style.display = "none";
  document.getElementById("r4c9").style.display = "none";
  document.getElementById("r4c5").style.display = "none";
  document.getElementById("r4c10").style.display = "none";
  document.getElementById("r4c7").style.display = "none";
  document.getElementById("r1c1").style.display = "none";
  document.getElementById("r2c1").style.display = "none";
  document.getElementById("r3c1").style.display = "none";
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
  }


  document.getElementById("op2").onchange = function () {
    document.getElementById("code").style.display="none";
    document.getElementById("detpic").style.display = "none";
    document.getElementById("netpic").style.display = "none";
    document.getElementById("gepic").style.display = "none";
    document.getElementById("lepic").style.display = "none";
    document.getElementById('gtetpic').style.display = "none";
    document.getElementById("ltetpic").style.display = "none";
    document.getElementById("and").style.display = "none";
    document.getElementById("or").style.display = "none";
    document.getElementById("not").style.display = "none";
    for (var k = 1; k <= 8; k++)
    document.getElementById("a" + k).style.color = "black";
    document.getElementById("a9").innerHTML = "";
    document.getElementById("a10").innerHTML = "";
    document.getElementById("a12").innerHTML = "";
    document.getElementById("a9").style.color = "black";
    document.getElementById("a10").style.color = "black";
    document.getElementById("a12").style.color = "black";
    document.getElementById("a11").style.color = "black";
    document.getElementById("a13").style.color = "black";
    document.getElementById("a14").style.color = "black";
    document.getElementById("a15").style.color = "black";
  document.getElementById("r4c1").style.display = "none";
  document.getElementById("r4c8").style.display = "none";
  document.getElementById("r4c3").style.display = "none";
  document.getElementById("r4c9").style.display = "none";
  document.getElementById("r4c5").style.display = "none";
  document.getElementById("r4c10").style.display = "none";
  document.getElementById("r4c7").style.display = "none";
  document.getElementById("r1c1").style.display = "none";
  document.getElementById("r2c1").style.display = "none";
  document.getElementById("r3c1").style.display = "none";
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
  }


  document.getElementById("opr").onchange = function () {
    flag=0;
    if(option==2)
    {
      document.getElementById("a10").style.display="block";
      document.getElementById("a12").style.display="block";
      document.getElementById("a11").style.display="block";
      document.getElementById("a13").style.display="block";
        }
    document.getElementById("op1").selectedIndex = "0";
    document.getElementById("op2").selectedIndex = "0";
    document.getElementById("code").style.display="none";
    document.getElementById("detpic").style.display = "none";
    document.getElementById("netpic").style.display = "none";
    document.getElementById("gepic").style.display = "none";
    document.getElementById("lepic").style.display = "none";
    document.getElementById('gtetpic').style.display = "none";
    document.getElementById("ltetpic").style.display = "none";
    document.getElementById("and").style.display = "none";
    document.getElementById("or").style.display = "none";
    document.getElementById("not").style.display = "none";
    document.getElementById("code").style.display="none";
    for (var k = 1; k <= 8; k++)
      document.getElementById("a" + k).style.color = "black";
      document.getElementById("a9").innerHTML = "";
      document.getElementById("a10").innerHTML = "";
      document.getElementById("a12").innerHTML = "";
      document.getElementById("a9").style.color = "black";
      document.getElementById("a10").style.color = "black";
      document.getElementById("a12").style.color = "black";
      
      document.getElementById("a11").style.color = "black";
      document.getElementById("a13").style.color = "black";
      document.getElementById("a14").style.color = "black";
      document.getElementById("a15").style.color = "black";
    document.getElementById("r4c1").style.display = "none";
    document.getElementById("r4c8").style.display = "none";
    document.getElementById("r4c3").style.display = "none";
    document.getElementById("r4c9").style.display = "none";
    document.getElementById("r4c5").style.display = "none";
    document.getElementById("r4c10").style.display = "none";
    document.getElementById("r4c7").style.display = "none";
    document.getElementById("r1c1").style.display = "none";
    document.getElementById("r2c1").style.display = "none";
    document.getElementById("r3c1").style.display = "none";
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
    document.getElementById("op1").style.display="none";
    document.getElementById("op2").style.display="none";
    document.getElementById("opr1").style.display="none";
    document.getElementById("opr2").style.display="none";
    ra1 = Math.floor(Math.random() * (1000 - 100)) + 100;
    ra2 = Math.floor(Math.random() * (1000 - 100)) + 100;
    ra3 = Math.floor(Math.random() * (1000 - 100)) + 100;
    i = 0;
    document.getElementById('tbl').style.display = "none";
  }
  console.log();