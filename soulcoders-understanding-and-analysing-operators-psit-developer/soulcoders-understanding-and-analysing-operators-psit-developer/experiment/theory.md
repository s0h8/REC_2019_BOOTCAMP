### <b>Theory</b>
 <h3><b>Principle:</b></h3>
                   <div align="justify"> It involves the use of Go simulator implementing various relational and logical operations. Understanding and Analysing relational and logical operators in Go Programming Language can be a difficult job to accomplish. This difficulty can be countered with the help of Go simulator that provides a friendly programming environment to the beginners, so that every new Student can easily perform these operations and can implement in various Go programs. <br>
                   Operators are the foundation of any programming language. Thus the functionality of the Go language is incomplete without the use of operators.<br>
                    <h3><b>Theory of Relational Operator:</b></h3><br>
                    A relational operator compares two values and determines the relationship between them. These include numerical equality (e.g., 5 = 5) and inequalities (e.g., 4 ≥ 3).These are binary operators because they require two operands to operate.An expression which contains the relational operators is called relational expression. If the relation is true then the result of the relational expression is 1, if the relation is false then the result of the relational expression is 0.<br>
                    There are six types of relational operators in Go language:<br>
                    <b>Equal to operator:</b> Represented as ‘==’, the equal to operator checks whether the two given operands are equal or not. If so, it returns true. Otherwise it returns false. For example, 5==5 will return true.<br>
                    <b>Not equal to operator:</b> Represented as ‘!=’, the not equal to operator checks whether the two given operands are equal or not. If not, it returns true. Otherwise it returns false. It is the exact boolean complement of the ‘==’ operator. For example, 5!=5 will return false.<br>
                    <b>Greater than operator:</b> Represented as ‘>’, the greater than operator checks whether the first operand is greater than the second operand or not. If so, it returns true. Otherwise it returns false. For example, 6>5 will return true.<br>
                    <b>Less than operator:</b> Represented as ‘<‘, the less than operator checks whether the first operand is lesser than the second operand. If so, it returns true. Otherwise it returns false. For example, 6< 5 will return false.<br>
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