
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



function addroom()

{
room_name=document.getElementById("room_name").value;
 
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
 
window.location="kwitter_page.html";


}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redrecttoroomname(this.id) '>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redrecttoroomname(name)

{
console.log(name);
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}






