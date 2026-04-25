let currentQuestion = 0;
let correctAnswers = 0;
let Audio_success = new Audio("./sound/right_answer.mp3");
let Audio_fail = new Audio("./sound/wrong_answer.mp3");
let Audio_end = new Audio("./sound/finish.mp3");

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
  {
    question: "Wer entwickelte die Relativitätstheorie?",
    answers1: "Isaac Newton",
    answers2: "Albert Einstein",
    answers3: "Nikola Tesla",
    answers4: "Galileo Galilei",
    rightAnswer: 2,
  },
  {
    question: "Welches Element hat die Ordnungszahl 1?",
    answers1: "Helium",
    answers2: "Sauerstoff",
    answers3: "Wasserstoff",
    answers4: "Stickstoff",
    rightAnswer: 3,
  },
  {
    question: "In welchem Jahr fiel die Berliner Mauer?",
    answers1: "1987",
    answers2: "1989",
    answers3: "1991",
    answers4: "1993",
    rightAnswer: 2,
  },
  {
    question: "Was ist die kleinste Einheit des Lebens?",
    answers1: "Atom",
    answers2: "Molekül",
    answers3: "Zelle",
    answers4: "Organ",
    rightAnswer: 3,
  },
  {
    question:
      "Welcher Planet hat die meisten Monde im Sonnensystem (Stand aktuell)?",
    answers1: "Saturn",
    answers2: "Jupiter",
    answers3: "Uranus",
    answers4: "Neptun",
    rightAnswer: 1,
  },
  {
    question: "Welche Sprache hat die meisten Muttersprachler weltweit?",
    answers1: "Englisch",
    answers2: "Spanisch",
    answers3: "Hindi",
    answers4: "Mandarin-Chinesisch",
    rightAnswer: 4,
  },
  {
    question:
      "Wie nennt man den Prozess, bei dem Pflanzen Lichtenergie in chemische Energie umwandeln?",
    answers1: "Atmung",
    answers2: "Photosynthese",
    answers3: "Verdunstung",
    answers4: "Fermentation",
    rightAnswer: 2,
  },
  {
    question: "Wer war der erste Mensch im Weltraum?",
    answers1: "Neil Armstrong",
    answers2: "Juri Gagarin",
    answers3: "Buzz Aldrin",
    answers4: "Yuri Leonov",
    rightAnswer: 2,
  },
  {
    question: "Welches ist das längste Flusssystem der Erde?",
    answers1: "Nil",
    answers2: "Amazonas",
    answers3: "Mississippi",
    answers4: "Jangtse",
    rightAnswer: 2,
  },
  {
    question: "Was beschreibt der Begriff 'Inflation' in der Wirtschaft?",
    answers1: "Steigende Arbeitslosigkeit",
    answers2: "Sinkende Preise",
    answers3: "Allgemeiner Anstieg des Preisniveaus",
    answers4: "Erhöhung der Produktion",
    rightAnswer: 3,
  },

  {
    question: "Welches Land hat die längste Küstenlinie der Welt?",
    answers1: "Australien",
    answers2: "Kanada",
    answers3: "Russland",
    answers4: "USA",
    rightAnswer: 2,
  },
  {
    question: "Wie viele Knochen hat ein erwachsener Mensch in der Regel?",
    answers1: "198",
    answers2: "206",
    answers3: "210",
    answers4: "201",
    rightAnswer: 2,
  },
  {
    question: "Welches Gas macht den größten Anteil der Erdatmosphäre aus?",
    answers1: "Sauerstoff",
    answers2: "Kohlendioxid",
    answers3: "Stickstoff",
    answers4: "Argon",
    rightAnswer: 3,
  },
  {
    question: "Wer malte die Decke der Sixtinischen Kapelle?",
    answers1: "Leonardo da Vinci",
    answers2: "Michelangelo",
    answers3: "Raffael",
    answers4: "Donatello",
    rightAnswer: 2,
  },
  {
    question: "Was ist die Quadratwurzel von 144?",
    answers1: "10",
    answers2: "11",
    answers3: "12",
    answers4: "13",
    rightAnswer: 3,
  },
  {
    question: "Welcher Ozean ist der größte der Erde?",
    answers1: "Atlantischer Ozean",
    answers2: "Indischer Ozean",
    answers3: "Arktischer Ozean",
    answers4: "Pazifischer Ozean",
    rightAnswer: 4,
  },
  {
    question: "Wie lautet die Hauptstadt von Kanada?",
    answers1: "Toronto",
    answers2: "Vancouver",
    answers3: "Ottawa",
    answers4: "Montreal",
    rightAnswer: 3,
  },
];

