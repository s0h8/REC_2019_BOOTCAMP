This folder has 
### <b>Aim</b>
In this experiment the Student will be able to understand and analyse Conditional Statements in Go Programming Language by using the simulator.
### <b>Theory</b>
<h3>Principle:</h3>
                   <div align="justify"> It involves the use of Go simulator implementing various Conditional Statements. Understanding and Analysing conditional statements in Go Programming Language can be a difficult job to accomplish. This difficulty can be countered with the help of Go simulator that provides a friendly programming environment to the beginners, so that every new Student can easily perform these statements and can implement in various Go programs. <br>
                   Conditional statements are the most important part of any programming language. Thus the functionality of the Go language is incomplete without the use of conditions.<br>
                    <h3>Theory of Conditonal Statements:</h3><br>
                    In programming there are some situation where we need to make some decisions and based on these decisions we will execute the certain block of code. For instance, in C programming if x happens then execute y else execute z. There can also be multiple conditions like in C if x happens then execute p, else if condition y happens execute q, else execute r.<br>
                    Decision making statements in programming languages decides the direction of flow of program execution.<br>
                    following are the conditional statements in Go Programming Language -<br>
                    <b>If Statement: </b>if statement is the most simple decision making statement. It is used to decide whether a certain statement or block of statements will be executed or not i.e if a certain condition is true then a block of statement is executed otherwise not.<br>
                    syntax-<br>
                    if  condition { <br>
                        // code to be executed if condition is true<br>
                    }<br>
                    <b>If-Else Statement: </b>The if statement alone tells us that if a condition is true it will execute a block of statements and if the condition is false it won’t. But what if we want to do something else if the condition is false. Here comes the else statement. We can use the else statement with if statement to execute a block of code when the condition is false.<br>
                    syntax-<br>
                    if  condition { <br>
                         // code to be executed if condition is true<br>
                    } else {<br>
                        // code to be executed if condition is false<br>
                    }<br>
                    <b>If-Else-If statement: </b>Here, a user can decide among multiple options. The if statements are executed from the top down. As soon as one of the conditions controlling the if is true, the statement associated with that if is executed, and the rest of the else-if ladder is bypassed. If none of the conditions are true, then the final else statement will be executed.<br>
                    syntax-<br>
                    if  condition-1 { <br>
                         // code to be executed if condition-1 is true<br>
                    } else if condition-2 {<br>
                        // code to be executed if condition-2 is true<br>
                    } else {<br>
                         // code to be executed if both condition1 and condition2 are false<br>
                    }<br>
                    <b>Nested-If Statement: </b>A nested if is an if statement that is the target of another if statement. Nested if statements means an if statement inside another if statement. <br>
                    syntax-<br>
                    if( condition 1) {<br>
                        /* Executes when the condition 1 is true */<br>
                    if( condition 2) {<br>
                         /* Executes when the condition 2 is true */<br>
                        }<br>
                     }<br>
                     <b>Switch Statement: </b>Switch case statements are a substitute for long if statements that compare a variable to several integral values<br>
                     The switch statement is a multiway branch statement. It provides an easy way to dispatch execution to different parts of code based on the value of the expression.<br>
                     Switch is a control statement that allows a value to change control of execution.<br>
                     Default and Break keywords are not mandatory in Switch Statement.<br>
                     syntax-<br>
                     switch optstatement; optexpression{<br>
                    case expression1: Statement..<br>
                    case expression2: Statement..<br>
                    ...<br>
                    default: Statement..<br>
                    }<br>

### <b>Procedure</b>
<h4>Steps of simulator :</h4>
                    1. Click on the Simulator tab.<br>
                    2. Click on instruction button in simulator to see the steps for running simulator.<br>
                    3. Click on the dropdown to select arithmetic operator.<br>
                    4. Click on execute button.<br>
                    5. Click on next instruction button to see the execution of each step of program.<br>
                    6. Click on Program Task button that appears after program execution completes.<br>
                    7. After completing the programming task student can click on result button to see the result.<br>
                    8. The result section contains show answer button,clicking on it takes user to correct answer section.<br>
                    9. Click on reset button to run the simulator again.
                    
### <b>Pre Test</b>
<dd>1.A switch statement is used to-<br>
a.To use switching variable<br>
b.Switch between function in a program<br>
c.Switch from one variable to another<br>
d.To choose from multiple possibilities which may arise due to different values of a single variable<br></dd><br>
<dd>2. Which one of the following statement is correct?<br>
a.else if is compulsory to use with if statement<br>
b.else is compulsory to use with if statement<br>
c.else or else if is optional with if statement<br>
d.None of the above<br></dd><br>
<dd>3.Conditional statements can be used within another conditional statements that are called -<br>
a.Nesting Conditional statements<br>
b.Compound statements<br>
c.Switch Statements<br>
d.None of the Above<br></dd><br>
<dd>4.Can an else statement exist without an if statement preceding it?<br>
a.Yes, else statement can exist without an if statement<br>
b.No, an else statement can only exist with an if statement<br>
c.Else cannot exist without an if statement, but an else-if statement can exist without a preceding if statement<br>
d.Yes, an else statement can exist without an if statement if its the first line inside the main ()<br></dd><br>
<dd>5.Is nested switch statements possible?<br>
a.Yes<br>
b.No<br>
c.Can't say<br>
d.None of the above<br></dd><br>

### <b>Post Test</b>
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
b. Smallest number is 7<br>
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
c. Greatest number is 9<br>
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
b. Multiple of 5<br>
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
a. Hello<br>
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
a.  0<br>
b.	Compilation failed<br>
c.	1<br>
d.	0 1</dd><br>

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

