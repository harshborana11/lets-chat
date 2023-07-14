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

var myName = prompt("Your Name?");

var date = new Date();
var mins = date.getMinutes();
var hours = date.getHours() % 12 || 12;
var time = hours + ":" + mins;

function sendmessage() {
  // document.getElementById("sound1").play();
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

    if (myName === snapshot.val().sender) {
      document.getElementById(snapshot.key).style.display = "block";
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
