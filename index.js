function enter_name(){
    let user_name = prompt("Please enter your name : ");
    
    if (!user_name) {
        alert("Please Enter your name as it's necessary for certification");
        return;
    }

    // Save in localStorage
    localStorage.setItem("name", user_name);

    // Send to backend
    fetch("https://python-wwwi.onrender.com/sendname", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: user_name})
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });

    alert("Welcome, " + user_name);
    return user_name;
}

