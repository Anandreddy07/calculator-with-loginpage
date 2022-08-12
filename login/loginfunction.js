function login(){
    var email = document.getElementById('exampleInputEmail1').value;
    var password =document.getElementById('exampleInputPassword1').value;
    // var checkbox =document.getElementById('exampleCheck1').value;

    console.log(email, password);

    //Validating the login credentials
    if(email && password){
                  
                if((localStorage.getItem('RegistrationPageEmail') == email) && (localStorage.getItem('RegistrationPagePassword') == password) ){
                        // window.location.href="../index/index.html"
                    location.href="../home/index.html";
                        
                        
                    }
                    else{
                        alert("Credentials not matching");
                    }
        }
        else{
            alert('Credentials are Missing');
            // print("sdfgsdfgsdf");
            
        }

 

  
     return false
    } 