### <b>Post-Test</b>
<dd>1. What will be the output of the following code?<br>
package main<br>
import("fmt")<br>
func main(){<br>
    var a,b,c int<br>
    a=8<br>
    b=7<br>
    c=9<br>
    if(a>b){<br>
        if(c>b){<br>
            fmt.Print("Smallest number is ",b)<br>
        }<br>
    }<br>
}<br>
a. Smallest number is 8<br>
<b>b. Smallest number is 7</b><br>
c. Smallest number is 9<br>
d. None of the above<br></dd><br>
<dd>2.What will be the output of the following code?<br>
package main<br>
import("fmt")<br>
func main(){<br>
    var a,b,c int<br>
    a=8<br>
    b=7<br>
    c=9<br>
    if(c>a){<br>
        if(c>b){<br>
            fmt.Print("Greatest number is ",c)<br>
        }<br>
    }<br>
}<br>
a. Greatest number is 8<br>
b. Greatest number is 7<br>
<b>c. Greatest number is 9</b><br>
d. None of the above<br></dd><br>
<dd>3.What will be the output of the following code?<br>
package main <br> 
import ("fmt")<br>
func main() { <br>
    var a int<br>
    a=10<br>
    if(a%5==0){<br>
        fmt.Print("Multiple of 5")<br>
    } else{<br>
        fmt.Print("Not a multiple of 5")<br>
    }<br>
}<br>
a. Not a multiple of 5<br>
<b>b. Multiple of 5</b><br>
c. Compilation failed<br>
d. None of the above<br></dd><br>
<dd>4.What will be the output of the following code?<br>
package main<br>
import("fmt")<br>
func main(){<br>
    var i,j int<br>
    i=0<br>
    j=0<br>
    if(i>=j && j>=i){<br>
    fmt.Println("Hello")<br>
    } else{<br>
        fmt.Println("Bye")<br>
    }<br>
}<br>
<b>a. Hello</b><br>
b. Bye<br>
c. Hello Bye<br>
d.None of the above<br></dd><br>
<dd>5.What will be the output of the following code?<br>
package main<br>
import("fmt")<br>
func main(){<br>
    var n1,n2 int<br>
    n1=10<br>
    n2=5<br>
    if((n1 > n2) || (n2 > n1)){<br>
    fmt.Print("0")<br>
    }
    if((n1 > n2) && (n2 > n1)){<br>
    fmt.Print("1")<br>
    }<br>
}<br>
<b>a.  0</b><br>
b.	Compilation failed<br>
c.	1<br>
d.	0 1</dd><br>
