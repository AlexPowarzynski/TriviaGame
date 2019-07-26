$(document).ready(function () {
    var quiz = $(".quiz");

    var questions = [
        {
            question: "Which Goalie leads the Devils in Career Wins?",
            answers: ["Keith Kinkaid", "Martin Brodeur", "Chico Resch", "Sean Burke"],
            rightanswer: "Martin Brodeur"
        },
        {
            question: "Who won the Hart Trophy in 2017/2018?",
            answers: ["Taylor Hall", "Jesper Bratt", "Will Butcher", "Kyle Palmieri"],
            rightanswer: "Taylor Hall"
        },
        {
            question: "Who scored the series winning goal vs New York in the 2012 playoffs?",
            answers: ["Zach Parise", "Ilya Kovalchuk", "Adam Henrique", "Petr Sykora"],
            rightanswer: "Adam Henrique"
        },
        {
            question: "What was the Devils previous arena in New Jersey?",
            answers: ["Prudential Center", "Continental Airlines Arena", "Floyd Hall Arena", "Mennan Arena"],
            rightanswer: "Continental Airlines Arena"
        },
        {
            question: "What legendary Devil saw the number 26 retired in their honor?",
            answers: ["Patrik Elias", "Brian Rolston", "Joe Cirella", "Jason Smith"],
            rightanswer: "Patrik Elias"
        },
        {
            question: "Which long time Devils player provides color commentary on MSG+?",
            answers: ["Stephane Richer", "Bruce Driver", "Ken Daneyko", "John Maclean"],
            rightanswer: "Ken Daneyko"
        },
        {
            question: "Who did the Devils play in the first regular season game at Prudential Center?",
            answers: ["Toronto Maple Leafs", "New York Rangers", "Ottawa Senators", "Montreal Canadiens"],
            rightanswer: "Ottawa Senators"
        },
        {
            question: "Who is the only player to Captain the Devils to a Stanley Cup?",
            answers: ["Scott Stevens", "Scott Niedermayer", "John Madden", "Aaron Broten"],
            rightanswer: "Scott Stevens"
        },
        {
            question: "Which Devils rival plays at Madison Square Garden?",
            answers: ["Philadelphia Flyers", "New York Islanders", "Buffalo Sabres", "New York Rangers"],
            rightanswer: "New York Rangers"
        },
        {
            question: "Who was the Devils first Captain in New Jersey?",
            answers: ["Steve Tambellini", "Don Lever", "Tapio Levo", "Yvon Vautour"],
            rightanswer: "Don Lever"
        }
    ]


    var game = {
        timeleft: 120,
        correct: 0,
        incorrect: 0,
    };

    $("#startButton").on("click", function(){
        $("#startButton").hide();
        

    })

})

