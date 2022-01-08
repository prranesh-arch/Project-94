const firebaseConfig = {
  apiKey: "AIzaSyCSSggTGbyn_-_2flEDwcfwmHX6iO59xDE",
  authDomain: "project94-1ed42.firebaseapp.com",
  databaseURL: "https://project94-1ed42-default-rtdb.firebaseio.com",
  projectId: "project94-1ed42",
  storageBucket: "project94-1ed42.appspot.com",
  messagingSenderId: "344951059503",
  appId: "1:344951059503:web:398012cc8af73b305342da",
  measurementId: "G-6MTN4LP71V"
};
const app = initializeApp(firebaseConfig);
  function addUser()
  {
      user_name =  document.getElementById("input").value;
      firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
      });
  }