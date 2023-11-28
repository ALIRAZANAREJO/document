
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


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

if (btn) {

  btn.addEventListener('click', () => {

  

    let getemail = document.querySelector('#semail')
    let getpassword = document.getElementById('spassword')

    createUserWithEmailAndPassword(auth, getemail.value, getpassword.value,)
      .then(async (userCredential) => {

        const user = userCredential.user;
        console.log(user.email)

        location.href = 'http://127.0.0.1:5502/Todo%20Web.html'

     
try {
    const docRef = await addDoc(collection(db, "user"), {
      first:getemail.value,
      last:getpassword.value,
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log('error'+e);
  }
  })
});

}



// let btn1 = document.querySelector('#sibtn')
// if (btn1) {

//   btn1.addEventListener('click', () => {

//     let email = document.querySelector('#lemail')
//     let password = document.getElementById('lpass')

//     signInWithEmailAndPassword(auth, email.value, password.value)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user.email)

//         location.href = './welcome.html'
//       })
//       .catch((error) => {
//         console.log(error)
//       });
//   })
// }


// let getBtn = document.querySelector('#show')
// if(getBtn){
  
//   getBtn.addEventListener('click', async () => {
  
//     const hashir = await getDocs(collection(db, "users"));
//     let getDiv = document.getElementById('getusers')

//     hashir.forEach((doc) => {
//       getDiv.innerHTML += `
//       <div>${doc.data().first}</div>
//       <div>${doc.data().last}</div>
//       `
    
//     });
//   })
// }
















