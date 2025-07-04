let marks = 0;
function chk() {
    if (document.getElementById("Guido").checked) {
        marks += 2;
        document.getElementById("Q1").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q1").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("two").checked) {
        marks += 2;
        document.getElementById("Q2").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q2").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("one2").checked) {
        marks += 2;
        document.getElementById("Q3").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q3").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("string").checked) {
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
    if (document.getElementById("#").checked) {
        marks += 2;
        document.getElementById("Q6").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q6").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("class").checked) {
        marks += 2;
        document.getElementById("Q7").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q7").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("c1").checked) {
        marks += 2;
        document.getElementById("Q8").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q8").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("**").checked) {
        marks += 2;
        document.getElementById("Q9").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q9").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    if (document.getElementById("err1").checked) {
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
    if (document.getElementById("e").checked) {
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
    if (document.getElementById("dyn2").checked) {
        marks += 2;
        document.getElementById("Q15").style.backgroundColor ="rgba(26, 242, 26, 0.5)";
    }
    else{
        document.getElementById("Q15").style.backgroundColor = " rgba(223, 27, 27, 0.5)";
    }
    
    document.getElementById("res").innerHTML = marks + " marks";
    let allAnswers = document.getElementsByClassName("answer");
    for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].style.display = "block";
        
    }
}