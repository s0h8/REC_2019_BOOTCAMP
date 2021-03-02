### <b>Theory</b>
 <h3><b>Principle:</b></h3>
                   <div align="justify"> It involves the use of Go simulator implementing loop used in Go Programming. Understanding and Analysing the syntax of Go Programming Language can be a difficult job to accomplish. This difficulty can be countered with the help of Go simulator that provides a friendly programming environment to the beginners, so that every new Student can easily understand for Loop and can implement in various Go programs. <br>
                    <h3><b>Theory of Looping Construct:</b></h3>
                    In Programming language a loop is used to execute a block of code repeatedly.For example if there is some set of instructions in program which have common logic and can be written inside a loop body which executes it repeatedly instead of writing it again and again in program. <br>
                    The Go Programming language has only one Looping construct-'for loop'.Go doesn't have while or do while loops which are present in other languages like C, Java etc.<br>
                    The basic for loop has three components separated by semicolons:<br>
                    <b>The initialization expression</b>: It contains the variable declaration and variables declared there are visible only in the scope of the for statement, the initialisation expression is executed before the first iteration<br>
                    <b>The condition expression</b>: In this the condition gets evaluated after every iteration and if the condition is true then the next iteration executes evaluated before every iteration<br>
                    <b>Updation Expression</b>: After executing loop body this expression increments/decrements the loop variable by some value. for example: i++;<br>
                    Unlike other languages like C, Java, or JavaScript there are no parentheses surrounding the three components of the for statement and the braces { } are always required.<br>
                    <b>package main</b><br>
<b>import "fmt"</b><br>
<b>func main()</b>{<br>
	<b>sum := 0</b><br>
	<b>for i := 0; i < 10; i++{</b> <br>
		<b>sum += i</b><br>
	<b>}</b><br>
	<b>fmt.Println(sum)</b><br>
<b>}</b><br>
Here, 'i:=0' is the initialisation expression that initialises 'i' with a value 0, i<10 is the condition expression that checks the value of i after every 
iteration, i++ is the updation expression which increase the value of i after execution of every iteration. <br> 
                    The below flow chart explains the working of For loop.<br> <br>
                    <img src="experiment/simulation/images/forloop.png"> <br>
                    <b>For is Go's while</b> <br><br>
                    Example of while loop (in C,Java programming language.)-<br><br>
                    int count=1;<br>
                   while (count <= 4)<br>
                   {<br>
                	printf("%d ", count);<br>
                	count++;<br>
                   }<br><br>
                   for loop in Go language can act in a similar way as while loop in other programming language since 
                    initialization experssion and Updation expression is optional in Go Programming <br>
                    for example: <br>
                    <b>func main() { </b><br>
                    <b>	sum := 1 </b><br>
                    <b>	for ; sum < 1000; {</b> <br>
                    	<b>	sum += sum </b><br>
                    	<b>} </b><br>
                    	<b>fmt.Println(sum) <br>
                        } </b><br><br>
                        In this case we can remove the semicolons in for loop, and it act as a while loop in which there is only condition expression after the while keyword, for example: <br>
                      <b>  func main() { <br>
                    	sum := 1<br>
                    	for sum < 1000 {<br>
                    		sum += sum<br>
                    	}<br>
                    	fmt.Println(sum)<br>
                        }</b>
                        
                        
                                         
                     
            
