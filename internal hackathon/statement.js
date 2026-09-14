function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user != "" && pass != "") {

        document.getElementById("login").style.display = "none";
        document.getElementById("app").style.display = "block";

        document.getElementById("profileName").innerText = user;

        showPage("home");

    } else {
        document.getElementById("error").innerText =
            "Please enter username and password";
    }
}


function showPage(page) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(p) {
        p.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");
}


function answer() {

    let topic = document.getElementById("topic").value;

    if (topic == "") {
        document.getElementById("answer").innerHTML =
            "Please enter a topic.";
        return;
    }

    document.getElementById("answer").innerHTML =
        "<h3>AI Explanation</h3>" +
        "<p><b>" + topic + "</b> is explained in simple terms.</p>" +
        "<p>AI provides important concepts, examples and key points for easy understanding.</p>";
}


function generateNotes() {

    document.getElementById("notesResult").innerHTML =
        "<h3>Short Notes</h3>" +
        "<ul>" +
        "<li>Important concepts</li>" +
        "<li>Key definitions</li>" +
        "<li>Main points</li>" +
        "<li>Quick revision summary</li>" +
        "</ul>";
}


function checkQuiz() {

    let answer = document.querySelector(
        'input[name="q"]:checked'
    );

    if (!answer) {
        document.getElementById("quizResult").innerText =
            "Please select an answer.";
        return;
    }

    if (answer.value == "3NF") {
        document.getElementById("quizResult").innerText =
            "Correct! Score: 1/1 🎉";
    } else {
        document.getElementById("quizResult").innerText =
            "Try again. Score: 0/1";
    }
}