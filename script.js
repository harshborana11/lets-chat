
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

var input = document.getElementById("message");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("a").click();
  }
});


//form validation

//first user name

function check(form){
  if(form.pwd.value == "Harsh.1123")
{
 var x = document.getElementById("v");
 if (x.style.display === "none") {
   x.style.display = "block";
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
}
  else if(form.pwd.value == "Yogesh123")
  {
   var x = document.getElementById("v");
   if (x.style.display === "none") {
     x.style.display = "block";
   }
  
   var y = document.getElementById("ww");
   if (y.style.display === "block") {
     y.style.display = "none";
   }
   //giving user name
  myName= "Yogesh";     
     return false;
  }
  else if(form.pwd.value == "20061976")
  {
   var x = document.getElementById("v");
   if (x.style.display === "none") {
     x.style.display = "block";
   }
  
   var y = document.getElementById("ww");
   if (y.style.display === "block") {
     y.style.display = "none";
   }
   //giving user name
  myName= "priyanshu";     
     return false;
  }
    else if(form.pwd.value == "monk11")
  {
   var x = document.getElementById("v");
   if (x.style.display === "none") {
     x.style.display = "block";
   }
  
   var y = document.getElementById("ww");
   if (y.style.display === "block") {
     y.style.display = "none";
   }
   //giving user name
  myName= "monk";     
     return false;
  }
else {
alert ("username is incorrect");
}

}
//another user name







var date = new Date();
var mins = date.getMinutes();
var hours = date.getHours() % 12 || 12;
var time = hours + ":" + mins;


function sendmessage(){
  //message
  var message = document.getElementById("message").value;
  //save to data base
  firebase.database().ref("messages").push().set({
    "sender": myName,
    "message": message,
    "time": time
  });
document.getElementById("message").value = "";
  //false retrun
  return false;
}
firebase.database().ref("messages").on("child_added",function(snapshot){
 var html="";

 html += "<div>";
  html += "<section>";
    html += "<small><h1>" + snapshot.val().sender + "</h1></small><big><h2 id='message-"+ snapshot.key +"'><br>" + snapshot.val().message + "</h2></big>";
    html += "<h3><br>" + snapshot.val().time + "</h3>";
      html += "<button data-id='" + snapshot.key +"' onclick='deleteMessage(this);'>";
      html += "<i class='new fa fa-trash' aria-hidden='true'></i>"
      html += "</button>";
  html += "</section>";
 html += "</div>";

 document.getElementById("messages").innerHTML += html; 

 return true;
});
function deleteMessage(self) {
  var messageId = self.getAttribute("data-id");
  firebase.database().ref("messages").child(messageId).remove();
  firebase.database().ref("messages").on("child_removed", function (snapshot) {
    document.getElementById("message-" + snapshot.key).innerHTML = "This Message Is Deleted";
  });
}

