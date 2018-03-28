function myMap() {
  // get geolocation
  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // console.log(position);
        var latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        showCurrentPosition(latlng);
      });
    }
  }
  // display location by reverse geocoding
  function showCurrentPosition(latlng) {
    var geocoder = new google.maps.Geocoder();
    reverseGeocode(geocoder, latlng, printPosition);
    // display position on a map
    map = createMap(document.getElementById("googleMap"), latlng, 15);
    //create a marker
    addMarker(latlng, map);
    // initialize my map listeners
    initListeners(map);
  }

  function reverseGeocode(geocoder, latlng, display) {
    geocoder.geocode({ location: latlng }, function(results, status) {
      if (status === "OK") {
        display(results);
      } else {
        alert("ERROR");
        console.log(status);
      }
    });
  }

  function printPosition(address) {
    // display position in human readible form
    var location = document.getElementById("location");
    if (location.innerHTML) {
      location.innerHTML = "";
    }
    var h2 = document.createElement("h2");
    h2.innerHTML = address[0].formatted_address;
    location.appendChild(h2);
  }

  function createMap(holder, latlng, zoomLevel) {
    return new google.maps.Map(holder, {
      center: latlng,
      zoom: zoomLevel
    });
  }

  // add a marker
  function addMarker(location, map) {
    var newMarker = new google.maps.Marker({
      position: location,
      map: map,
      animation: google.maps.Animation.DROP,
      draggable: true
    });
  }

  // get location from click on map
  // function showNewLocation(latlng, map, addMarker) {
  //   let geocoder = new google.maps.Geocoder();
  //   reverseGeocode(geocoder, latlng, printPosition);
  //   addMarker(latlng, map);
  // }
  document
    .getElementById("locationButton")
    .addEventListener("click", function() {
      getCurrentLocation();
    });

  function initListeners(map) {
    google.maps.event.addListener(map, "click", function(event) {
      console.log(event);
      var latLng = event.latLng;
      // before add marker, get formatted address from location
      // showNewLocation(latLng, map, addMarker);
      // addMarker(event.latLng, map);
      showCurrentPosition(latLng);
    });
  }
}
