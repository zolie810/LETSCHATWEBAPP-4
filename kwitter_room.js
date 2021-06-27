var firebaseConfig = {
      apiKey: "AIzaSyAj2NFuTWN4hVh576Pr0dRBdfNwnrfwxFQ",
      authDomain: "my-kwitter-app-e891c.firebaseapp.com",
      projectId: "my-kwitter-app-e891c",
      storageBucket: "my-kwitter-app-e891c.appspot.com",
      messagingSenderId: "829572493516",
      appId: "1:829572493516:web:55f7863f5d42c4b4601269"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });

            //End code
      });
}
getData();


function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
});

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}