### <b>Post-Test</b>
<dd>1. What is the result of a relational or logical expression?<br>
<b>a. True or False</b><br>
b. 0 if an expression is false and any positive number if an expression is true<br>
c. 0 or 1<br>
d. None of the above<br></dd><br>
<dd>2.What will be the output of the following code?<br>
package main<br>
import("fmt")<br>
func main(){<br>
    var a1,a2,a3,a4 int<br>
    a1=4<br>
    a2=5<br>
    a3=6<br>
    a4=8<br>
    if(((a1 * a2 / a3) + a4) >= ((a2 * a3 + a4 ) / a1)){<br>
    fmt.Print("0")<br>
    }else{<br>
    fmt.Print("1")<br>
    }<br>
}<br>
<b>a. 0</b><br>
b. Compilation failed<br>
c. 1<br>
d. None of the above<br></dd><br>
<dd>3.What will be the output of the following code?<br>
package main <br> 
import ("fmt")<br>
func main() { <br>
    var a1,a2,a3,a4 int<br>
    a1=10<br>
    a2=5<br>
    a3=5<br>
    a4=(a2+a3==a1)<br>
    fmt.Print(a4)<br>
}<br>
a. 0<br>
b. 1<br>
c. 10<br>
<b>d. Compilation failed</b><br></dd><br>
<dd>4.What will be the output of the following code?<br>
package main<br>
import("fmt")<br>
func main(){<br>
    var p1,p2 int<br>
    p1=0<br>
    p2=0<br>
    if(p1>=p2 && p2>=p1){<br>
    fmt.Println("Hello")<br>
    }<br>
    fmt.Print(p1," ",p2)<br>
}<br>
a. Hello 0 0<br>
<b>b. Hello<br>0 0</b><br>
c. Hello <br>0<br>0<br>
d.None of the above<br></dd><br>
<dd>5.What will be the output of the following code?<br>
package main<br>
import("fmt")<br>
func main(){<br>
    var x,y int<br>
    x=10<br>
    y=5<br>
    if((x > y) || (y > x)){<br>
    fmt.Print("0")<br>
    }<br>
}<br>
<b>a.  0</b><br>
b.	Compilation failed<br>
c.	1<br>
d.	True</dd><br>