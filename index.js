var firebaseConfig = {
  apiKey: "AIzaSyC31E5YfIn7JiU3G9C1mba82CqYVGhcVIQ",
  authDomain: "fireweb-522ed.firebaseapp.com",
  databaseURL: "https://fireweb-522ed.firebaseio.com",
  projectId: "fireweb-522ed",
  storageBucket: "fireweb-522ed.appspot.com",
  messagingSenderId: "449056329356",
  appId: "1:449056329356:web:66cfd0fc670cf1bdf375a9"
};

 firebase.initializeApp(firebaseConfig);


  var d = new Date();
  var t = d.getTime();
  var counter = t;
   
  document.getElementById("form").addEventListener("submit",(e)=>{

    var task = document.getElementById("task").value;
    var description = document.getElementById("description").value;
    e.preventDefault();
    createTask(task,description);
    form.reset();

  });

  function createTask(taskName,description){
    console.log(counter);
    counter+=1;
    console.log(counter);
    var task={
        task: taskName,
        id:counter,
        description:description
    }
    let db= firebase.database().ref("tasks/"+counter);
    db.set(task);


  } 
