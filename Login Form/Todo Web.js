import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc,  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCvFB82TeK-CZhpPwLuuj3V5FfXDpsW9B0",
    authDomain: "sign-up-and-in-7a325.firebaseapp.com",
    projectId: "sign-up-and-in-7a325",
    storageBucket: "sign-up-and-in-7a325.appspot.com",
    messagingSenderId: "184191318961",
    appId: "1:184191318961:web:7eb3d6282a90282e34db90",
    measurementId: "G-SRMHJDFEDM"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.addtodo = async function () {
    let getinp = document.querySelector('#getinp')
    // let getdeltodo = document.querySelector('#deltodo')
    const docRef = await addDoc(collection(db, "todos"), {
        name: getinp.value,
        time: new Date().toLocaleString()
    });
    console.log("Document written with ID: ", docRef.id);

}

function getData() {
    let ul = document.querySelector('#getul')
    onSnapshot(collection(db, 'todos'), (data) => {
        data.docChanges().forEach((newData) => {

            if (newData.type == 'removed') {
                let del = document.getElementById(newData.doc.id)
                del.remove()
            }
            else if(newData.type == 'added') {
                // console.log(newData)
                ul.innerHTML += `
                            <li id=${newData.doc.id}>${newData.doc.data().name} <br> ${newData.doc.data().time} <button onclick="delTodo('${newData.doc.id}')">Delete</button> <button onclick="edit(this,'${newData.doc.id}')">Edit</button></li>
                            `
            }
        })
    })
}
getData()
async function delTodo(id) {
    await deleteDoc(doc(db, "todos", id));
}

async function edit(e,id) {
    let editval = prompt('Enter Edit value')

    e.parentNode.firstChild.nodeValue = editval

    await updateDoc(doc(db, "todos", id), {
        name: editval,
        time: new Date().toLocaleString()
    });
}


// const getul = document.querySelector(".todoList")
// const addLi = document.getElementById("addLi");
// const updLiBtn = document.getElementById("updLi");
// const delAll = document.getElementById("delAll");
// const inputLi = document.getElementById("inp");
// const updLiInp = document.getElementById("updInp");
// let todoList = document.querySelector(".todoList");
// let errorPara = document.querySelector("#errorPara"); // get error paragraph
// let upderrorPara = document.querySelector("#upderrorPara"); // get error paragraph
// const userUid = localStorage.getItem("userUid");
// const ids = [];

// const deltodo = () => {
//     onSnapshot(collection(db, userUid), (data) => {
//         data.docChanges().forEach((todo) => {
//             if (data.size) {
//                 delAll.style.display = "block";
//             } else {
//                 delAll.style.display = "none";
//             }


// delAll.addEventListener("click", async () => {
//     getul.innerHTML = "";
//     for (var i = 0; i < ids.length; i++) {
//         await deleteDoc(doc(db, userUid, ids[i]));
//     }

// })

// async function delAll(id) {
//     await deleteDoc(doc(db, userUid, id));
// }

// let updateli;
// let updateLiId;

// async function editLi(e, id) {
//     let previousTodo = e.parentNode.parentNode.childNodes[1].childNodes[0].textContent;
//     updLiInp.value = previousTodo;

//     updateLi = e;
//     updateLiId = id

// }})
//     })
// }




// Delete All


// window.delTodo = async function () {
//     let getout = document.querySelector('#getout')
//     const docRef = await deleteDoc(collection(db, "todos"), {
//         name: getout.value,
//         time: new Date().toLocaleString()
//     });
//     console.log("Document written with ID: ", docRef.id);

// }
// function getdeltodo() {
//     let ul = document.querySelector('#getout')
//     onSnapshot(collection(db,'todos'), (data) => {
//         data.docChanges().forEach((newData) => {

        //     if (newData.type == 'added') {
        //         let del = document.getElementById(newData.doc.id)
        //         del.remove()
        //     }
        //     else if(newData.type == 'del') {
        //         console.log(newData)
        //         ul.innerHTML += `
        //                     <li id=${newData.doc.id}>${newData.doc.data().name} <br> ${newData.doc.data().time} <button onclick="delTodo('${newData.doc.id}')">Delete</button> <button onclick="edit(this,'${newData.doc.id}')">Edit</button></li>
        //                     `
        //     }
        // })
//     })
// })
// }



window.getData = getData
window.delTodo = delTodo
window.edit = edit
// window.delAll =delAll