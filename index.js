function get_name1() {
    let user_name = prompt("Please enter your name : ");
    if(user_name){
        fetch("http://localhost:5000/sendname", {
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