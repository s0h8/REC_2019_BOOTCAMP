function hasClass(ele,cls) {
    return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }
  
  function addClass(ele,cls) {
    if (!hasClass(ele,cls)) ele.className += " "+cls;
  }
  
  function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      ele.className=ele.className.replace(reg,' ');
    }
  }
//Editor

document.getElementById("test").onclick = function () {
    document.getElementById("container5").style.display = "block";
    document.getElementById("sim2").style.display = "none";
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
    var a = document.getElementById("a1111");
    var b = document.getElementById("a22");
    if (a.value == 'n%2==0') {
      total += 1;
      document.getElementById("sh1").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh1").innerHTML = 'Correct Answer : n%2==0';
      document.getElementById("a1111").disabled = true;
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
    if (a.value != 'n%2==0') {
      total1 += 1;
      document.getElementById("sh1").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh1").innerHTML = 'Correct Answer : n%2==0';
      document.getElementById("a1111").disabled = true;
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
    var b = document.getElementById("b22");
    if (a.value == 'a>b') {
      total += 1;
  
      document.getElementById("sh3").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh3").innerHTML = 'Correct Answer : a>b';
      document.getElementById("b11").disabled = true;
      document.getElementById("sh3").style.borderColor = "green";
    }
  
    if (a.value != 'a>b') {
      total1 += 1;
      document.getElementById("sh3").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh3").innerHTML = 'Correct Answer : a>b';
      document.getElementById("b11").disabled = true;
      document.getElementById("sh3").style.borderColor = "red";
    }
    if (b.value == 'a>c') {
        total += 1;
    
        document.getElementById("sh4").style.color = "green";
        b.style.borderColor = "green";
        document.getElementById("sh4").innerHTML = 'Correct Answer : a>c';
        document.getElementById("b22").disabled = true;
        document.getElementById("sh4").style.borderColor = "green";
      }
    
      if (b.value != 'a>c') {
        total1 += 1;
        document.getElementById("sh4").style.color = "green";
        b.style.borderColor = "red";
        document.getElementById("sh4").innerHTML = 'Correct Answer : a>c';
        document.getElementById("b22").disabled = true;
        document.getElementById("sh4").style.borderColor = "red";
      }
  }
  function checkans3() {
    var a = document.getElementById("c11");
    if (a.value == 'a>20') {
      total += 1;
      a.style.borderColor = "green";
      document.getElementById("sh5").style.color = "green";
      document.getElementById("sh5").innerHTML = 'Correct Answer : a>20';
      document.getElementById("c11").disabled = true;
      document.getElementById("sh5").style.borderColor = "green";
    }
  
    if (a.value != 'a>20') {
      total1 += 1;
      document.getElementById("sh5").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh5").innerHTML = 'Correct Answer : a>20';
      document.getElementById("c11").disabled = true;
      document.getElementById("sh5").style.borderColor = "red";
    }
  }
  function checkans4() {
    var a = document.getElementById("d11");
    var b = document.getElementById("d22");
    if (a.value == 'day') {
      total += 1;
      document.getElementById("sh6").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh6").innerHTML = 'Correct Answer : day';
      document.getElementById("d11").disabled = true;
      document.getElementById("sh6").style.borderColor = "green";
    }
    if (a.value != 'day') {
      total1 += 1;
      document.getElementById("sh6").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh6").innerHTML = 'Correct Answer : day';
      document.getElementById("d11").disabled = true;
      document.getElementById("sh6").style.borderColor = "red";
    }
    if (b.value == 'default') {
      total += 1;
      document.getElementById("sh7").style.color = "green";
      b.style.borderColor = "green";
      document.getElementById("sh7").innerHTML = 'Correct Answer : default';
      document.getElementById("d22").disabled = true;
      document.getElementById("sh7").style.borderColor = "green";
    }
    if (b.value != 'default') {
      total1 += 1;
      document.getElementById("sh7").style.color = "green";
      b.style.borderColor = "red";
      document.getElementById("sh7").innerHTML = 'Correct Answer : default';
      document.getElementById("d22").disabled = true;
      document.getElementById("sh7").style.borderColor = "red";
    }
  }
  function checkans5() {
    var a = document.getElementById("e11");
    var b = document.getElementById("e22");
    var c = document.getElementById("e33");
    if (a.value == 'a==5') {
      total += 1;
      document.getElementById("sh8").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh8").innerHTML = 'Correct Answer : a==5';
      document.getElementById("e11").disabled = true;
      document.getElementById("sh8").style.borderColor = "green";
    }
    if (a.value != 'a==5') {
      total1 += 1;
      document.getElementById("sh8").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh8").innerHTML = 'Correct Answer : a==5';
      document.getElementById("e11").disabled = true;
      document.getElementById("sh8").style.borderColor = "red";
    }
    if (b.value == 'a>5') {
        total += 1;
        document.getElementById("sh9").style.color = "green";
        b.style.borderColor = "green";
        document.getElementById("sh9").innerHTML = 'Correct Answer : a>5';
        document.getElementById("e22").disabled = true;
        document.getElementById("sh9").style.borderColor = "green";
      }
      if (b.value != 'a>5') {
        total1 += 1;
        document.getElementById("sh9").style.color = "green";
        b.style.borderColor = "red";
        document.getElementById("sh9").innerHTML = 'Correct Answer : a>5';
        document.getElementById("e22").disabled = true;
        document.getElementById("sh9").style.borderColor = "red";
      }
      if (c.value == 'else') {
        total += 1;
        document.getElementById("sh10").style.color = "green";
        c.style.borderColor = "green";
        document.getElementById("sh10").innerHTML = 'Correct Answer : else';
        document.getElementById("e33").disabled = true;
        document.getElementById("sh10").style.borderColor = "green";
      }
      if (c.value != 'else') {
        total1 += 1;
        document.getElementById("sh10").style.color = "green";
        c.style.borderColor = "red";
        document.getElementById("sh10").innerHTML = 'Correct Answer : else';
        document.getElementById("e33").disabled = true;
        document.getElementById("sh10").style.borderColor = "red";
      }
  
  }
  function checkans6() {
    var a = document.getElementById("f11");
    if (a.value == 'a==b') {
      total += 1;
      document.getElementById("sh11").style.color = "green";
      a.style.borderColor = "green";
      document.getElementById("sh11").innerHTML = 'Correct Answer : a==b';
      document.getElementById("f11").disabled = true;
      document.getElementById("sh11").style.borderColor = "green";
    }
    if (a.value != 'a==b') {
      total1 += 1;
      document.getElementById("sh11").style.color = "green";
      a.style.borderColor = "red";
      document.getElementById("sh11").innerHTML = 'Correct Answer : a==b';
      document.getElementById("f11").disabled = true;
      document.getElementById("sh11").style.borderColor = "red";
    }
  
  }
  function checkans8() {
    var store = ["package main", 'import("fmt")', "func main(){", "var a,b int=5,4","if(a>b)", 'fmt.Print("a is greater than b")',"else", 'fmt.Print("a is not greater than b")}'];
    for (var j = 0; j < 8; j++) {
      console.log("cb" + (j + 1));
      console.log(document.getElementById("cb" + (j + 1)).value)
      if ((document.getElementById("cb" + (j + 1))).checked == true) {
        if (document.getElementById("cb" + (j + 1)).value == "e") {
          total++;
          document.getElementById("sh" + "" + (j+12)).innerHTML = "Correct Answer : " + store[j];
          document.getElementById("sh" + "" + (j+12)).style.color = "green";
          document.getElementById("cb" + "" + (j + 1)).disabled = true;
        }
        else {
          document.getElementById("sh" + "" + (j+12)).innerHTML = "Correct Answer : " + store[j];
          document.getElementById("sh" + "" + (j+12)).style.color = "green";
          document.getElementById("cb" + "" + (j + 1)).disabled = true;
          total1++;
        }
      }
      else {
        if (document.getElementById("cb" + (j + 1)).value == "e") {
          total1++;
        }
        document.getElementById("sh" + "" + (j+12)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j+12)).style.color = "green";
        document.getElementById("cb" + "" + (j + 1)).disabled = true;
      }
      console.log(total, total1);
    }
  
  }
  function checkans9() {
    var store = ["package main", 'import("fmt")', "func main(){", "var n int", "if(n%2==0)", 'fmt.Print("n is even")', "else", 'fmt.Print("n is odd")',"}"];
    for (var j = 0; j < 9; j++) {
      if ((document.getElementById("cb" + (j + 10))).checked == true) {
        if (document.getElementById("cb" + (j + 10)).value == "e") {
          total++;
          document.getElementById("sh" + "" + (j+20)).innerHTML = "Correct Answer : " + store[j];
          document.getElementById("sh" + "" + (j+20)).style.color = "green";
          document.getElementById("cb" + "" + (j + 10)).disabled = true;
        }
        else {
          document.getElementById("sh" + "" + (j+20)).innerHTML = "Correct Answer : " + store[j];
          document.getElementById("sh" + "" + (j+20)).style.color = "green";
          document.getElementById("cb" + "" + (j + 10)).disabled = true;
          total1++;
        }
      }
      else {
        if (document.getElementById("cb" + (j + 10)).value == "e") {
          total1++;
        }
        document.getElementById("sh" + "" + (j+20)).innerHTML = "Correct Answer : " + store[j];
        document.getElementById("sh" + "" + (j+20)).style.color = "green";
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
var option;
//Retrieving the Button Elements by Id
n = document.getElementById("btn1");
r = document.getElementById("btn2");
e = document.getElementById("btn3");
p = document.getElementById("btn4");
ra1 = Math.floor(Math.random() * (1000 - 100)) + 100;
ra2 = Math.floor(Math.random() * (1000 - 100)) + 100;
r.onclick=function(){
    window.location.reload(true);
  }
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

function datainput()
{
    e.disabled="true";
    addClass(e,"out");
    document.getElementById("demo").innerHTML = "";
    var iftag = [];
    option = document.getElementById("operation").value;
    if(option == ""){
        alert("Please Select the Correct Statement");
    }
    else{
    if(option == "0"){
        document.getElementById("pic1").style.display="block";
        iftag = ['package main','import "fmt"','func main(){','    var a int','    fmt.Print("Enter The Number a : ")','    fmt.Scan(&a)','     if(a < 20){','           a = a * 2','   }','    fmt.Print("The output is %d",a)','}'];
    }
    if(option == "1"){
        document.getElementById("pic2").style.display="block";
        iftag = ['package main','import "fmt"','func main() {','    var a int','    fmt.Print("Enter The Number a : ")','    fmt.Scan(&a)','    if( a < 20 ) {','        fmt.Printf("a is less than 20");' ,'    } else {' ,'        fmt.Printf("a is not less than 20" );', '   }','}'];
    }
    if(option == "2"){
        document.getElementById("pic3").style.display="block";
        iftag = ['package main','import "fmt"','func main() {','    var a int','    fmt.Print("Enter The Number a : ");','    fmt.Scan(&a);','    if( a == 10 ) {','           fmt.Printf("Value of a is 10" );','    } else if( a==20 ) {','           fmt.Printf("Value of a is 20" );','    } else if( a == 30) {','           fmt.Printf("Value of a is 30" );','    } else {','           fmt.Printf("Value of a is other than 10,20 and 30" );','  }','}']
    }
    if(option == "3"){
        document.getElementById("pic4").style.display="block";
        iftag = ['package main','import "fmt"','func main() {','    var a,b int','    fmt.Print("Enter The Number a : ");','    fmt.Scan(&a);','    fmt.Print("Enter The Number b : ");','    fmt.Scan(&b);','    if( a <= 100 ) {','       if( b >= 200 )  {','          fmt.Printf("Value of a is less than or equal to 100 and value of b is greater than or equal to 200" );','       }','    else {','            fmt.Print("Value of a is less than or equal to 100 and value of b is less than 200");','         }','    }','}']
    }
    if(option == "4"){
        document.getElementById("pic5").style.display="block";
        iftag = ['package main','import "fmt"','func main() {','   var choice int','   fmt.Print("Enter The Choice : ")','   fmt.Scan(&choice)','   switch choice {','      case 1:' ,'            fmt.Print("Choice is 1")','            break;','      case 2:','            fmt.Print("Choice is 2")','            break;','      case 3:' ,'            fmt.Print("Choice is 3")','            break;','      default:','            fmt.Print("Choice other than 1,2 and 3")','    }','}']
    }
    var iflen = iftag.length;
    var pretag= "";
    for(var i = 0;i<iflen;i++)
    {
        pretag = document.createElement("pre");
        pretag.id = "a1"+i;
        var pretext = document.createTextNode(iftag[i]);
        pretag.append(pretext);
        document.getElementById("demo").appendChild(pretag);
    }
    n.style.display="inline-block";
    /*p.style.display="inline-block";*/
}
}
var i=0;
var aa=0,bb=0;
/*
p.onclick=function(){
  if (aa == 1) {
    document.getElementById("r1c1").style.display = "none";

    document.getElementById("a14").style.color = "#f50707";

    document.getElementById("a15").style.color = "black";
    aa = 0;
    return;
  }
  else if (bb == 1) {
    document.getElementById("r2c1").style.display = "none";

    document.getElementById("a16").style.color = "#f50707";

    document.getElementById("a17").style.color = "black";
    bb = 0;
    return;
  }
  else
  {
    if(i>0)
    {
      if((option==1)&&(parseInt(fno.value)>=20)&&(i==8))
      i-=2;
      else if((option==1)&&(parseInt(fno.value)<20)&&(i==10))
      i-=3;
      else if((option==0)&&(parseInt(fno.value)>=20)&&(i==8))
      i-=2;
      else if((option==2)&&(parseInt(fno.value)!=10)&&(i==8))
      i-=2;
      else if((option==2)&&(parseInt(fno.value)!=20)&&(i==10))
      i-=2;
      else if((option==2)&&(parseInt(fno.value)!=30)&&(i==12))
      i-=2;
      else if((option==2)&&(parseInt(fno.value)!=30)&&(parseInt(fno.value)!=20)&&(parseInt(fno.value)!=10)&&(i==14))
      i-=2;
      else if((option==2)&&(parseInt(fno.value)==10)&&(i==15))
      i-=7;
      else if((option==2)&&(parseInt(fno.value)==20)&&(i==15))
      i-=5;
      else if((option==2)&&(parseInt(fno.value)==30)&&(i==15))
      i-=3;
      else if((option==4)&&(parseInt(fno.value)==1)&&(i==7))
      i-=1;
      else if((option==4)&&(parseInt(fno.value)==2)&&(i==11))
      i-=4;
      else if((option==3)&&(parseInt(fno.value)==3)&&(i==14))
      i-=7;
      else if((option==4)&&(parseInt(fno.value)!=1)&&(parseInt(fno.value)!=2)&&(parseInt(fno.value)!=3)&&(i==17))
      i-=10;
      else
      i--;
      console.log("New",v[i],i);
    }
    else
    return;
  }
  if(option==0)
  {
    v=[1,2,3,4,5,6,7,8,9,10,11,12];
    if(v[i]==1)
        {
            document.getElementById("a10").style.color="black";
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="none";
            document.getElementById("r4c1").style.display="none";
            document.getElementById("r4c8").style.display="none";
            document.getElementById("m1").innerHTML="";
            document.getElementById("a12").style.color="#f50707";
            document.getElementById("a13").style.color="black";
            document.getElementById("b1").classList.remove("fullSizeBox");
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="none";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("a14").style.color="black";
        }
        else if(v[i]==6)
        {
            fno.value="";
            fno.style.borderColor="red";
            document.getElementById("r1c1").style.display="none";
            document.getElementById("a14").style.color="#f50707";
            document.getElementById("a15").style.color="black";
            document.getElementById("b1").innerHTML = "";
            document.getElementById("b1").style.backgroundColor = "blue";
        }
        else if(v[i]==8)
        {
            document.getElementById("b1").innerHTML = String(parseInt(fno.value));
            document.getElementById("b1").style.backgroundColor = "blue";
            document.getElementById("a16").style.color="#f50707";
            document.getElementById("a17").style.color="black";
        }
        else if(v[i]==9)
        {
          if(parseInt(fno.value)>=20)
          {
            document.getElementById("a16").style.color="#f50707";
          }
          else
            document.getElementById("a17").style.color="#f50707";
            document.getElementById("a18").style.color="black";
        }
        else if(v[i]==10)
        {
            document.getElementById("r3c1").style.display="none";
            document.getElementById("r3c5").innerHTML="";
            document.getElementById("a18").style.color="#f50707";
            document.getElementById("a19").style.color="black";
        }
        else if(v[i]==12)
        {
            document.getElementById("a110").style.color="#f50707";
            document.getElementById("test").style.display="none";
        }
        else{
            if(v[i]==7)
            {
              if(parseInt(fno.value)>=20)
            {
              document.getElementById("a16").style.color="#f50707";
            }
              document.getElementById("b1").style.backgroundColor="red";
            }
            document.getElementById("a1"+i).style.color="black";
            document.getElementById("a1"+(i-1)).style.color="#f50707";
        }
        
  }
  else if(option==1)
    {
        v=[1,2,3,4,5,6,7,8,9,10,11,12,13];
        if(v[i]==1)
        {
            document.getElementById("a10").style.color="black";
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="none";
            document.getElementById("r4c1").style.display="none";
            document.getElementById("r4c8").style.display="none";
            document.getElementById("m1").innerHTML="";
            document.getElementById("a12").style.color="#f50707";
            document.getElementById("a13").style.color="black";
            document.getElementById("b1").classList.remove("fullSizeBox");
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="none";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("a14").style.color="black";
        }
        else if(v[i]==6)
        {
            fno.value="";
            fno.style.borderColor="red";
            document.getElementById("r1c1").style.display="none";
            document.getElementById("a14").style.color="#f50707";
            document.getElementById("a15").style.color="black";
            document.getElementById("b1").innerHTML = "";
            document.getElementById("b1").style.backgroundColor = "blue";
        }
        else if(v[i]==8)
        {
            document.getElementById("a16").style.color="#f50707";
            document.getElementById("a17").style.color="black";
            if(parseInt(fno.value)<20)
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==9)
        {
            document.getElementById("a18").style.color="black";
            if(parseInt(fno.value)>=20)
            {
                document.getElementById("a16").style.color="#f50707";
            }
            else{
              document.getElementById("a17").style.color="#f50707";
            }
        }
        else if(v[i]==10)
        {
            document.getElementById("a18").style.color="#f50707";
            document.getElementById("a19").style.color="black";
            if(parseInt(fno.value)>=20)
            {
              document.getElementById("a17").style.color="black";
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
               
            }
            else{
              document.getElementById("a17").style.color="black";
            }
        }
        else if(v[i]==11)
        {
            document.getElementById("a110").style.color="black";
            if(parseInt(fno.value)<20)
            {
                document.getElementById("a17").style.color="#f50707";
            }
            else
            document.getElementById("a19").style.color="#f50707";
        }
        else if(v[i]==13)
        {
            document.getElementById("a111").style.color="#f50707";
            document.getElementById("test").style.display="none";
            return;
        }
        else{
          document.getElementById("a1"+i).style.color="black";
          document.getElementById("a1"+(i-1)).style.color="#f50707";
        }
    }
    else if(option==2)
    {
      v=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
      if(v[i]==1)
        {
            document.getElementById("a10").style.color="black";
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="none";
            document.getElementById("r4c1").style.display="none";
            document.getElementById("r4c8").style.display="none";
            document.getElementById("m1").innerHTML="";
            document.getElementById("a12").style.color="#f50707";
            document.getElementById("a13").style.color="black";
            document.getElementById("b1").classList.remove("fullSizeBox");
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="none";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("a14").style.color="black";
        }
        else if(v[i]==6)
        {
            fno.value="";
            fno.style.borderColor="red";
            document.getElementById("r1c1").style.display="none";
            document.getElementById("a14").style.color="#f50707";
            document.getElementById("a15").style.color="black";
            document.getElementById("b1").innerHTML = "";
            document.getElementById("b1").style.backgroundColor = "blue";
        }
        else if(v[i]==8)
        {
            document.getElementById("a16").style.color="#f50707";
            document.getElementById("a17").style.color="black";
            if(parseInt(fno.value)==10)
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==10)
        {
            document.getElementById("a18").style.color="#f50707";
            document.getElementById("a19").style.color="black";
            if(parseInt(fno.value)==20)
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==12)
        {
            document.getElementById("a110").style.color="#f50707";
            document.getElementById("a111").style.color="black";
            if(parseInt(fno.value)==30)
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==14)
        {
            document.getElementById("a112").style.color="#f50707";
            document.getElementById("a113").style.color="black";
            if((parseInt(fno.value)!=10)&&(parseInt(fno.value)!=20)&&(parseInt(fno.value)!=30))
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==17)
        {
            document.getElementById("a115").style.color="#f50707";
            document.getElementById("test").style.display="none";
            return;
        }
        else if(v[i]==13)
        {
            document.getElementById("a111").style.color="#f50707";
            document.getElementById("a114").style.color="black";
        }
        else if(v[i]==11)
        {
            document.getElementById("a19").style.color="#f50707";
            document.getElementById("a114").style.color="black";
        }
        else if(v[i]==9)
        {
            document.getElementById("a17").style.color="#f50707";
            document.getElementById("a114").style.color="black";
        }
        else{
          if(v[i]==7)
          {
            document.getElementById("b1").style.backgroundColor="red";
          }
          document.getElementById("a1"+i).style.color="black";
          document.getElementById("a1"+(i-1)).style.color="#f50707";
        }
    }
    else if(option==3)
    {
      v=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
      if(v[i]==1)
        {
            document.getElementById("a10").style.color="black";
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="none";
            document.getElementById("r4c1").style.display="none";
            document.getElementById("r4c8").style.display="none";
            document.getElementById("m1").innerHTML="";
            document.getElementById("a12").style.color="#f50707";
            document.getElementById("a13").style.color="black";
            document.getElementById("b1").classList.remove("fullSizeBox");
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="none";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("a14").style.color="black";
        }
        else if(v[i]==6)
        {
            fno.value="";
            fno.style.borderColor="red";
            document.getElementById("r1c1").style.display="none";
            document.getElementById("a14").style.color="#f50707";
            document.getElementById("a15").style.color="black";
            document.getElementById("b1").innerHTML = "";
            document.getElementById("b1").style.backgroundColor = "blue";
        }
        else if(v[i]==8)
        {
            lno.value="";
            lno.style.borderColor="red";
            document.getElementById("r2c1").style.display="none";
            document.getElementById("a16").style.color="#f50707";
            document.getElementById("a17").style.color="black";
            document.getElementById("b2").innerHTML = "";
            document.getElementById("b2").style.backgroundColor = "blue";
        }
        else if(v[i]==11)
        {
            document.getElementById("a19").style.color="#f50707";
            document.getElementById("a110").style.color="black";
            if((parseInt(fno.value)<=100)&&(parseInt(lno.value)>=200))
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==14)
        {
            document.getElementById("a112").style.color="#f50707";
            document.getElementById("a113").style.color="black";
            if((parseInt(fno.value)<=100)&&(parseInt(lno.value)<200))
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==18)
        {
            document.getElementById("a116").style.color="#f50707";
            document.getElementById("test").style.display="none";
            return;
        }
        else{
          if(v[i]==7)
          {
            document.getElementById("ln1").style.display="none";
            document.getElementById("b1").style.backgroundColor="red";
          }
          if(v[i]==9)
          {
            document.getElementById("b2").style.backgroundColor="red";
          }
          document.getElementById("a1"+i).style.color="black";
          document.getElementById("a1"+(i-1)).style.color="#f50707";
        }
    }
    else{
      v=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
      if(v[i]==1)
        {
            document.getElementById("a10").style.color="black";
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="none";
            document.getElementById("r4c1").style.display="none";
            document.getElementById("r4c8").style.display="none";
            document.getElementById("m1").innerHTML="";
            document.getElementById("a12").style.color="#f50707";
            document.getElementById("a13").style.color="black";
            document.getElementById("b1").classList.remove("fullSizeBox");
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="none";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("a14").style.color="black";
        }
        else if(v[i]==6)
        {
            fno.value="";
            fno.style.borderColor="red";
            document.getElementById("r1c1").style.display="none";
            document.getElementById("a14").style.color="#f50707";
            document.getElementById("a15").style.color="black";
            document.getElementById("b1").innerHTML = "";
            document.getElementById("b1").style.backgroundColor = "blue";
        }
        else if(v[i]==9)
        {
            document.getElementById("a17").style.color="#f50707";
            document.getElementById("a18").style.color="black";
            if(parseInt(fno.value)==1)
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==8)
        {
          document.getElementById("a16").style.color="#f50707";
          if(parseInt(fno.value)==1)
            {
              document.getElementById("a17").style.color="black";
            }
            else if(parseInt(fno.value)==2)
            {
              document.getElementById("a110").style.color="black";
            }
            else if(parseInt(fno.value)==3)
            {
              document.getElementById("a113").style.color="black";
            }
            else
            document.getElementById("a116").style.color="black";
        }
        else if(v[i]==12)
        {
            document.getElementById("a110").style.color="#f50707";
            document.getElementById("a111").style.color="black";
            if(parseInt(fno.value)==2)
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==15)
        {
            document.getElementById("a113").style.color="#f50707";
            document.getElementById("a114").style.color="black";
            if(parseInt(fno.value)==3)
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==18)
        {
            document.getElementById("a116").style.color="#f50707";
            document.getElementById("a117").style.color="black";
            if((parseInt(fno.value)!=1)&&(parseInt(fno.value)!=2)&&(parseInt(fno.value)!=3))
            {
                document.getElementById("r3c1").style.display="none";
                document.getElementById("r3c5").innerHTML="";
            }
        }
        else if(v[i]==21)
        {
            document.getElementById("a119").style.color="#f50707";
            document.getElementById("test").style.display="none";
            return;
        }
        else{
          if(v[i]==7)
          {
            document.getElementById("b1").style.backgroundColor="red";
          }
          document.getElementById("a1"+i).style.color="black";
          document.getElementById("a1"+(i-1)).style.color="#f50707";
        }
    }
}*/
n.onclick=function abc(){
    if(option==0)
    {
        v=[1,2,3,4,5,6,7,8,9,10,11,12];
        if(v[i]==1)
        {
            document.getElementById("a10").style.color="#f50707";
            i++;
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="block";
            document.getElementById("r4c1").style.display="inline-block";
            document.getElementById("r4c8").style.display="inline-block";
            document.getElementById("m1").innerHTML=String(ra1);
            document.getElementById("a12").style.color="#018013";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("b1").classList.add("fullSizebox");
            i++;
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="inline-block";
            document.getElementById("a13").style.color="#018013";
            document.getElementById("a14").style.color="#f50707";
            i++;
        }
        else if(v[i]==6)
        {
            document.getElementById("r1c1").style.display="inline-block";
            document.getElementById("a14").style.color="#018013";
            document.getElementById("a15").style.color="#f50707";
            if (fno.value == "") {
                fno.style.borderColor = "red";
                aa=1;
              }
              else if (isNaN(fno.value)) {
                alert("Not A Number");
                aa=1;
              }
              else {
                fno.style.borderColor = "green";
                document.getElementById("b1").innerHTML = fno.value;
                document.getElementById("b1").style.backgroundColor = "red";
                i++;
                aa=2;
              }
        }
        else if(v[i]==7)
        {
          document.getElementById("b1").style.backgroundColor="blue";
          if(parseInt(fno.value)>=20)
          {
              i+=2;
          }
          else{
            i++;
          }
          document.getElementById("a15").style.color="#018013";
          document.getElementById("a16").style.color="#f50707";
        }
        else if(v[i]==8)
        {
            if(parseInt(fno.value)<20)
            {
                document.getElementById("b1").innerHTML = String(parseInt(fno.value)*2);
                document.getElementById("b1").style.backgroundColor = "red";
            }
            document.getElementById("a16").style.color="#018013";
            document.getElementById("a17").style.color="#f50707";
            i++;
        }
        else if(v[i]==10)
        {
            document.getElementById("r3c1").style.display="inline-block";
            if(parseInt(fno.value)<20)
            {
                document.getElementById("r3c5").innerHTML=String(parseInt(fno.value)*2);
            }
            else{
                document.getElementById("r3c5").innerHTML=String(parseInt(fno.value));
            }
            document.getElementById("a18").style.color="#018013";
            document.getElementById("a19").style.color="#f50707";
            i++;
        }
        else if(v[i]==12)
        {
            document.getElementById("a110").style.color="#018013";
            alert("Program Completed");
            document.getElementById("test").style.display="block";
            if(i==11)
            i++;
            else
            return;
        }
        else{
            document.getElementById("a1"+(i-1)).style.color="#018013";
            document.getElementById("a1"+i).style.color="#f50707";
            if(v[i]==9)
            {
              if(parseInt(fno.value)>=20)
            {
              document.getElementById("a16").style.color="#018013";
              document.getElementById("a17").style.color="black";
            }
              document.getElementById("b1").style.backgroundColor="blue";
            }
            i++;
        }
        console.log("v[i]",v[i]);
    }
    else if(option==1)
    {
        v=[1,2,3,4,5,6,7,8,9,10,11,12,13];
        if(v[i]==1)
        {
            document.getElementById("a10").style.color="#f50707";
            i++;
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="block";
            document.getElementById("r4c1").style.display="inline-block";
            document.getElementById("r4c8").style.display="inline-block";
            document.getElementById("m1").innerHTML=String(ra1);
            document.getElementById("a12").style.color="#018013";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("b1").classList.add("fullSizebox");
            i++;
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="inline-block";
            document.getElementById("a13").style.color="#018013";
            document.getElementById("a14").style.color="#f50707";
            i++;
        }
        else if(v[i]==6)
        {
            document.getElementById("r1c1").style.display="inline-block";
            document.getElementById("a14").style.color="#018013";
            document.getElementById("a15").style.color="#f50707";
            if (fno.value == "") {
                fno.style.borderColor = "red";
                aa=1;
              }
              else if (isNaN(fno.value)) {
                alert("Not A Number");
                aa=1;
              }
              else {
                fno.style.borderColor = "green";
                document.getElementById("b1").innerHTML = fno.value;
                document.getElementById("b1").style.backgroundColor = "red";
                aa=2;
                i++;
              }
        }
        else if(v[i]==7)
        {
          if(parseInt(fno.value)>=20)
          {
            i+=2;
          }
          else{
            i++;
          }
          document.getElementById("a15").style.color="#018013";
          document.getElementById("a16").style.color="#f50707";
        }
        else if(v[i]==8)
        {
            document.getElementById("a16").style.color="#018013";
            document.getElementById("a17").style.color="#f50707";
            if(parseInt(fno.value)<20)
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="a is less than 20";
                i+=3;
            }
            else
            i++;
        }
        else if(v[i]==9)
        {
          if(parseInt(fno.value)>=20)
          {
            document.getElementById("a16").style.color="#018013";
          }
          else{
            document.getElementById("a17").style.color="#018013";
          }
          document.getElementById("a18").style.color="#f50707";
          i++;
        }
        else if(v[i]==10)
        {
            document.getElementById("a18").style.color="#018013";
            document.getElementById("a19").style.color="#f50707";
            if(parseInt(fno.value)>=20)
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="a is not less than 20";
            }
            i++;
        }
        else if(v[i]==13)
        {
            alert("Program Completed");
            document.getElementById("a111").style.color="#018013";
            document.getElementById("test").style.display="block";
            if(i==12)
            i++;
            else
            return;
        }
        else{
            document.getElementById("a1"+(i-1)).style.color="#018013";
            document.getElementById("a1"+i).style.color="#f50707";
            if(v[i]==11)
            {
              if(parseInt(fno.value)<20)
              {
                document.getElementById("a19").style.color="black";
                document.getElementById("a17").style.color="#018013";
              }
            }
            i++;
        }
        console.log("v[i]",v[i]);
    }
    else if(option==2)
    {
        v=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        if(v[i]==1)
        {
            document.getElementById("a10").style.color="#f50707";
            i++;
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="block";
            document.getElementById("r4c1").style.display="inline-block";
            document.getElementById("r4c8").style.display="inline-block";
            document.getElementById("m1").innerHTML=String(ra1);
            document.getElementById("a12").style.color="#018013";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("b1").classList.add("fullSizebox");
            i++;
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="inline-block";
            document.getElementById("a13").style.color="#018013";
            document.getElementById("a14").style.color="#f50707";
            i++;
        }
        else if(v[i]==6)
        {
            document.getElementById("r1c1").style.display="inline-block";
            document.getElementById("a14").style.color="#018013";
            document.getElementById("a15").style.color="#f50707";
            if (fno.value == "") {
                fno.style.borderColor = "red";
                aa=1;
              }
              else if (isNaN(fno.value)) {
                alert("Not A Number");
                aa=1;
              }
              else {
                fno.style.borderColor = "green";
                document.getElementById("b1").innerHTML = fno.value;
                document.getElementById("b1").style.backgroundColor = "red";
                aa=2;
                i++;
              }
        }
        else if(v[i]==8)
        {
            document.getElementById("a16").style.color="#018013";
            document.getElementById("a17").style.color="#f50707";
            if(parseInt(fno.value)==10)
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Value of a is 10";
                i+=7;
            }
            else
            i++;
        }
        else if(v[i]==10)
        {
            document.getElementById("a18").style.color="#018013";
            document.getElementById("a19").style.color="#f50707";
            if(parseInt(fno.value)==20)
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Value of a is 20";
                i+=5;
            }
            else
            i++;
        }
        else if(v[i]==12)
        {
            document.getElementById("a110").style.color="#018013";
            document.getElementById("a111").style.color="#f50707";
            if(parseInt(fno.value)==30)
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Value of a is 30";
                i+=3;
            }
            else
            i++;
        }
        else if(v[i]==14)
        {
            document.getElementById("a112").style.color="#018013";
            document.getElementById("a113").style.color="#f50707";
            if((parseInt(fno.value)!=10)&&(parseInt(fno.value)!=20)&&(parseInt(fno.value)!=30))
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Value of a is other than 10,20 and 30";
            }
            i++;
        }
        else if(v[i]==17)
        {
            alert("Program Completed");
            document.getElementById("a115").style.color="#018013";
            document.getElementById("test").style.display="block";
            if(i==16)
            i++;
            else
            return;
        }
            else if(v[i]==9)
            {
              if(parseInt(fno.value)!=20)
              {
                i+=2;
              }
              else
              {
                i++;
              }
              document.getElementById("a16").style.color="#018013";
              document.getElementById("a18").style.color="#f50707";
            }
            else if(v[i]==11)
            {
              if(parseInt(fno.value)!=30)
              {
                i+=2;
              }
              else
              i++;
              document.getElementById("a18").style.color="#018013";
              document.getElementById("a110").style.color="#f50707";
            }
            else if(v[i]==13)
            {
                document.getElementById("a110").style.color="#018013";
                document.getElementById("a112").style.color="#f50707";
                i++;
            }
            else if(v[i]==7)
            {
              document.getElementById("b1").style.backgroundColor="blue";
              if(parseInt(fno.value)!=10)
              {
                i+=2;
              }
              else
              i++;
              document.getElementById("a16").style.color="#f50707";
              document.getElementById("a15").style.color="#018013";
            }
            else if(v[i]==15)
            {
              if(parseInt(fno.value)==10)
              {
                document.getElementById("a17").style.color="#018013";
              }
              else if(parseInt(fno.value)==20)
              {
                document.getElementById("a19").style.color="#018013";
              }
              else if(parseInt(fno.value)==30)
              {
                document.getElementById("a111").style.color="#018013";
              }
              else
              document.getElementById("a113").style.color="#018013";
              document.getElementById("a114").style.color="#f50707";
              i++;
            }
            else{
              document.getElementById("a1"+(i-1)).style.color="#018013";
              document.getElementById("a1"+i).style.color="#f50707";
              i++;
            }
            console.log(v[i]);
    }
    else if(option==3)
    {
        v=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
        if(v[i]==1)
        {
            document.getElementById("a10").style.color="#f50707";
            i++;
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="block";
            document.getElementById("r4c1").style.display="inline-block";
            document.getElementById("r4c8").style.display="inline-block";
            document.getElementById("r4c9").style.display="inline-block";
            document.getElementById("r4c3").style.display="inline-block";
            document.getElementById("m1").innerHTML=String(ra1);
            document.getElementById("m2").innerHTML=String(ra2);
            document.getElementById("a12").style.color="#018013";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("b1").classList.add("fullSizebox");
            document.getElementById("b2").classList.add("fullSizebox");
            i++;
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="inline-block";
            document.getElementById("a13").style.color="#018013";
            document.getElementById("a14").style.color="#f50707";
            i++;
        }
        else if(v[i]==6)
        {
            document.getElementById("r1c1").style.display="inline-block";
            document.getElementById("a14").style.color="#018013";
            document.getElementById("a15").style.color="#f50707";
            if (fno.value == "") {
                fno.style.borderColor = "red";
                aa=1;
              }
              else if (isNaN(fno.value)) {
                alert("Not A Number");
                aa=1;
              }
              else {
                fno.style.borderColor = "green";
                document.getElementById("b1").innerHTML = fno.value;
                document.getElementById("b1").style.backgroundColor = "red";
                aa=2;
                i++;
              }
        }
        else if(v[i]==7)
        {
            document.getElementById("b1").style.backgroundColor="blue";
            document.getElementById("ln1").style.display="inline-block";
            document.getElementById("a15").style.color="#018013";
            document.getElementById("a16").style.color="#f50707";
            i++;
        }
        else if(v[i]==8)
        {
            document.getElementById("r2c1").style.display="inline-block";
            document.getElementById("a16").style.color="#018013";
            document.getElementById("a17").style.color="#f50707";
            if (lno.value == "") {
                lno.style.borderColor = "red";
                bb=1;
              }
              else if (isNaN(lno.value)) {
                alert("Not A Number");
                bb=1;
              }
              else {
                lno.style.borderColor = "green";
                document.getElementById("b2").innerHTML = lno.value;
                document.getElementById("b2").style.backgroundColor = "red";
                bb=2;
                i++;
              }
        }
        else if(v[i]==9)
        {
          if(parseInt(fno.value)<=100)
          {
            i++;
          }
          else{
            i+=4;
          }
          document.getElementById("a17").style.color="#018013";
          document.getElementById("a18").style.color="#f50707";
        }
        else if(v[i]==10)
        {
          if(parseInt(lno.value)>=200)
          i++;
          else
          i+=6;
          document.getElementById("a18").style.color="#018013";
          document.getElementById("a19").style.color="#f50707";
        }
        else if(v[i]==11)
        {
            document.getElementById("a19").style.color="#018013";
            document.getElementById("a110").style.color="#f50707";
              i++;
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Value of a is less than or equal to 100 and value of b is greater than or equal to 200";
        }
        else if (v[i]==16)
        {
          if((parseInt(lno.value)>=200)&&(parseInt(fno.value)<=100))
          document.getElementById("a111").style.color="#018013";
          if((parseInt(lno.value)<200)&&(parseInt(fno.value)<=100))
          document.getElementById("a19").style.color="#018013";
          if(parseInt(fno.value)>100)
          document.getElementById("a114").style.color="#018013";
          document.getElementById("a115").style.color="#f50707";
          i++;
        }
        else if(v[i]==12)
        {
          i+=4;
          document.getElementById("a110").style.color="#018013";
            document.getElementById("a111").style.color="#f50707";
        }
        else if(v[i]==13)
        {
          if(parseInt(fno.value)>100)
          {
            document.getElementById("a18").style.color="#018013";
            document.getElementById("a112").style.color="#f50707";
          }
          i++;
        }
        else if(v[i]==14)
        {
            document.getElementById("a112").style.color="#018013";
            document.getElementById("a113").style.color="#f50707";
            if((parseInt(fno.value)<=100)&&(parseInt(lno.value)<200))
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Value of a is less than or equal to 100 and value of b is less than 200";
            }
            i++;
        }
         else if(v[i]==18)
        {
            alert("Program Completed");
            document.getElementById("a116").style.color="#018013";
            document.getElementById("test").style.display="block";
            if(i==17)
            i++;
            else
            return;
        }
        else{
            if(v[i]==9)
            document.getElementById("b2").style.backgroundColor="blue";
            document.getElementById("a1"+(i-1)).style.color="#018013";
            document.getElementById("a1"+i).style.color="#f50707";
            i++;
        }
        console.log(v[i]);
    }
    else
    {
        v=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
        if(v[i]==1)
        {
            document.getElementById("a10").style.color="#f50707";
            i++;
        }
        else if(v[i]==4)
        {
            document.getElementById("tbl").style.display="block";
            document.getElementById("r4c1").style.display="inline-block";
            document.getElementById("r4c8").style.display="inline-block";
            document.getElementById("change").innerHTML="choice";
            document.getElementById("m1").innerHTML=String(ra1);
            document.getElementById("a12").style.color="#018013";
            document.getElementById("a13").style.color="#f50707";
            document.getElementById("b1").classList.add("fullSizebox");
            i++;
        }
        else if(v[i]==5)
        {
            document.getElementById("fn1").style.display="inline-block";
            document.getElementById("fn1").innerHTML="Enter The Choice : ";
            document.getElementById("a13").style.color="#018013";
            document.getElementById("a14").style.color="#f50707";
            i++;
        }
        else if(v[i]==6)
        {
            document.getElementById("r1c1").style.display="inline-block";
            document.getElementById("a14").style.color="#018013";
            document.getElementById("a15").style.color="#f50707";
            if (fno.value == "") {
                fno.style.borderColor = "red";
                aa=1;
              }
              else if (isNaN(fno.value)) {
                alert("Not A Number");
                aa=1;
              }
              else {
                fno.style.borderColor = "green";
                document.getElementById("b1").innerHTML = fno.value;
                document.getElementById("b1").style.backgroundColor = "red";
                aa=2;
                i++;
              }
        }
        else if(v[i]==9)
        {
            document.getElementById("a17").style.color="#018013";
            document.getElementById("a18").style.color="#f50707";
            if(parseInt(fno.value)==1)
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Choice is 1";
                i++;
            }
            
        }
        else if(v[i]==12)
        {
            document.getElementById("a110").style.color="#018013";
            document.getElementById("a111").style.color="#f50707";
            if(parseInt(fno.value)==2)
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Choice is 2";
            }
            i++;
        }
        else if(v[i]==15)
        {
            document.getElementById("a113").style.color="#018013";
            document.getElementById("a114").style.color="#f50707";
            if(parseInt(fno.value)==3)
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Choice is 3";
            }
            i++;
        }
        else if(v[i]==18)
        {
            document.getElementById("a116").style.color="#018013";
            document.getElementById("a117").style.color="#f50707";
            if((parseInt(fno.value)!=1)&&(parseInt(fno.value)!=2)&&(parseInt(fno.value)!=3))
            {
                document.getElementById("r3c1").style.display="inline-block";
                document.getElementById("r3c5").innerHTML="Choice other than 1,2 and 3";
            }
            i++;
        }
        else if(v[i]==21)
        {
            alert("Program Completed");
            document.getElementById("a119").style.color="#018013";
            document.getElementById("test").style.display="block";
            if(i==20)
            i++;
            else
            return;
        }
        else if(v[i]==7)
        {
          document.getElementById("b1").style.backgroundColor="blue";
          if(parseInt(fno.value)==1)
          {
            i+=1;
          }
          if(parseInt(fno.value)==2)
          {
            i+=4;
          }
          if(parseInt(fno.value)==3)
          {
            i+=7;
          }
          if((parseInt(fno.value)!=1)&&(parseInt(fno.value)!=2)&&(parseInt(fno.value)!=3))
          {
            i+=10;
          }
          document.getElementById("a15").style.color="#018013";
          document.getElementById("a16").style.color="#f50707";
        }
        else if(v[i]==11)
        {
          i++;
          document.getElementById("a16").style.color="#018013";
            document.getElementById("a110").style.color="#f50707";
        }
        else if(v[i]==14)
        {
          i++;
          document.getElementById("a16").style.color="#018013";
            document.getElementById("a113").style.color="#f50707";
        }
        else if(v[i]==17)
        {
          i++;
          document.getElementById("a16").style.color="#018013";
            document.getElementById("a116").style.color="#f50707";
        }
        else if(v[i]==13)
        {
          if(parseInt(fno.value)==2)
          {
            i+=6;
          }
          else
          {
            i++;
            
          }
          document.getElementById("a111").style.color="#018013";
            document.getElementById("a112").style.color="#f50707";
        }
        else if(v[i]==16)
        {
          if(parseInt(fno.value)==3)
          {
            i+=3;
          }
          else
          {
            i++;
          }
          document.getElementById("a114").style.color="#018013";
          document.getElementById("a115").style.color="#f50707";
        }
        else if(v[i]==19)
        {
          if(parseInt(fno.value)==1)
          {
            document.getElementById("a19").style.color="#018013";
          }
          if(parseInt(fno.value)==2)
          {
            document.getElementById("a112").style.color="#018013";
          }
          if(parseInt(fno.value)==3)
          {
            document.getElementById("a115").style.color="#018013";
          }
          if((parseInt(fno.value)!=1)&&(parseInt(fno.value)!=2)&&(parseInt(fno.value)!=3))
          {
            document.getElementById("a117").style.color="#018013";
          }
          document.getElementById("a118").style.color="#f50707";
          i++;
        }
        else if(v[i]==10)
        {
          if(parseInt(fno.value)==1)
          i+=9;
          else
          i++;
          document.getElementById("a18").style.color="#018013";
          document.getElementById("a19").style.color="#f50707";
        }
        else{
            
            document.getElementById("a1"+(i-1)).style.color="#018013";
            document.getElementById("a1"+i).style.color="#f50707";
            i++;
        }
        console.log(v[i]);
    }
}