function init() {
  document.getElementById("all_questions").innerHTML = questions.length;
  showQuestion();
  document.getElementById("amount_of_questions").innerHTML = questions.length;
}

function showQuestion() {
  let percent = ((currentQuestion + 1) / questions.length) * 100; // Prozentualer Fortschritt berechnen
  percent = Math.round(percent) + "%"; // Prozent auf ganze Zahl runden

  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer1").innerHTML = question["answers1"];
  document.getElementById("answer2").innerHTML = question["answers2"];
  document.getElementById("answer3").innerHTML = question["answers3"];
  document.getElementById("answer4").innerHTML = question["answers4"];
  document.getElementById("progress_bar").style.width = percent; // Fortschrittsbalken aktualisieren
  document.getElementById("progress_prozent").innerHTML = percent; // Prozentzahl im Fortschrittsbalken aktualisieren
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1); // Letzte Ziffer der ID extrahieren z.B "answer2" -> "2"
  let rightId = `answer${question["rightAnswer"]}`; // Richtige Antwort ID rekonstruieren, z.B. "answer3" für rightAnswer = 3

  if (selectedQuestionNumber == question["rightAnswer"]) {
    // == statt ===, da selectedQuestionNumber ein String ist und question["rightAnswer"] eine Zahl
    document.getElementById(selection).classList.add("bg-success");
    correctAnswers++;
    Audio_success.play();
  } else {
    document.getElementById(selection).classList.add("bg-danger");
    Audio_fail.play();
    // Richtige Antwort ID rekonstruieren und blinken lassen
    document.getElementById(rightId).classList.add("blink_green"); // parentNode (wurde wieder entfernt) (Elternelement), da die Hintergrundfarbe auf dem übergeordneten Element (z.B. einem div) angewendet wird, nicht direkt auf dem Button (card quiz_answer)
  }
  document.getElementById("next-button").disabled = false; // Nächster Button aktivieren

  document.querySelectorAll(".quiz_answer").forEach((el) => {
    el.style.pointerEvents = "none";
  });
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  document.getElementById("question-Number").innerHTML = currentQuestion + 2; // +1 für die nächste Frage, +1 da currentQuestion bei 0 beginnt
  if (currentQuestion < questions.length - 1) {
    // Ohne -1 würde er nach Frage 8 noch eine Frage 9 laden wollen – die existiert nicht → Fehler.
    currentQuestion++;

    // document.getElementById("answer1").classList.remove("bg-success", "bg-danger", "blink_green");
    // document.getElementById("answer2").classList.remove("bg-success", "bg-danger", "blink_green");
    // document.getElementById("answer3").classList.remove("bg-success", "bg-danger", "blink_green");
    // document.getElementById("answer4").classList.remove("bg-success", "bg-danger", "blink_green");

    // so spricht man mehrere Elemente an, ohne sie einzeln aufzählen zu müssen wie oben siehe funktion resetButtons()
    resetButtons();
    document.querySelectorAll(".quiz_answer").forEach((el) => {
      el.style.pointerEvents = "";
    });

    showQuestion();
  } else {
    // Letzte Frage erreicht
    document.getElementById("end-screen").style.display = ""; // Endscreen anzeigen
    document.getElementById("question-body").style.display = "none"; // Quiz ausblenden
    document.getElementById("order").style.display = "none"; // Order ausblenden
    Audio_end.play();
    updateCorrectAnswers();
  }

  document.getElementById("next-button").disabled = true;
}

function resetButtons() {
  document
    .querySelectorAll("#answer1, #answer2, #answer3, #answer4")
    .forEach((element) => {
      element.classList.remove("bg-success", "bg-danger", "blink_green");
    });
}

function restartQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  document.getElementById("question-Number").innerHTML = currentQuestion + 1;
  document.getElementById("next-button").disabled = true;
  document.getElementById("end-screen").style.display = "none"; // Endscreen ausblenden
  document.getElementById("question-body").style.display = "block"; // Quiz anzeigen
  document.getElementById("order").style.display = "";
  document.querySelectorAll(".quiz_answer").forEach((el) => {
    el.style.pointerEvents = "";
  });
  resetButtons();
  showQuestion();
}

function updateCorrectAnswers() {
  document.getElementById("correct-answers").innerHTML = correctAnswers;
}
