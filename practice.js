var firebaseConfig = {
    apiKey: "AIzaSyCUrs809gScWFZ8pwpd3eEGgZViT9qQVSE",
    authDomain: "kwitter-b7aea.firebaseapp.com",
    databaseURL: "https://kwitter-b7aea-default-rtdb.firebaseio.com",
    projectId: "kwitter-b7aea",
    storageBucket: "kwitter-b7aea.appspot.com",
    messagingSenderId: "188298425292",
    appId: "1:188298425292:web:215bc3e092d98e7d6e2369"
  };
  

firebase.initializeApp(firebaseConfig);

function adduser(){
    username=document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
     purpose:"addinguser"
     
    });
}