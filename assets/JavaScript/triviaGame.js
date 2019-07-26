$(document).ready(function () {
    // To target the whole quiz area
    var quiz = $(".quiz");
// List of questions with answers
    var questions = [
        {
            question: "What is Patrick Star's father called?",
            choices: ["Hector", "Hart", "Herb", "Harry"],
            correctAnswer: "Herb"
        },
        {
            question: "Who is Mermaid Man's faithful sidekick?",
            choices: ["Barnacle Boy", "Sir Sand", "Mermaid Boy", "Wave Wonder"],
            correctAnswer: "Barnacle Boy"
        },
        {
            question: "What was the name of the Krusty Krab before Mr. Krabs bought it?",
            choices: ["Kusty Rab", "Krusty Rab", "Rusty Krab", "Krabby Rust"],
            correctAnswer: "Rusty Krab"
        },
        {
            question: "Where does SpongeBob live?",
            choices: ["A pineapple under the sea", "Fortworth, TX", "A grapple under the sea", "Hogwarts"],
            correctAnswer: "A pineapple under the sea"
        },
        {
            question: "Who is SpongeBob's best friend?",
            choices: ["Patrik", "Ratrick", "Obama", "Patrick"],
            correctAnswer: "Patrick"
        },

    ]

    let intervalId;

// Shows questions/Resets values/Starts timer/Hides
    function run() {
        correct = 0;
        incorrect = 0;
        timeleft = 60;
        intervalId = setInterval(decrement, 1000);
        $(".quiz").prepend("<h2>Time Left: <span id=timeLeft>60</span></h2>");
        $("#startButton").hide();
        for (var i = 0; i < questions.length; i++) {
            quiz.append("<h3>" + questions[i].question + "<h3>");
            for (var t = 0; t < questions[i].choices.length; t++) {
                quiz.append("<div><input type= 'radio' " + "name ='#" + i + "' " + "value='" + questions[i].choices[t] + "'>" + questions[i].choices[t] + "</div>");
            }
        }
        quiz.append("<button class = 'btn btn-danger btn-lg' id='done' >Done</button>");
        $("#reset").hide();
        $("#cA").hide();
        $("#iA").hide();
        $("#tag").hide();
    };

// To check the value of user's guess with the correct answer/Shows results
    function showResults() {
        let userGuess = $("input[type='radio']:checked");

        for (var i = 0; i < userGuess.length; i++) {
            if ($(userGuess[i]).val() === questions[i].correctAnswer) {
                correct++;
            } else {
                incorrect++;
            }

        };
        clearInterval(intervalId);
        quiz.empty();
        quiz.append("<h2 id='tag'>Results</h2>");
        quiz.append("<h4 id='cA'>Correct Answers: " + correct);
        quiz.append("<h4 id='iA'>Incorrect Answers: " + incorrect);
        quiz.append("<button class = 'btn btn-secondary btn-lg' id='reset'>Try Again?</button>")

    }
// Timer
    function decrement() {
        timeleft--;
        $("#timeLeft").text(timeleft);
        if (timeleft === 0) {
            clearInterval(intervalId);
            showResults();
        };
    }
    // Functionality of Buttons
    $("#startButton").on("click", function () {
        run();
    })

    $(quiz).on("click", "#done", function () {
        showResults();
    })
    $(quiz).on("click", "#reset", function () {
        clearInterval(intervalId);

        run();
    })




})

