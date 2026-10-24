
let resultForm = document.getElementById("resultForm");
let resultTable = document.getElementById("resultTable");
let emptyMessage = document.getElementById("emptyMessage");


resultForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();

    let score1 = document.getElementById("subject1").value;
    let score2 = document.getElementById("subject2").value;
    let score3 = document.getElementById("subject3").value;
    let score4 = document.getElementById("subject4").value;
    let score5 = document.getElementById("subject5").value;

    let scores = [score1, score2, score3, score4, score5];

    let valid = true;

    document.getElementById("nameError").textContent = "";

    for (let i = 1; i <= 5; i++) {
        document.getElementById("subject" + i + "Error").textContent = "";
    }

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter the student's name.";

        valid = false;
    }

    // Check that every score is between 0 and 100
    for (let i = 0; i < scores.length; i++) {

        if (scores[i] === "" || Number(scores[i]) < 0 || Number(scores[i]) > 100) {

            document.getElementById("subject" + (i + 1) + "Error").textContent =
                "Enter a score between 0 and 100.";

            valid = false;
        }
    }

    if (valid === true) {

        scores = scores.map(Number);

        calculateResult(name, scores);

        resultForm.reset();
    }

});


function calculateResult(name, scores) {

    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total = total + scores[i];
    }

    let average = total / scores.length;

    let grade;

    if (average >= 70) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else if (average >= 45) {
        grade = "D";
    } else if (average >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    resultTable.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${scores[0]}</td>
            <td>${scores[1]}</td>
            <td>${scores[2]}</td>
            <td>${scores[3]}</td>
            <td>${scores[4]}</td>
            <td>${total}</td>
            <td>${average.toFixed(2)}</td>
            <td>${grade}</td>
        </tr>
    `;

    emptyMessage.style.display = "none";

}
