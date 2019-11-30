const searchButton = document.querySelector('[data-action = "search"]');
	   const ul = document.getElementById('cordinates');
	    const temp1 = document.getElementById('temp');
		 const we = document.getElementById('we');
		  const wind = document.getElementById('wind');
	  
	  // const nameOfLocation =  document.querySelector('#search');
	    const nameOfLocation =  document.querySelector('[name=address]');
      let url = "";
	  
const geocoderCredentials = 'https://geocoder.api.here.com/6.2/geocode.json?app_id=c8bjWjXbMNYxhDrHvenu&app_code=BFM4eHXG7wcTGVfMZh_hPA&searchtext=';
function getGeoCordinates(){
let name1 = nameOfLocation.value;	
let strippedLocation = nameOfLocation.value.split(' ').join('+');
 url =  geocoderCredentials + strippedLocation  ;
 //console.log('got here');
 //console.log(url);
 //console.log(strippedLocation);
 check();
 //getWetherConditions();
// console.log('lat  '+getLatitude());
 
 
}
searchButton.addEventListener('click',getGeoCordinates);
//const url = 'https://geocoder.api.here.com/6.2/geocode.json?app_id=c8bjWjXbMNYxhDrHvenu&app_code=BFM4eHXG7wcTGVfMZh_hPA&searchtext=425+W+Randolph+Chicago';

var longitude = 0;
var latitude = 0;
 var map;

  function check(){
  
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
   let results1 = data.Response;
    console.log(results1);
	
	latitude = results1.View[0].Result[0].Location.DisplayPosition.Latitude;
	longitude = results1.View[0].Result[0].Location.DisplayPosition.Longitude;
	/**
	 map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: latitude, lng: longitude},
          zoom: 8
        });
		**/
		
		// Initialize and add the map

  // The location of Uluru
  name1 = {lat: latitude, lng: longitude};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: name1});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: name1, map: map});
		
	
  })
  .catch(function(error) {
    console.log(error);
  }); 
  
  
  let weatherUrl = "";	 
	  //https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22
const openWeatherUrl  = 'https://api.openweathermap.org/data/2.5/weather?';

const lat = '&lat='+latitude;
const lon = '&lon='+longitude; 
const appid = '&appid=ac397eb069378ad690e2c7f4660581e8';
weatherUrl = openWeatherUrl+lat+lon+appid;
console.log(weatherUrl);
fetch(weatherUrl)
.then((resp) => resp.json())
  .then(function(data) {
    let wdata = data.weather;
	let temp = data.main;
	let windata = data.wind;
	console.log(wdata[0].main);
	console.log('temp '+temp.temp);
	
	
    
     
      temp1.innerHTML = 'Temp: '+ temp.temp ;
      
      
     
      we.innerHTML = 'Present Weather: '+ wdata[0].main ;
      wind.innerHTML = 'Wind Speed: '+ windata.speed ;
     
   
	
  })
  .catch(function(error) {
    console.log(error);
  });
 

  
 } 
 