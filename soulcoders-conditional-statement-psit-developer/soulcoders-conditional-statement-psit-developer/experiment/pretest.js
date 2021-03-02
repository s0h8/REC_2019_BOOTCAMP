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
        question: "A switch statement is used to-",  ///// Write the question inside double quotes
        answers: {
          a: "To use switching variable",                  ///// Write the option 1 inside double quotes
          b: "Switch between function in a program",                 ///// Write the option 2 inside double quotes
          c: "Switch from one variable to another",                  ///// Write the option 3 inside double quotes
          d: "To choose from multiple possibilities which may arise due to different values of a single variable"                 ///// Write the option 4 inside double quotes
        },
        correctAnswer: "d"                ///// Write the correct option inside double quotes
      },
  
      {
       question: "Which one of the following statement is correct?",  ///// Write the question inside double quotes
        answers: {
          a: "else if is compulsory to use with if statement",                  ///// Write the option 1 inside double quotes
          b: ".else is compulsory to use with if statement",                  ///// Write the option 2 inside double quotes
          c: "else or else if is optional with if statement",                  ///// Write the option 1 inside double quotes
          d: "None of the above"                  ///// Write the option 2 inside double quotes
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
      },
      {
        question: "Conditional statements can be used within another conditional statements that are called -",  ///// Write the question inside double quotes
         answers: {
           a: "Nesting Conditional statements",                  ///// Write the option 1 inside double quotes
           b: "Compound statements",                  ///// Write the option 2 inside double quotes
           c: "Switch Statements",                  ///// Write the option 3 inside double quotes
           d: "None of the Above"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "a"                ///// Write the correct option inside double quotes
       },
       {
        question: "Can an else statement exist without an if statement preceding it?",  ///// Write the question inside double quotes
         answers: {
           a: "Yes, else statement can exist without an if statement",                  ///// Write the option 1 inside double quotes
           b: ".No, an else statement can only exist with an if statement",                  ///// Write the option 2 inside double quotes
           c: "Else cannot exist without an if statement, but an else-if statement can exist without a preceding if statement",                  ///// Write the option 3 inside double quotes
           d: "Yes, an else statement can exist without an if statement if its the first line inside the main ()"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "b"                ///// Write the correct option inside double quotes
       },
       {
        question: "Is nested switch statements possible?",  ///// Write the question inside double quotes
         answers: {
           a: "Yes",                  ///// Write the option 1 inside double quotes
           b: "No",                  ///// Write the option 2 inside double quotes
           c: "Can't say",                  ///// Write the option 3 inside double quotes
           d: "None of the above"                   ///// Write the option 4 inside double quotes
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