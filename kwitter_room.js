
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyChtHUocTHEk0mOZO23y2wt2RP61fTYlgI",
  authDomain: "kwitter-94075.firebaseapp.com",
  databaseURL: "https://kwitter-94075-default-rtdb.firebaseio.com",
  projectId: "kwitter-94075",
  storageBucket: "kwitter-94075.appspot.com",
  messagingSenderId: "615883047709",
  appId: "1:615883047709:web:86ed078af94c4464d417f4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom()
{
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
  localStorage.setItem("room_name",room_name);
  window.location="Kwitter_page.html";
}


    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("room_name- "+Room_names);
   row="<div class='room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)'>#  "+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;





      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="Kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");

}
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
