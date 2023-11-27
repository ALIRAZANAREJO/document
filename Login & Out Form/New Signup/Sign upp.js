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






















/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDDnnWOWzcakwk5j78HDU7m2teW5xaBIR0",
    authDomain: "login-form-31f15.firebaseapp.com",
    projectId: "login-form-31f15",
    storageBucket: "login-form-31f15.appspot.com",
    messagingSenderId: "869324969611",
    appId: "1:869324969611:web:d7294ad740cfa82f4f268e",
    measurementId: "G-QFN454B34Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script> */






























// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";



// const firebaseConfig = {
//   apiKey: "AIzaSyBU1hAfS6lBhqUEqkojudb9wxeMhfm1KSU",
//   authDomain: "noted-door-402706.firebaseapp.com",
//   projectId: "noted-door-402706",
//   storageBucket: "noted-door-402706.appspot.com",
//   messagingSenderId: "1061156658421",
//   appId: "1:1061156658421:web:a2db8c244c8b3698f2b9bc",
//   measurementId: "G-BN6E8PC088"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

   

// let btn = document.querySelector('#subtn')
// btn.addEventListener('click',()=> {

// let getemail = document.querySelector('#semail')
// let getpass = document.getElementById('spass')



// createUserWithEmailAndPassword(auth, getemail.value, getpass.value)
// .then(async(userCredential) => {

//   const user = userCredential.user;
//   console.log(user)


//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: getemail.value,
//       last: getpass.value,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e); 
//   }
// })
// .catch((error) => {
//  console.log(error)
// });
// })





// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
// import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyBU1hAfS6lBhqUEqkojudb9wxeMhfm1KSU",
//   authDomain: "noted-door-402706.firebaseapp.com",
//   projectId: "noted-door-402706",
//   storageBucket: "noted-door-402706.appspot.com",
//   messagingSenderId: "1061156658421",
//   appId: "1:1061156658421:web:a2db8c244c8b3698f2b9bc",
//   measurementId: "G-BN6E8PC088"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// let btn = document.querySelector('#subtn')

// if (btn) {

//   btn.addEventListener('click', () => {

//     let getemail = document.querySelector('#semail')
//     let getpass = document.getElementById('spass')

//     createUserWithEmailAndPassword(auth, getemail.value, getpass.value)
//       .then(async (userCredential) => {

//         const user = userCredential.user;
//         console.log(user.email)

//         try {
//           const docRef = await addDoc(collection(db, "users"), {
//             first: getemail.value,
//             last: getpass.value,

//           });
//           console.log("Document written with ID: ", docRef.id);
//           alert('han signup hogaya')
//           location.href = './signin.html'
//         }
//         catch (e) {
//           console.error("Error adding document: ", e);
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log('error code ==> ', errorCode)
//         console.log('error message ==> ', errorMessage)
//       });
//   })

// }


// }


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


































// let btn = document.querySelector('#libtn')
// btn.addEventListener('click',()=> {

// let email = document.querySelector('#lemail')
// let password = document.getElementById('lpass')

        
// signInWithEmailAndPassword(auth, email.value, password.value)
//   .then((userCredential) => {

//     const user = userCredential.user;
//     console.log(user)
//   })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// })





// let btn = document.querySelector('#subtn')
// btn.addEventListener('click',()=> {

// let getemail = document.querySelector('#semail')
// let getpass = document.getElementById('spass')


// createUserWithEmailAndPassword(auth, getemail.value, getpass.value)
// .then((userCredential) => {

//   const user = userCredential.user;
//   console.log(user.email)
// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   console.log('error code ==>',errorCode)
//   console.log('error message ==>', errorMessage)
// });
// })




















