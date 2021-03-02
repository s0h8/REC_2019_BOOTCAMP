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
      question: "Which one is not a Binary Operator?",  ///// Write the question inside double quotes
      answers: {
        a: "Increment",                  ///// Write the option 1 inside double quotes
        b: "Division",                 ///// Write the option 2 inside double quotes
        c: "Modulus",                  ///// Write the option 3 inside double quotes
        d: "Addition"                 ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "If A means ‘plus’, B means ‘minus’, C means ‘divided by’ and D means ‘multiplied by’, then 18 A 12 C 6 D 2 B 5 = ?",  ///// Write the question inside double quotes
      answers: {
        a: "15",                  ///// Write the option 1 inside double quotes
        b: "25",                  ///// Write the option 2 inside double quotes
        c: "27",                  ///// Write the option 1 inside double quotes
        d: "None of the above"                  ///// Write the option 2 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
    {
      question: 'Sumit collects 1,082 cans of food. He gives a certain number of cans to the first local charity he finds. He now has 602 cans of food. How many cans of food did he give to the first local charity?',  ///// Write the question inside double quotes
       answers: {
         a: "430",                  ///// Write the option 1 inside double quotes
         b: "480",                  ///// Write the option 2 inside double quotes
         c: "682",                  ///// Write the option 3 inside double quotes
         d: "1684"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     },
     {
      question: 'Vaibhav ascends to the top of a mountain over the course of two days. On Friday, he ascends 482 feet. He ascends another 362 feet on Saturday. How many feet did he ascend in all?',  ///// Write the question inside double quotes
       answers: {
         a: "531",                  ///// Write the option 1 inside double quotes
         b: "836",                  ///// Write the option 2 inside double quotes
         c: "1000",                  ///// Write the option 3 inside double quotes
         d: "844"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "d"                ///// Write the correct option inside double quotes
     },
     {
      question: 'Mantri ran 12 laps every day for 8 days. How many laps did He run in all?',  ///// Write the question inside double quotes
       answers: {
         a: "108",                  ///// Write the option 1 inside double quotes
         b: "96",                  ///// Write the option 2 inside double quotes
         c: "84",                  ///// Write the option 3 inside double quotes
         d: "72"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
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