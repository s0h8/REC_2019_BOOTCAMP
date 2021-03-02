/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          //answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
   
  
  /////////////////////////////////////////////////////////////////////////////
  
  /////////////////////// Do not modify the above code ////////////////////////
  
  /////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
  
  /////////////// Write the MCQ below in the exactly same described format ///////////////
  
  
    const myQuestions = [
      {
        question:  "What is the result of relational expression?",  ///// Write the question inside double quotes
        answers: {
          a: "True or False",                  ///// Write the option 1 inside double quotes
          b: "0 if an expression is false and any positive number if an expression is true",                 ///// Write the option 2 inside double quotes
          c: "0 or 1",                  ///// Write the option 3 inside double quotes
          d: "None of the mentioned"                  ///// Write the option 4 inside double quotes
        },
        correctAnswer: "a"                ///// Write the correct option inside double quotes
      },
  
      {
       question: 'What will be the output of the following code?<br>package main<br>import("fmt")<br>func main(){<br>var a,b,c,d int<br>a=4<br>b=5<br>c=6<br>d=8<br>if(((a * b / c) + d) >= ((b * c + d ) / a)){<br>fmt.Print("0")<br>}else{<br>fmt.Print("1")<br>}<br>}',  ///// Write the question inside double quotes
        answers: {
          a: "0",                  ///// Write the option 1 inside double quotes
          b: "Compilation failed",                   ///// Write the option 2 inside double quotes
          c: "1",                   ///// Write the option 3 inside double quotes
          d: "None of the above"                 ///// Write the option 4 inside double quotes
        },
        correctAnswer: "a"                ///// Write the correct option inside double quotes
      },
      {
        question: 'What will be the output of the following code?<br>package main<br>import ("fmt")<br>func main() { <br>var a,b,c,d int<br>a=10<br>b=5<br>c=5<br>d=(b+c==a)<br>fmt.Print(d)<br>}',  ///// Write the question inside double quotes
         answers: {
           a: "0",                  ///// Write the option 1 inside double quotes
           b: "1",                  ///// Write the option 2 inside double quotes
           c: "10",                  ///// Write the option 3 inside double quotes
           d: "Compilation failed"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "d"                ///// Write the correct option inside double quotes
       },
       {
        question: 'What will be the output of the following code?<br>package main<br>import ("fmt")<br>func main() { <br>var i,j int<br>i=0<br>j=0<br>if(i>=j && j>=i){<br>fmt.Println("Hello")<br>}<br>fmt.Print(i," ",j)<br>}',  ///// Write the question inside double quotes
         answers: {
           a: "Hello 0 0",                  ///// Write the option 1 inside double quotes
           b: "Hello<br>0 0",                  ///// Write the option 2 inside double quotes
           c: "Hello<br>0<br>0",                  ///// Write the option 3 inside double quotes
           d: "None of the Above"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "b"                ///// Write the correct option inside double quotes
       },
       {
        question: 'What will be the output of the following code?<br>package main<br>import ("fmt")<br>func main() { <br>var num1,num2 int<br>num1=10<br>num2=5<br>if((num1 > num2) || (num2 > num1)){<br>fmt.Print("0")<br>}<br>}',  ///// Write the question inside double quotes
         answers: {
           a: "0",                  ///// Write the option 1 inside double quotes
           b: "Compilation failed",                  ///// Write the option 2 inside double quotes
           c: "1",                  ///// Write the option 3 inside double quotes
           d: "True"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "a"                ///// Write the correct option inside double quotes
       },                                ///// To add more questions, copy the section below 
                                                            ///// this line
  
  
      /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
          till closing curly braces comma ( }, )
  
          and paste it below the curly braces comma ( below correct answer }, ) of above 
          question
  
      Copy below section
  
      {
        question: "This is question n?",
        answers: {
          a: "Option 1",
          b: "Option 2",
          c: "Option 3",
          d: "Option 4"
        },
        correctAnswer: "c"
      },
  
      Copy above section
  
      */
  
  
  
  
    ];
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////
  
  /////////////////////// Do not modify the below code ////////////////////////
  
  /////////////////////////////////////////////////////////////////////////////
  
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
  
  
  /////////////////////////////////////////////////////////////////////////////
  
  /////////////////////// Do not modify the above code ////////////////////////
  
  /////////////////////////////////////////////////////////////////////////////