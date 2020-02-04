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

// Currency Converter API //
// ============================================= //

var ccaKey = "20250d43dabf3feedeba";
var from = "EUR";
var to = "USD";

$.ajax({
  url: "https://free.currconv.com/api/v7/convert?q=" + from + "_" + to + "&compact=ultra&apiKey=" + ccaKey,
  method: "GET"
}).then(function(response) {
  console.log(" ");
  console.log("-------------------------------");
  console.log("Currency Converter API");
  console.log("-------------------------------");
  console.log(response);
  
});

// Currency Converter Country List //
// ============================================= //

$.ajax({
  url: "https://free.currconv.com/api/v7/currencies?apiKey=20250d43dabf3feedeba",
  method: "GET"
}).then(function(response) {
  console.log(" ");
  console.log("-------------------------------");
  console.log("Currency Converter Country List");
  console.log("-------------------------------");
  console.log(response);
});

// Financial Modeling Prep API //
// ============================================= //  

$.ajax({
  url: "https://financialmodelingprep.com/api/v3/majors-indexes/.DJI",
  method: "GET"
}).then(function(response) {
  console.log(" ");
  console.log("-------------------------------");
  console.log("Financial Modeling Prep");
  console.log("-------------------------------");
  console.log(response);
});