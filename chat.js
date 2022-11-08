// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAWxZxjEzdnn-YFywyvx4gVjWemOFlQFsE",
    authDomain: "letschat-100-fef7e.firebaseapp.com",
    databaseURL: "https://letschat-100-fef7e-default-rtdb.firebaseio.com",
    projectId: "letschat-100-fef7e",
    storageBucket: "letschat-100-fef7e.appspot.com",
    messagingSenderId: "165436337868",
    appId: "1:165436337868:web:d5afcb52a94046fce15c69"
  };
 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



