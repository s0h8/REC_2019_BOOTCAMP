### <b>Theory</b>
 <h3><b>Principle:</b></h3>
                   <div align="justify"> It involves the use of Go simulator implementing various Conditional Statements. Understanding and Analysing conditional statements in Go Programming Language can be a difficult job to accomplish. This difficulty can be countered with the help of Go simulator that provides a friendly programming environment to the beginners, so that every new Student can easily perform these statements and can implement in various Go programs. <br>
                   Conditional statements are the most important part of any programming language. Thus the functionality of the Go language is incomplete without the use of conditions.<br>
                    <h3><b>Theory of Conditonal Statements:</b></h3><br>
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
