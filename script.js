let currentQuestion = 0;

let questions = [
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answers1: "Berlin",
    answers2: "London",
    answers3: "Paris",
    answers4: "Madrid",
    rightAnswer: 3,
  },
  {
    question: "Was ist der größte Planet in unserem Sonnensystem?",
    answers1: "Erde",
    answers2: "Jupiter",
    answers3: "Mars",
    answers4: "Venus",
    rightAnswer: 2,
  },
  {
    question: "Wer schrieb 'Romeo und Julia'?",
    answers1: "Charles Dickens",
    answers2: "William Shakespeare",
    answers3: "Mark Twain",
    answers4: "Jane Austen",
    rightAnswer: 2,
  },
  {
    question: "Was ist das chemische Symbol für Wasser?",
    answers1: "O2",
    answers2: "H2O",
    answers3: "CO2",
    answers4: "NaCl",
    rightAnswer: 2,
  },
  {
    question: "Auf welchem Kontinent liegt die Sahara?",
    answers1: "Asien",
    answers2: "Australien",
    answers3: "Afrika",
    answers4: "Südamerika",
    rightAnswer: 3,
  },
  {
    question: "Wie viele Tage hat ein Schaltjahr?",
    answers1: "365",
    answers2: "366",
    answers3: "364",
    answers4: "367",
    rightAnswer: 2,
  },
  {
    question: "Wie hoch ist der Siedepunkt von Wasser auf Meereshöhe?",
    answers1: "90°C",
    answers2: "80°C",
    answers3: "100°C",
    answers4: "120°C",
    rightAnswer: 3,
  },
  {
    question: "Welches Tier wird als König des Dschungels bezeichnet?",
    answers1: "Tiger",
    answers2: "Elefant",
    answers3: "Löwe",
    answers4: "Bär",
    rightAnswer: 3,
  },
];

function init() {
  document.getElementById("all_questions").innerHTML = questions.length;
  showQuestion();
  document.getElementById("amount_of_questions").innerHTML = questions.length;
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer1").innerHTML = question["answers1"];
  document.getElementById("answer2").innerHTML = question["answers2"];
  document.getElementById("answer3").innerHTML = question["answers3"];
  document.getElementById("answer4").innerHTML = question["answers4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1); // Letzte Ziffer der ID extrahieren z.B "answer2" -> "2"
  let rightId = `answer${question["rightAnswer"]}`; // Richtige Antwort ID rekonstruieren, z.B. "answer3" für rightAnswer = 3


  if (selectedQuestionNumber == question["rightAnswer"]) {  // == statt ===, da selectedQuestionNumber ein String ist und question["rightAnswer"] eine Zahl
    document.getElementById(selection).classList.add("bg-success");
  } else {
    document.getElementById(selection).classList.add("bg-danger");
    // Richtige Antwort ID rekonstruieren und blinken lassen
    document.getElementById(rightId).classList.add("blink_green");// parentNode (wurde wieder entfernt) (Elternelement), da die Hintergrundfarbe auf dem übergeordneten Element (z.B. einem div) angewendet wird, nicht direkt auf dem Button (card quiz_answer)
  };

document.getElementById("next-button").disabled = false; // Nächster Button aktivieren

}



function nextQuestion() {
    document.getElementById("question-Number").innerHTML = currentQuestion + 2; // +1 für die nächste Frage, +1 da currentQuestion bei 0 beginnt
    if (currentQuestion < questions.length - 1) { // Ohne -1 würde er nach Frage 8 noch eine Frage 9 laden wollen – die existiert nicht → Fehler.
        currentQuestion++;
        
        // document.getElementById("answer1").classList.remove("bg-success", "bg-danger", "blink_green");
        // document.getElementById("answer2").classList.remove("bg-success", "bg-danger", "blink_green");
        // document.getElementById("answer3").classList.remove("bg-success", "bg-danger", "blink_green");
        // document.getElementById("answer4").classList.remove("bg-success", "bg-danger", "blink_green");

        // so spricht man mehrere Elemente an, ohne sie einzeln aufzählen zu müssen wie oben siehe funktion resetButtons()
        resetButtons();
       
         showQuestion();
 
    } else {
        // Letzte Frage erreicht
       document.getElementById('end-screen').style.display = ''; // Endscreen anzeigen
       document.getElementById('question-body').style.display = 'none'; // Quiz ausblenden
       document.getElementById('order').style.display = 'none'; // Order ausblenden
       updateCorrectAnswers() ;
    }

    document.getElementById("next-button").disabled = true;

   
};

function resetButtons() {
         document.querySelectorAll("#answer1, #answer2, #answer3, #answer4").forEach((element) => {
            element.classList.remove("bg-success", "bg-danger", "blink_green");
        });
    
};

function restartQuiz() {
    currentQuestion = 0;
    document.getElementById("question-Number").innerHTML = currentQuestion + 1;
    document.getElementById("next-button").disabled = true;
    document.getElementById('end-screen').style.display = 'none'; // Endscreen ausblenden
    document.getElementById('question-body').style.display = 'block'; // Quiz anzeigen
    document.getElementById('order').style.display = '';
    resetButtons();
    showQuestion();
};


function updateCorrectAnswers() {
    let correctAnswers = 0;
    for (let i = 0; i < questions.length; i++) {
        let rightId = `answer${questions[i]["rightAnswer"]}`;
        if (document.getElementById(rightId).classList.contains("bg-success")) {
            correctAnswers++;
        }
    }
    document.getElementById("correct-answers").innerHTML = correctAnswers;
};