
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

let firstTime = true;

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;

  marker.setLatLng([latitude, longitude]);
   if (firstTime) {
    map.setView([latitude, longitude], 2);
    firstTime = false;
   }
  

  document.getElementById('lat').textContent = latitude.toFixed(2);
  document.getElementById('lon').textContent = longitude.toFixed(2);
}

