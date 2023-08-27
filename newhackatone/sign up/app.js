
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import { getAuth ,createuserwithEmailandpassword, } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBmLBqEsUS5yEYKrCDZvOruWsz3EFdKIDc",
    authDomain: "signup-form-fc6c1.firebaseapp.com",
    projectId: "signup-form-fc6c1",
    storageBucket: "signup-form-fc6c1.appspot.com",
    messagingSenderId: "232234173090",
    appId: "1:232234173090:web:cf7aebac94df8783ae0dfb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  //getting all the objects of html

  var firstname =document.getElementById("firstname")
  var lastname =document.getElementById("lastname")
  var email =document.getElementById("Email")
  var password =document.getElementById("password")

  //making an function to storing data

  window .signup = function(e) {
    e.preventdefult();
    var obj={
        firstname:firstname.value,
        lastname :lastname.value,
        Email :Email.value,
        password :password.value,
    }
    createuserwithEmailandpassword(auth,obj.email,obj.password)
    .then(funtion(success) (
        alert("signup successfuly")
    ))
    .catch(funtion(err))(
        alert("error + err")
    )
    console.log(obj)
  };


  

