import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDeZjPwMNYJNb8CuX0RhImcbVkaRi25r4Y",
    authDomain: "talk2maa-5b050.firebaseapp.com",
    projectId: "talk2maa-5b050",
    storageBucket: "talk2maa-5b050.appspot.com",
    messagingSenderId: "177465906093",
    appId: "1:177465906093:web:ee8a74de5111d8adc98724",
    measurementId: "G-18R05PEX3P"
  };

 firebase.initializeApp(firebaseConfig); 
  console.log("insignup1");
document.getElementById ("btn").addEventListener ("click", signIn, false);
console.log("insignup2");
document.getElementById ("btn2").addEventListener ("click", signUp, false);
console.log("insignup3");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("home.html")
    }
})
console.log("insignup4");
function signIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    console.log(email,password)
    const promise =signInWithEmailAndPassword(auth,email,password);
    promise.catch(e => {alert(e)});
    promise.then( e => alert("Logged In successfully"));
    // window.open("https://www.google.com","_self");
}
function signUp(){
     console.log("insignup");
    var name=document.getElementById('sfname').value;
    var email=document.getElementById('seemail').value;
    var password=document.getElementById('slpassword').value;
    
    firebase.auth().createUserWithEmailAndPassword(auth,email,password)
       .then((userCredential)=>{
    var user=userCredential.user;
    })
    .catch((error) => {
       var errorCode = error.code;
    var errorMessage = error.message;
    });
    // createUserWithEmailAndPassword(auth,email,password)
    // .then((userCredential)=>{
    //     var user=userCredential.user;
    //     })
    //     .catch((error) => {
    //        var errorCode = error.code;
    //     var errorMessage = error.message;
    //     });

    
// }

    
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getElementById('fname'),
        email : getElementById('eemail'),
        password : getElementById('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}