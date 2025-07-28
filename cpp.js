function chk() {
    let marks = 0;
    if (document.getElementById("Dennis").checked) {
        marks += 2;
        document.getElementById("Q1").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q1").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("three").checked) {
        marks += 2;
        document.getElementById("Q2").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q2").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("three2").checked) {
        marks += 2;
        document.getElementById("Q3").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q3").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("point").checked) {
        marks += 2;
        document.getElementById("Q4").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q4").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("char").checked) {
        marks += 2;
        document.getElementById("Q5").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q5").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("std").checked) {
        marks += 2;
        document.getElementById("Q6").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q6").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("member").checked) {
        marks += 2;
        document.getElementById("Q7").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q7").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("com").checked) {
        marks += 2;
        document.getElementById("Q8").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q8").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("and").checked) {
        marks += 2;
        document.getElementById("Q9").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q9").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("ele").checked) {
        marks += 2;
        document.getElementById("Q10").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q10").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("while1").checked) {
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
    if (document.getElementById("poi").checked) {
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
    if (document.getElementById("destruct2").checked) {
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
    
    localStorage.setItem("marks_cpp", marks)
    sendMarks();
    console.log("Script Loaded");

}

function sendMarks() {
  const name = localStorage.getItem("name"); 
  const subject = "C_Cpp";
  const marks = parseInt(localStorage.getItem("marks_cpp")) || 0;
  fetch("https://python-wwwi.onrender.com/sendcppmarks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, subject, marks })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
}
