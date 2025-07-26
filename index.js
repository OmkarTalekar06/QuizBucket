function get_name1() {
    let user_name = prompt("Please enter your name : ");
    localStorage.setItem("name", user_name)
    if(user_name){
        fetch("https://python-wwwi.onrender.com/sendname", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name: user_name})
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        });
    }
}
