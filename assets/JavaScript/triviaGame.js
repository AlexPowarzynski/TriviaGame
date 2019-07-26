$(document).ready(function () {
    var quiz = $(".quiz");

    var questions = [
        {
            question: "Which Goalie leads the Devils in Career Wins?",
            choices: ["Keith Kinkaid", "Martin Brodeur", "Chico Resch", "Sean Burke"],
            correctAnswer: "Martin Brodeur"
        },
        {
            question: "Who won the Hart Trophy in 2017/2018?",
            choices: ["Taylor Hall", "Jesper Bratt", "Will Butcher", "Kyle Palmieri"],
            correctAnswer: "Taylor Hall"
        },
        {
            question: "Who scored the series winning goal vs New York in the 2012 playoffs?",
            choices: ["Zach Parise", "Ilya Kovalchuk", "Adam Henrique", "Petr Sykora"],
            correctAnswer: "Adam Henrique"
        },
        {
            question: "What was the Devils previous arena in New Jersey?",
            choices: ["Prudential Center", "Continental Airlines Arena", "Floyd Hall Arena", "Mennan Arena"],
            correctAnswer: "Continental Airlines Arena"
        },
        {
            question: "What legendary Devil saw the number 26 retired in their honor?",
            choices: ["Patrik Elias", "Brian Rolston", "Joe Cirella", "Jason Smith"],
            correctAnswer: "Patrik Elias"
        },
        {
            question: "Which long time Devils player provides color commentary on MSG+?",
            choices: ["Stephane Richer", "Bruce Driver", "Ken Daneyko", "John Maclean"],
            correctAnswer: "Ken Daneyko"
        },
        {
            question: "Who did the Devils play in the first regular season game at Prudential Center?",
            choices: ["Toronto Maple Leafs", "New York Rangers", "Ottawa Senators", "Montreal Canadiens"],
            correctAnswer: "Ottawa Senators"
        },
        {
            question: "Who is the only player to Captain the Devils to a Stanley Cup?",
            choices: ["Scott Stevens", "Scott Niedermayer", "John Madden", "Aaron Broten"],
            correctAnswer: "Scott Stevens"
        },
        {
            question: "Which Devils rival plays at Madison Square Garden?",
            choices: ["Philadelphia Flyers", "New York Islanders", "Buffalo Sabres", "New York Rangers"],
            correctAnswer: "New York Rangers"
        },
        {
            question: "Who was the Devils first Captain in New Jersey?",
            choices: ["Steve Tambellini", "Don Lever", "Tapio Levo", "Yvon Vautour"],
            correctAnswer: "Don Lever"
        }
    ]

    let intervalId;

    let timeleft = 120;
    let correct = 0;
    let incorrect = 0;


    function run() {
        intervalId = setInterval(decrement, 1000);
        $(".quiz").prepend("<h2>Time Left: <span id=timeLeft>120</span></h2>");
        $("#startButton").hide();
        for (var i = 0; i < questions.length; i++) {
            quiz.append("<h2>" + questions[i].question + "<h2>");
            for (var t = 0; t < questions[i].choices.length; t++) {
                quiz.append("<input type= 'radio' name='question #'" + i + "value='" + questions[i].choices[t] + "'>" + questions[i].choices[t]);
            }
        }
        quiz.append("<button id='done'>Done</button>");
    };

    function showResults() {
        let userGuess = $("input[type=radio]:checked");

        for (var i = 0; i < userGuess.length; i++) {
            if (userGuess[i].val() === questions[i].correctAnswer) {
                correct++;
            } else {
                incorrect++;
            }
            
        }
    }
    function results(){
        
    }

    function decrement() {
        timeleft--;
        $("#timeLeft").html(timeleft);
        if (timeleft === 0) {
            showResults();
        }
    }
    $("#startButton").on("click", function () {
        run();
    })
    $("#done").on("click", function () {
        showResults();
    })





})

