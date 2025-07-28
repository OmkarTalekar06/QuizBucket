let marks = 0;
function chk() {
    if (document.getElementById("bsf2").checked) {
        marks += 2;
        document.getElementById("Q1").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q1").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("crpf3").checked) {
        marks += 2;
        document.getElementById("Q2").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q2").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("data1").checked) {
        marks += 2;
        document.getElementById("Q3").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q3").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("cd2").checked) {
        marks += 2;
        document.getElementById("Q4").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q4").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("know3").checked) {
        marks += 2;
        document.getElementById("Q5").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q5").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("tax1").checked) {
        marks += 2;
        document.getElementById("Q6").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q6").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("tax22").checked) {
        marks += 2;
        document.getElementById("Q7").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q7").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("m1").checked) {
        marks += 2;
        document.getElementById("Q8").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q8").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("pm2").checked) {
        marks += 2;
        document.getElementById("Q9").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q9").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("upi1").checked) {
        marks += 2;
        document.getElementById("Q10").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q10").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("e2").checked) {
        marks += 2;
        document.getElementById("Q11").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q11").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("dowhile2").checked) {
        marks += 2;
        document.getElementById("Q12").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q12").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("un2").checked) {
        marks += 2;
        document.getElementById("Q13").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q13").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("destruct1").checked) {
        marks += 2;
        document.getElementById("Q14").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q14").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("dyn2").checked) {
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

    localStorage.setItem("marks_ff", marks)
    sendMarks();

    console.log("script Loaded");
}

function sendMarks(){
    const name = localStorage.getItem("name");
    const subject = "Full - Form";
    const marks = parseInt(localStorage.getItem("marks_ff"));
    fetch("https://python-wwwi.onrender.com/sendffmarks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, subject, marks})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.error("Error:", err))
}