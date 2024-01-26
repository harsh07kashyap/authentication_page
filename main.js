const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyDJE21gQR7uzEMYBRQrLBQC7sdgNCbokOs",
  authDomain: "auth-page-21d6e.firebaseapp.com",
  projectId: "auth-page-21d6e",
  storageBucket: "auth-page-21d6e.appspot.com",
  messagingSenderId: "965850370047",
  appId: "1:965850370047:web:1076395730cbe3804161ca"
});
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//    document.querySelector("submit-btn").style.backgroundColor("green")
const signUp=()=>{
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    console.log(email,password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    
    alert("You are Signed Up")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    alert(error.message);
    // ..
  });
}

const signIn=()=>{
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    document.write("You are Signed In")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    alert(error.message);
  });
}