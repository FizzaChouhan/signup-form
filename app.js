var userData =[];
//first take register btn with id
var rBtn = document.getElementById('registerBtn')
//add event listener to the button
rBtn.addEventListener('click', function(){
    //take inputs by id
    var rname = document.getElementById('userName');
    var remail = document.getElementById('userEmail');
    var  rpassword= document.getElementById('userPass');
    //save values in object
    users = {
        name: rname.value,
        email: remail.value,
        password: rpassword.value
        }
        //push object in array
        userData.push(users);
        console.log(userData);

        
        //save values in local storage
        localStorage.setItem('users', JSON.stringify(userData));

        //make empty input box after one details
        rname.value = '';
        remail.value = '';
        rpassword.value = '';
//connect login form
window.location.href="login.html"


   
})
//now connect login form
