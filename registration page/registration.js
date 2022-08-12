function registration() {
    var number = document.getElementById("exampleInputnumber").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var cpassword = document.getElementById("exampleInputPassword2").value;
    // var checkbox = document.getElementById("exampleCheck1").value;

    console.log(email, password);
              
    //Validating the login credentials

    // localStorage.setItem('exampleInputnumber', number);
    localStorage.setItem('RegistrationPageEmail', email);
    localStorage.setItem('RegistrationPagePassword', password);

    if(number && email && password && cpassword ) {
        if(password==cpassword){

            location.href="../login/login.html"
        }
        else{
            alert('password and confirm password must be same');
        }
        
    }
    else{
        alert('Credentials are Missing');
    }

 

    return false;
} 