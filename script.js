
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkCoZdCRvTj-wnCF7vfFD2VfP87HXcu-8",
    authDomain: "lets-chat-1a5d4.firebaseapp.com",
    databaseURL: "https://lets-chat-1a5d4.firebaseio.com",
    projectId: "lets-chat-1a5d4",
    storageBucket: "lets-chat-1a5d4.appspot.com",
    messagingSenderId: "681891558347",
    appId: "1:681891558347:web:b1cd2079957c8c3c09fc4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// my app

var myname



//form validation

function check(form){
  if(form.pwd.value == "Harsh.1123")
{
 var x = document.getElementById("v");
 if (x.style.display === "none") {
   x.style.display = "block";
 } else {
   x.style.display = "none";
 }

 var y = document.getElementById("ww");
 if (y.style.display === "block") {
   y.style.display = "none";
 } else {
   y.style.display = "block";
 }
 //giving user name
myName= "Harsh";     
   return false;
const Toast = Swal.mixin({
 toast: true,
 position: 'top-end',
 showConfirmButton: false,
 timer: 3000,
 timerProgressBar: true,
 onOpen: (toast) => {
   toast.addEventListener('mouseenter', Swal.stopTimer)
   toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
})

Toast.fire({
 icon: 'success',
 title: '<small>welcome web guru</small><br>You Have Signed in successfully'
});


}
if(form.pwd.value == "Khushi")
{
 var x = document.getElementById("v");
 if (x.style.display === "none") {
   x.style.display = "block";
 } else {
   x.style.display = "none";
 }

 var y = document.getElementById("ww");
 if (y.style.display === "block") {
   y.style.display = "none";
 } else {
   y.style.display = "block";
 }
 //giving user name
myName= "Khushi";     
   return false;
const Toast = Swal.mixin({
 toast: true,
 position: 'top-end',
 showConfirmButton: false,
 timer: 3000,
 timerProgressBar: true,
 onOpen: (toast) => {
   toast.addEventListener('mouseenter', Swal.stopTimer)
   toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
})

Toast.fire({
 icon: 'success',
 title: '<small>welcome web guru</small><br>You Have Signed in successfully'
});
}
}

function sendmessage(){
  //message
  var message = document.getElementById("message").value;
  //save to data base
  firebase.database().ref("messages").push().set({
    "sender": myName,
    "message": message
  });
  //false retrun
  return false;
}
firebase.database().ref("messages").on("child_added",function(snapshot){
 var html="";
 html += "<div>";
    html += "<small><h1>" + snapshot.val().sender + "</h1></small><big><h2>" + snapshot.val().message + "</h2></big>";
 html += "</div>";

 document.getElementById("messages").innerHTML += html; 
 return true;
});
