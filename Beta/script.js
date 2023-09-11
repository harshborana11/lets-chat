// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBkCoZdCRvTj-wnCF7vfFD2VfP87HXcu-8",
  authDomain: "lets-chat-1a5d4.firebaseapp.com",
  databaseURL: "https://lets-chat-1a5d4.firebaseio.com",
  projectId: "lets-chat-1a5d4",
  storageBucket: "lets-chat-1a5d4.appspot.com",
  messagingSenderId: "681891558347",
  appId: "1:681891558347:web:b1cd2079957c8c3c09fc4e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// my app

var input = document.getElementById("message");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    sendmessage();
  }
});
function scrollToBottom() {
  var height = document.body.scrollHeight;
  window.scroll(0, height);
  
}
//var myName = prompt("Your Name?");
var myName = "Harsh";
var date = new Date();
var mins = date.getMinutes();
var hours = date.getHours() % 12 || 12;
var time = hours + ":" + mins;

function sendmessage() {
  document.getElementById("sound").play();
  //message
  var message = document.getElementById("message").value;
  if (message.trim() === "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Bro -_- you need to write somethin to send ",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    firebase.database().ref("messages").push().set({
      sender: myName,
      message: message,
      time: time,
    });
    document.getElementById("message").value = "";
    //false retrun
    return false;
  }
}
firebase
  .database()
  .ref("messages")
  .on("child_added", function (snapshot) {
    var html = "";
    html += "<div class='divPfpNMsg'>";
    html +=
      "<div class='pfp1' id='image-" +
      snapshot.key +
      "' style='background: url(" +
      snapshot.val().sender +
      ".jpeg);    background-repeat: no-repeat; background-size: cover;'></div>";
    html += "<div >";
    html += "<section id='section-" + snapshot.key + "' class='message'>";
    html +=
      "<small><h1>" +
      snapshot.val().sender +
      "</h1></small><big><h2 id='message-" +
      snapshot.key +
      "'><br>" +
      snapshot.val().message +
      "</h2></big>" +
      "<small><h3><br>" +
      snapshot.val().time +
      "</h3></small>";
    html +=
      "<button style='display: none;' id='" +
      snapshot.key +
      "' data-id='" +
      snapshot.key +
      "' onclick='deleteMessage(this);'>";
    html += "<i class='new fa fa-trash' aria-hidden='true'></i>";
    html += "</button>";
    html += "</section>";
    html += "</div>";
    html += "</div>";
    document.getElementById("messages").innerHTML += html;
    scrollToBottom();
    if (myName === snapshot.val().sender) {
      document.getElementById(snapshot.key).style.display = "block";
    } else {
      document.getElementById("sound2").play();
    }
    return true;
  });

function deleteMessage(self) {
  var messageId = self.getAttribute("data-id");
  firebase.database().ref("messages").child(messageId).remove();
}
firebase
  .database()
  .ref("messages")
  .on("child_removed", function (snapshot) {
    document.getElementById("message-" + snapshot.key).innerHTML =
      "This Message Is Deleted";
    function myFunction() {
      document.getElementById("section-" + snapshot.key).style.display = "none";
      document.getElementById("image-" + snapshot.key).style.display = "none";
    }
    setTimeout(myFunction, 3000);
  });
const BG1 = "var(--themeColor1)";
const BG2 = "var(--themeColor2)";

function toggle() {
  document.getElementById("Body").classList.toggle("sakura");
  document.getElementById("Body").classList.toggle("Mountains");
  if (document.getElementById("Body").classList.contains("sakura")) {
    document.querySelector(".Headder").style.background = BG2;
    document.querySelector(".textBoxnight").style.background = BG2;

    document.querySelector(".toggle").style.background = "url(toggleS.svg)";
    document.querySelector(".toggle").style.backgroundRepeat = "no-repeat";
    document.querySelector(".toggle").style.backgroundSize = "contain";
  } else if (document.getElementById("Body").classList.contains("Mountains")) {
    document.querySelector(".Headder").style.background = BG1;
    document.querySelector(".textBoxnight").style.background = BG1;
    document.querySelector(".toggle").style.background = "url(toggle.svg)";
    document.querySelector(".toggle").style.backgroundRepeat = "no-repeat";
    document.querySelector(".toggle").style.backgroundSize = "contain";
  }
}

setTimeout(scrollToBottom(), 6000);
function notifyMe() {
  // Check if notifications are supported.
  if (Notification.prototype.hasOwnProperty("permission")) {
    // Check if permission has been granted.
    if (Notification.permission === "granted") {
      // Create a new notification.
      var notification = new Notification("Hi there!");
    } else {
      // Ask for permission to send notifications.
      Notification.requestPermission().then((permission) => {
        // If the user accepts, create the notification.
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  }
}