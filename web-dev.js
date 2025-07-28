let marks = 0;
function chk() {
    if (document.getElementById("unique").checked) {
        marks += 2;
        document.getElementById("Q1").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q1").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("stack").checked) {
        marks += 2;
        document.getElementById("Q2").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q2").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("media").checked) {
        marks += 2;
        document.getElementById("Q3").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q3").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("rem").checked) {
        marks += 2;
        document.getElementById("Q4").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q4").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("tag3").checked) {
        marks += 2;
        document.getElementById("Q5").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q5").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("child").checked) {
        marks += 2;
        document.getElementById("Q6").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q6").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("diff").checked) {
        marks += 2;
        document.getElementById("Q7").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q7").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("globe").checked) {
        marks += 2;
        document.getElementById("Q8").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q8").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("two").checked) {
        marks += 2;
        document.getElementById("Q9").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q9").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("close").checked) {
        marks += 2;
        document.getElementById("Q10").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q10").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("get").checked) {
        marks += 2;
        document.getElementById("Q11").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q11").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("NF").checked) {
        marks += 2;
        document.getElementById("Q12").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q12").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("fet").checked) {
        marks += 2;
        document.getElementById("Q13").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q13").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("cross").checked) {
        marks += 2;
        document.getElementById("Q14").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q14").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("less").checked) {
        marks += 2;
        document.getElementById("Q15").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q15").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    
    document.getElementById("res").innerHTML = marks + " marks";
    document.getElementById("result").style.display = "block";
    let allAnswers = document.getElementsByClassName("answer");
    for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].style.display = "block";
}
localStorage.setItem("marks_wd", marks)
sendMarks();
console.log("Script Loaded");
}

function sendMarks() {
    const name = localStorage.getItem("name");
    const subject = "Web - Dev";
    const marks = parseInt(localStorage.getItem("marks_wd"));
    fetch("https://python-wwwi.onrender.com/sendWebdevmarks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, subject, marks})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));
}