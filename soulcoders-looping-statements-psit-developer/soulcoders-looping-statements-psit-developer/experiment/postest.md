### <b>Post-Test</b>
<dd>1.Loop statements can be used within another loop statements that are called -<br>
<b>a.Nesting Loop statements</b><br>
b.Nesting Conditional statements<br>
c.Switch Statements<br>
d.None of the Above</dd><br>
<dd>2.What will be the output of the following code?<br><br>
package main<br>
import "fmt"<br>
func main() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;sum := 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;for sum < 20 {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum += sum<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;fmt.Println(sum)<br>
}<br>
a.20<br>
b.21<br>
c.15<br>
<b>d.None of these</b></dd><br>
<dd>3.What will be the output of the following code?<br>
package main<br>

func main() {<br>
	for { <br>
	} <br>
}<br>
<b>a.Infinite loop</b><br>
b.Compilation Error<br>
c. No error<br>
d.None of the Above<br></dd><br>
<dd>4.What will be the output of the following code?<br>
package main<br>
import ("fmt")<br>
func main() {<br>
	for i:=0; i<9; i++{ <br>
		if i %4==0 { <br>
		fmt.Print(i)<br>
         break <br>
  		} <br>
   } <br>
}<br>
a.9<br>
b.4<br>
c.Error<br>
<b>d.None of the above</b><br></dd><br>
<dd>5.What will be the output of the following code?<br>
package main<br>
import ("fmt")<br>
func main() {<br>
	for i:=0; i<13; i++{ <br>
		if i %5==0 { <br>
		fmt.Print(i)<br>
         break <br>
  		} <br>
   } <br>
}<br>
a.13<br>
b.5<br>
c.Error<br>
<b>d.None of the above</b></dd><br>