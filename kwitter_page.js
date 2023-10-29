const firebaseConfig = {
    apiKey: "AIzaSyDRUWKcvY3JWPqE0GdH4XwbhmBoVvb4dEY",
    authDomain: "kwitter-863c1.firebaseapp.com",
    databaseURL: "https://kwitter-863c1-default-rtdb.firebaseio.com",
    projectId: "kwitter-863c1",
    storageBucket: "kwitter-863c1.appspot.com",
    messagingSenderId: "10728662402",
    appId: "1:10728662402:web:812f883c71f05c107bdb9b"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);




user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({

name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value="";

}















































