### <b>Theory</b>
  <h3><b>Principle:</b></h3>
                   <div align="justify"> It involves the use of Go simulator implementing Array data structure. Understanding and Analysing Array in Go Programming Language can be a difficult job to accomplish. This difficulty can be countered with the help of Go simulator that provides a friendly programming environment to the beginners, so that every new Student can easily perform these data structure and can implement in various Go programs. <br>
                   Arrays are the most important part of Data Structure of any programming language. Thus the functionality of the Go language is incomplete without the use of Array.<br>
                    <h3><b>Theory of Array:</b></h3><br>
                    An array is a data structure that contains a group of elements. Typically these elements are all of the same data type, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched.<br>
                    All arrays consist of contiguous memory locations. The lowest address corresponds to the first element and the highest address to the last element. <br>
                    In our experiment we have discussed 1-D and 2-D Arrays. <br>
                    <b>One-Dimensional Array-</b><br>
                    <img src="experiment/images/arrays.PNG"><br>
                    In the above image  200, 202, 204 are the memory location. and the 0,1,2 are the index of array.
                    A one-dimensional array (or single dimension array) is a type of linear array. Accessing its elements involves a single subscript which can either represent a row or column index.<br>
                    <b>Two-Dimensional Arrays</b><br>
                    <img src="experiment/images/2darray.PNG"><br>
                    A two-dimensional array is the simplest form of a multidimensional array. Multidimensional arrays in simple words as array of arrays. Data in multidimensional arrays are stored in tabular form (in row major order). -<br>
                    <br>
					<b>Creating an array</b><br>
					In Go language, arrays are created in two different ways:<br>
					<b>Using var keyword:</b> In Go language, an array is created using the var keyword of a particular type with name, size, and elements.<br>
					Syntax:<br>
					Var array_name[length]Type<br>
					<img src="experiment/images/arraydeclare.png"><br>
					We can access the elements of the array by using the index value or by using for loop.<br>
					The length of the array is fixed and unchangeable that is array once initialized can not be changed at run time execution of program.<br>
					In Go Language we are allowed to store duplicate elements in an array.<br><br>
					<b>Go program to illustrate how to create an array using the var keyword and accessing the elements of the array using their index value</b><br>
					package main<br>
					import "fmt"<br>
					func main(){<br> 
					// Creating an array of string type<br>  
					// Using var keyword<br>
					var myarr[3]string<br>
					// Elements are assigned using index<br>
					myarr[0] = "ABC"<br>
					myarr[1] = "DEF"<br>
					myarr[2] = "GHI"<br>
					// Accessing the elements of the array<br>  
					// Using index value<br> 
					fmt.Println("Elements of Array:")<br> 
					fmt.Println("Element 1: ", myarr[0])<br>
					fmt.Println("Element 2: ", myarr[1])<br>
					fmt.Println("Element 3: ", myarr[2])<br>
					} <br><br>
					<b>Using shorthand declaration:</b> In Go language, arrays can also declare using shorthand declaration. It is more flexible than the above declaration.<br>
					Syntax:<br>
					array_name:= [length]Type{item1, item2, item3,...itemN}<br>
					<img src="experiment/images/arrayshorthand.png"><br><br>
					<b>Go program to illustrate how to create an array using shorthand declaration and accessing the elements of the  array using for loop.</b><br> 
					package main<br>
					import "fmt"<br>
					func main() {<br>
					// Shorthand declaration of array<br> 
					arr:= [4]string{"this", "is", "Go", "program"}<br> 
					// Accessing the elements of<br>
					// the array Using for loop<br>
					fmt.Println("Elements of the array:")<br> 
					for i:= 0; i < 3; i++{<br>
					fmt.Println(arr[i])<br>
					}<br>
					}<br>
					Output<br><br>
					Elements of the array:<br>
                    this<br>
                    is<br>
                    Go<br>
                    program<br><br>
					<b>Creating a multidimensional array</b><br>
					syntax:<br>
					Array_name[Length1][Length2]..[LengthN]Type<br><br>
					// Go program to illustrate the<br>
					// concept of multi-dimension array<br><br>
					package main<br>
					import "fmt"<br>
					func main() {<br>
					// Creating and initializing<br>  
					// 2-dimensional array<br>
					// Using shorthand declaration<br> 
					// Here the (,) Comma is necessary<br> 
					arr:= [3][3]string{{"C#", "C", "Python"},  
									   {"Java", "Scala", "Perl"}, 
										{"C++", "Go", "HTML"},}<br> 
					// Accessing the values of the<br>
					// array Using for loop<br>
					fmt.Println("Elements of Array 1")<br> 
					for x:= 0; x < 3; x++{<br>
					for y:= 0; y < 3; y++{<br>
					fmt.Println(arr[x][y])<br>
					}<br>
					}<br>
					// Creating a 2-dimensional<br>
					// array using var keyword<br>
					// and initializing a multi<br>
					// -dimensional array using index<br>
					var arr1 [2][2] int<br>
					arr1[0][0] = 100<br>
					arr1[0][1] = 200<br>
					arr1[1][0] = 300<br>
					arr1[1][1] = 400<br>
					// Accessing the values of the array<br> 
					fmt.Println("Elements of array 2")<br>
					for p:= 0; p<2; p++{<br>
					for q:= 0; q<2; q++{<br>
					fmt.Println(arr1[p][q])<br>
					}<br>
					}<br>
					}<br><br>
					In multi-dimension array, if a cell is not initialized with some value by the user, then it will initialize with zero by the compiler automatically.