function enter_name(){
    let user_name = prompt("Please enter your name : ");
<<<<<<< HEAD
    localStorage.setItem("name", user_name)
=======
    return user_name;
}
function get_name1(){
    let user_name = enter_name();
    if(!user_name){
         alert("Please Enter your name as its necessary for certification");
         return;
    }
    alert("Welcome, " + user_name)

>>>>>>> 1bfbcb0 ("update')
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
