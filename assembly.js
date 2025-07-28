let marks = 0;
function chk() {
    if (document.getElementById("intel").checked) {
        marks += 2;
        document.getElementById("Q1").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q1").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("ALU").checked) {
        marks += 2;
        document.getElementById("Q2").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q2").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("clock").checked) {
        marks += 2;
        document.getElementById("Q3").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q3").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("A").checked) {
        marks += 2;
        document.getElementById("Q4").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q4").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("oper").checked) {
        marks += 2;
        document.getElementById("Q5").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q5").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("71").checked) {
        marks += 2;
        document.getElementById("Q6").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q6").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("2mhz").checked) {
        marks += 2;
        document.getElementById("Q7").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q7").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("w3").checked) {
        marks += 2;
        document.getElementById("Q8").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q8").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("xb").checked) {
        marks += 2;
        document.getElementById("Q9").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q9").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("four").checked) {
        marks += 2;
        document.getElementById("Q10").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q10").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("move").checked) {
        marks += 2;
        document.getElementById("Q11").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q11").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("lda").checked) {
        marks += 2;
        document.getElementById("Q12").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q12").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("four13").checked) {
        marks += 2;
        document.getElementById("Q13").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q13").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("construct1").checked) {
        marks += 2;
        document.getElementById("Q14").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q14").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("one15").checked) {
        marks += 2;
        document.getElementById("Q15").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q15").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    
    document.getElementById("res").innerHTML = marks + " marks";
    document.getElementById("result").style.display = "block";
    let allAnswers = document.getElementsByClassName("answer");
    for (let i=0; i < allAnswers.length; i++){
        allAnswers[i].style.display = "block";
    }

    localStorage.setItem("marks_ass", marks);
    sendMarks();

    console.log("Script Loaded!")
}

function sendMarks(){
    const name = localStorage.getItem("name");
    const subject = "Assembly";
    const marks = parseInt(localStorage.getItem("marks_ass"));
    fetch("https://python-wwwi.onrender.com/sendassemblymarks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, subject, marks})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.error("Error:", err))
}