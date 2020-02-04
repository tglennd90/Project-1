// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMCtFDFzlzJh6qrWFZ_pqFJ-ELhweBNkY",
    authDomain: "project-1-608e1.firebaseapp.com",
    databaseURL: "https://project-1-608e1.firebaseio.com",
    projectId: "project-1-608e1",
    storageBucket: "project-1-608e1.appspot.com",
    messagingSenderId: "510274083998",
    appId: "1:510274083998:web:422fb226e2251b2f22ef8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

// Globals //
// ============================================= //

    // Element Grabbers //
    // ============================================= //

    // Arrays //
    // ============================================= //

    // Objects //
    // ============================================= //

    // Variables //
    // ============================================= //

// Functions //
// ============================================= //

// Currency Layer API //
// ============================================= //

$.ajax({
  url: "http://apilayer.net/api/live?access_key=7c9557ab7ee90c1af2465e4d909d45a0",
  method: "GET"
}).then(function(response) {
  console.log("-------------------------------");
  console.log("Currency Layer");
  console.log("-------------------------------");
  console.log(response);
});

// Financial Modeling Prep API //
// ============================================= //  

$.ajax({
  url: "https://financialmodelingprep.com/api/v3/majors-indexes/.DJI",
  method: "GET"
}).then(function(response) {
  console.log("-------------------------------");
  console.log("Financial Modeling Prep");
  console.log("-------------------------------");
  console.log(response);
});