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
        question:  'What will be the output of the following code?\npackage main\nimport("fmt")\nfunc main(){\nvar a,b,c int\na=8\nb=7\nc=9\nif(a>b){\nif(c>b){\nfmt.Print("Smallest number is ",b)\n}\n}\n}',  ///// Write the question inside double quotes
        answers: {
          a: "Smallest number is 8",                  ///// Write the option 1 inside double quotes
          b: "Smallest number is 7",                 ///// Write the option 2 inside double quotes
          c: "Smallest number is 9",                  ///// Write the option 3 inside double quotes
          d: "None of the above"                  ///// Write the option 4 inside double quotes
        },
        correctAnswer: "b"                ///// Write the correct option inside double quotes
      },
  
      {
       question: 'What will be the output of the following code?\npackage main\nimport("fmt")\nfunc main(){\nvar a,b,c int\na=8\nb=7\nc=9\nif(c>a){\nif(c>b){\nfmt.Print("Greatest number is ",c)\n}\n}\n}',  ///// Write the question inside double quotes
        answers: {
          a: "Greatest number is 8",                  ///// Write the option 1 inside double quotes
          b: "Greatest number is 7",                   ///// Write the option 2 inside double quotes
          c: "Greatest number is 9",                   ///// Write the option 3 inside double quotes
          d: "None of the above"                 ///// Write the option 4 inside double quotes
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
      },
      {
        question: '.What will be the output of the following code?\npackage main \nimport ("fmt")\nfunc main() { \nvar a int\na=10\nif(a%5==0){\nfmt.Print("Multiple of 5")\n} else{\nfmt.Print("Not a multiple of 5")\n}\n}',  ///// Write the question inside double quotes
         answers: {
           a: "Not a multiple of 5",                  ///// Write the option 1 inside double quotes
           b: "Multiple of 5",                  ///// Write the option 2 inside double quotes
           c: "Compilation failed",                  ///// Write the option 3 inside double quotes
           d: "None of the above"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "b"                ///// Write the correct option inside double quotes
       },
       {
        question: 'What will be the output of the following code?\npackage main\nimport("fmt")\nfunc main(){\nvar i,j int\ni=0\nj=0\nif(i>=j && j>=i){\nfmt.Println("Hello")\n} else{\nfmt.Println("Bye")\n}\n}',  ///// Write the question inside double quotes
         answers: {
           a: "Hello",                  ///// Write the option 1 inside double quotes
           b: "Bye",                  ///// Write the option 2 inside double quotes
           c: "Hello Bye",                  ///// Write the option 3 inside double quotes
           d: "None of the Above"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "a"                ///// Write the correct option inside double quotes
       },
       {
        question: 'What will be the output of the following code?\npackage main\nimport("fmt")\nfunc main(){\nvar n1,n2 int\nn1=10\nn2=5\nif((n1 > n2) || (n2 > n1)){\nfmt.Print("0")\n} if((n1 > n2) && (n2 > n1)){\nfmt.Print("1")\n}\n}',  ///// Write the question inside double quotes
         answers: {
           a: "0",                  ///// Write the option 1 inside double quotes
           b: "Compilation failed",                  ///// Write the option 2 inside double quotes
           c: "1",                  ///// Write the option 3 inside double quotes
           d: "0 1"                   ///// Write the option 4 inside double quotes
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

