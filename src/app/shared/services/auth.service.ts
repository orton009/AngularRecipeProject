import * as firebase from 'firebase' ;

export class AuthService{

    private token : string ;
    signUp(email : string , password : string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(
            (response) => {
                console.log(response);
            }
        )
        .catch(
            (error) =>{
                console.log(error) ;
            }
        );
    }

    signIn(email : string, password :string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            (response) => {
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token) => {
                        this.token = token ;
                    }
                );
                console.log(response);
            }
        )
        .catch(
            (err) => {
                console.log(err);
            }
        );
    }

    signOut(){
        firebase.auth().signOut() ;
        this.token = null ;
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token) => {
                this.token = token ;
            }
        );
        return this.token ;
    }

    isAuthenticated(){
        return this.token != null ;
    }
}