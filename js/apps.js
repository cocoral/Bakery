

function initMap() {
  var map = new google.maps.Map(document.getElementById('contact__body_us_googleMap'), {
    zoom: 14,
    center: {lat: 43.6483625, lng: -79.4004494},
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: {lat: 43.6483625, lng:-79.4004494},
    map: map,
    title: 'hackeryou!'
  });
}