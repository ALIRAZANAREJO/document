import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore, collection, addDoc, } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

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
const auth = getAuth(app);
const db = getFirestore(app);

let btn = document.querySelector('#sbtn')
  btn.addEventListener('click', () => {

    let getemail = document.querySelector('#semail')
    let getpassword = document.getElementById('spassword')

    createUserWithEmailAndPassword(auth, getemail.value, getpassword.value)
      .then(async (userCredential) => {


        const user = userCredential.user;
        console.log(user.email)

        location.href = 'http://127.0.0.1:5502/Sign%20In.html'
        

     
try {
    const docRef = await addDoc(collection(db, "users"), {
      first: getemail.value,
      midel:getpassword.value,
    
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log('e');
  }
  })
});


      