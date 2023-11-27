import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import {getFirestore,doc,setDoc} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDDnnWOWzcakwk5j78HDU7m2teW5xaBIR0",
    authDomain: "login-form-31f15.firebaseapp.com",
    projectId: "login-form-31f15",
    storageBucket: "login-form-31f15.appspot.com",
    messagingSenderId: "869324969611",
    appId: "1:869324969611:web:d7294ad740cfa82f4f268e",
    measurementId: "G-QFN454B34Y"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
let sbtn = document.querySelector("#sbtn"); 
let errorPara = document.querySelector("#errorPara"); 


sbtn.addEventListener("click", () => {
    let semail = document.querySelector("#semail"); // get email to signin user
    let spassword = document.querySelector("#spassword"); // get password to signin user
    let sname = document.querySelector("#sname");  // get name of a user

    if (sname.value == "") {
        errorPara.innerText = "Please fill name field!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 3000);
    } else {
        // storing data in a array
        let userData = {
            sname: sname.value,
            semail: semail.value,
            spassword: spassword.value
        }
        // creating user with eamil and password
        createUserWithEmailAndPassword(auth, userData.semail, userData.spassword)
            // email value  , password value
            .then(async (userCredential) => {
                const user = userCredential.user; // getting user from firebase
                await setDoc(doc(db, "users", user.uid), {
                    // collection name,   unique id of user
                    ...userData, // setting array in a database
                    userid: user.uid   // also user id in the database
                });
                
                console.log("Document written with ID: ", docRef.id);
                 alert('han signup hogaya')       
                location. href="./Sign upp.html"

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = errorCode.slice(8);     
                const errMessage = errorMessage.replace(/-/g, " ")
                errorPara.innerText = errMessage;
                // .toUpperCase()
                setTimeout(() => {
                    errorPara.innerHTML = "";
                }, 3000);
            });
    }
})
spassword.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        sbtn.click()
    }
})

onAuthStateChanged(auth, (user) => {
    if (user) {
        const userUid = user.uid;
    } else {
        localStorage.removeItem("userUid")
    }
});

if (localStorage.getItem("userUid")) {
    location.href = "Sign upp.html"
};

const loginBtn = document.getElementById('sbtn');
function redirectToOtherPage() {
  window.location.href ="http://127.0.0.1:5500/Sign%20Up.html";
}
loginBtn.addEventListener('click', redirectToOtherPage);


















