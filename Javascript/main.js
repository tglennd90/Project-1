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

// Calls //
// ============================================= //

// var curLayerKey = "7c9557ab7ee90c1af2465e4d909d45a0";
// var queryURL = "http://www.api.currencylayer.com/live?access_key=a1e6130fab22b5c9988778ce13f12fd3";

$.ajax({
  url: "http://apilayer.net/api/live?access_key=7c9557ab7ee90c1af2465e4d909d45a0",
  method: "GET"
}).then(function(response) {
  console.log(response);
});