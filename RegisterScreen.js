registerUser = (email, password, confirmPassword, first_name, last_name) => {
    if(password == confirmPassword){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(() => {
            alert.alert('User registered!');
        })
        .catch((error) => {
            alert.alert(error.message);
        })
    }
    } 
    else{
        alert.alert('passowrds dont match!')
    }
};