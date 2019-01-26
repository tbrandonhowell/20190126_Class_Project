// Initialize Firebase
var config = {
    apiKey: "AIzaSyCls2cj7MzM4eUi7NAu9tbhkLSw7slVHpA",
    authDomain: "classproj20190126.firebaseapp.com",
    databaseURL: "https://classproj20190126.firebaseio.com",
    projectId: "classproj20190126",
    storageBucket: "classproj20190126.appspot.com",
    messagingSenderId: "592483104078"
  };
  firebase.initializeApp(config);

// initializing variables
  var name;
  var role;
  var startDate;
  var rate;

database.ref().on("child_add", function(snapshot) {
    console.log(snapshot);
    name = snapshot.val().name;
    role = snapshot.val().role;
    startDate = snapshot.val().startDate;
    rate = snapshot.val().rate;
})

$("#addButton").on("click",function() {
    name = $("#inputName");
    role = $("#inputRole");
    startDate = $("#inputStartDate");
    rate = $("#inputRate");

    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    })
    
});