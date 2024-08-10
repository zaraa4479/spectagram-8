signIn = async (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then (() => {
        this.props.navigation.replace('Dashboard');
     });
     .catch((error) => { alert.alert(error.message)});
        
     }