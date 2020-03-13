//Greeting
name = prompt("Please enter your name:", "guest") // Ask for name
if (name == "null" || name === ""){ // If no name was enter, "guest" will be the input
  name = "guest";
}
welcome = confirm("Hello "+ name + ". Welcome to Tip Calculator."+"\n"+"Wish to continue?") // Welcome statement
if (welcome == false){ // If 'ok', continue. If not, 'thanks' and close window
  alert("Thanks for coming by. Have a good day.");
  window.close();
}

// Calculate tips
function calculate(){
  //Take inputs from HTML
  var billAmount = Number(document.getElementById("billAmount").value)
  var serviceQuality = Number(document.getElementById("serviceQuality").value)
  var servicePercentage = Number(document.getElementById("servicePercentage").value)/100
  var numberOfPeople = Number(document.getElementById("numberOfPeople").value)

  // Alert when no value, value smaller/equal than/to 0, or non-number value is enter
  if (billAmount == "" || billAmount < 0 || billAmount*0 != 0){
    alert("\n"+"Please re-enter values for your bill"+"\n"+"\n"+"Hint: Bill Amount must be a number which is greater than 0")
    return;
  } if ((serviceQuality == 0 && servicePercentage <= 0) || servicePercentage*0 != 0){
    alert("\n"+"Please re-enter values for your service."+"\n"+"\n"+"Hint: Percentage must be a number which is greater than 0")
    return;
  } if (numberOfPeople == 0 || numberOfPeople%1 != 0){ //Only natural number is accepted
    alert("\n"+"Please re-enter values for number of people."+"\n"+"\n"+"Hint: Number of people must be a natural number")
    return;
  }

  // Choose generous percentage
  if (serviceQuality >= servicePercentage){
    total = (billAmount * serviceQuality)/numberOfPeople;
  } else if (serviceQuality < servicePercentage){
    total = (billAmount * servicePercentage)/numberOfPeople;
  }

  // Display the tips section
  if (numberOfPeople == 1){ //"each" is not necessary if one person is paying bill
    document.getElementById("each").style.display = "none";
  } else{ // other than that, "each" is showned next to the tip amount
    document.getElementById("each").style.display = "inline";
  }
  totalA = billAmount + Number(total*numberOfPeople);
  total = total.toFixed(2); //round total to 2 significant figures
  document.getElementById("totalA").innerHTML = totalA; //show tip
  document.getElementById("tip").innerHTML = total; //show tip
}

var x = document.getElementById("demo");
var curLoc = document.getElementById("curLoc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  if (42 <= lat && lat <= 83 && lng <= -141 && lng < -53){
    curLoc.innerHTML = "Canada";
  }
  x.innerHTML = "Latitude: " + lat +
  "<br>Longitude: " + lng;
}

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var map, infoWindow;
     function initMap() {

       map = new google.maps.Map(document.getElementById('googleMap'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 6
       });

       infoWindow = new google.maps.InfoWindow;

       // Try HTML5 geolocation.
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };

           infoWindow.setPosition(pos);
           infoWindow.setContent('Location found.');
           infoWindow.open(map);
           map.setCenter(pos);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
       }
     }

     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
       infoWindow.open(map);
     }
