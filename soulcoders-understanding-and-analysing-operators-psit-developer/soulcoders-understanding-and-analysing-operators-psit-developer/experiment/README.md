This folder has 
### <b>Aim</b>
In this experiment the Student will be able to understand and analyse Relational and Logical Operators in Go Programming Language by using the simulator.

### <b>Theory</b>
 <h4>Principle:</h4>
                   <div align="justify"> It involves the use of Go simulator implementing various relational and logical operations. Understanding and Analysing relational and logical operators in Go Programming Language can be a difficult job to accomplish. This difficulty can be countered with the help of Go simulator that provides a friendly programming environment to the beginners, so that every new Student can easily perform these operations and can implement in various Go programs. <br>
                   Operators are the foundation of any programming language. Thus the functionality of the Go language is incomplete without the use of operators.<br>
                    <h4>Theory of Relational Operator:</h4><br>
                    A relational operator compares two values and determines the relationship between them. These include numerical equality (e.g., 5 = 5) and inequalities (e.g., 4 ≥ 3).These are binary operators because they require two operands to operate.An expression which contains the relational operators is called relational expression. If the relation is true then the result of the relational expression is 1, if the relation is false then the result of the relational expression is 0.<br>
                    There are six types of relational operators in Go language:<br>
                    <b>Equal to operator:</b> Represented as ‘==’, the equal to operator checks whether the two given operands are equal or not. If so, it returns true. Otherwise it returns false. For example, 5==5 will return true.<br>
                    <b>Not equal to operator:</b> Represented as ‘!=’, the not equal to operator checks whether the two given operands are equal or not. If not, it returns true. Otherwise it returns false. It is the exact boolean complement of the ‘==’ operator. For example, 5!=5 will return false.<br>
                    <b>Greater than operator:</b> Represented as ‘>’, the greater than operator checks whether the first operand is greater than the second operand or not. If so, it returns true. Otherwise it returns false. For example, 6>5 will return true.<br>
                    <b>Less than operator:</b> Represented as ‘&lt;‘, the less than operator checks whether the first operand is lesser than the second operand. If so, it returns true. Otherwise it returns false. For example, 6< 5 will return false.<br>
                    <b>Greater than or equal to operator:</b> Represented as ‘>=’, the greater than or equal to operator checks whether the first operand is greater than or equal to the second operand. If so, it returns true else it returns false. For example, 5>=5 will return true.<br>
                    <b>Less than or equal to operator:</b> Represented as ‘<=’, the less than or equal tooperator checks whether the first operand is less than or equal to the second operand. If so, it returns true else false. For example, 5<=5 will also return true.<br><br>
                    <h3><b>Theory of Logical Operator:</b></h3><br>
                    Logical operators are used to evaluate two or more conditions. In General, Logical operators are used to combine relational expressions, but they are not limited to just relational expression you can use any kind of expression even constants. If the result of the logical operator is true then 1 is returned otherwise 0 is returned.These are binary operators because they require two operands to operate.Here,all non-zero values are considered as true ( 1 ) while 0 is considered as false.An expression which contains the logical operators is called logical expression.<br>
                    There are three types of relational operators in Go language:<br>
                    <b>Logical AND operator:</b> The ‘&&’ operator returns true when both the conditions under consideration are satisfied. Otherwise it returns false. For example, a && b returns true when both a and b are true (i.e. non-zero).<br>

Sr. No |	Operand 1	| Operand 2 | Result
:--|:--|:--|:-:
1.| True | True | True
2.| True | False | False
3.| False | True | False
4.| False | True | False

<br>
                    <b>Logical OR operator:</b> The ‘||’ operator returns true even if one (or both) of the conditions under consideration is satisfied. Otherwise it returns false. For example, a || b returns true if one of a or b or both are true (i.e. non-zero). Of course, it returns true when both a and b are true.<br>

Sr. No |	Operand 1	| Operand 2 | Result
:--|:--|:--|:-:
1.| True | True | True
2.| True | False | True
3.| False | True | True
4.| False | True | False

<br>
                    <b>Logical NOT operator:</b> The ‘!’ operator returns true the condition in consideration is not satisfied. Otherwise it returns false. For example, !a returns true if a is false, i.e. when a=0.<br>

Sr. No |	Operand   | Result
:--|:--|:-:
1.| True | False
2.| False | True

### <b>Procedure</b>
<h4>Steps of simulator :</h4>
                    1. Click on the Simulator tab.<br>
                    2. Click on instruction button in simulator to see the steps for running simulator.<br>
                    3. Click on the dropdown to select the operator.<br>
                    4. Click on execute button.<br>
                    5. Click on next instruction button to see the execution of each step of program.<br>
                    6. To go to a previous instruction student can click on previous instruction button.<br>
                    9. Click on Program Task button that appears after program execution completes.<br>
                    10. After completing the programming task student can click on result button to see the result .<br>
                    11. The result section contains show answer button,clicking on it takes student to correct answer section.<br>
                    12. Click on reset button to run the simulator again. 
                    
### <b>Pre-Test</b>
<dd>1.Which one is not comes under Binary Operators category?<br>
a.Arithmetic Operators<br>
b.Relational Operators<br>
c.Logical Operators<br>
d.Ternary Operator<br></dd><br>
<dd>2.How many different types of Relational Operators are used in Go Programming Language?<br>
a.5<br>
b.4<br>
c.2<br>
d.6<br></dd><br>
<dd>3.How many different types of Logical Operators are used in Go Programming Language?<br>
a.4<br>
b.3<br>
c.2<br>
d.1<br></dd><br>
<dd>4.The syntax for using && is-<br>
a.cmd1 && cmd2<br>
b.cmd1 cmd2 &&<br>
c.cmd1 & cmd2&<br>
d.None of them<br></dd><br>
<dd>5.Which of the following operators are used for logical execution?<br>
a.||<br>
b.&&<br>
c.%%<br>
d.Both a & b<br></dd><br>

### <b>Post-Test</b>
<dd>1. What is the result of a relational or logical expression?<br>
a. True or False<br>
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
a. 0<br>
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
d. Compilation failed<br></dd><br>
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
b. Hello<br>0 0<br>
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
a.  0<br>
b.	Compilation failed<br>
c.	1<br>
d.	True</dd><br>

### <b>References</b>
<p style="font-size:100%; margin-top:2%">
                        1.The Go Programming Language Book by Alan A. A. Donovan and Brian Kernighan
                        <br><br>
                        2.Introducing Go: Build Reliable, Scalable Programs Book by Caleb Doxsey
                        <br><br>
                        3.Mastering Go: Create Golang Production Applications Using Network Libraries, Concurrency, and Advanced Go Data Structures Book by Mihalis Tsoukalos
                        <br><br>
                        <h3><b>Webliography :</b></h3>
                        <br>
                        1. Golang Documentation - https://golang.org/doc/
                        <br>
                        2. An Introduction To Programming In Go - http://www.golang-book.com
                        <br>
                        3. 50 Shades Of Go - http://devs.cloudimmunity.com/gotchas-and-common-mistakes-in-go-golang/index.html
                        <br><br>
                        <h3><b>Additional video links :</b></h3>
                        <br>
                        1. https://www.youtube.com/watch?v=YS4e4q9oBaU
                        <br>
                        2. https://www.youtube.com/watch?v=Q0sKAMal4WQ
                    </p>

