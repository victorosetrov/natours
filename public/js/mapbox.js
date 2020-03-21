/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidmlrdG9yb3NldHJvdiIsImEiOiJjazd1ZjUydGYxN2E3M2xvdWh0ZTJ1b2FoIn0._pM4IGidGa-56nUn_ZwF8A';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/viktorosetrov/ck7ufn3rb2cb31ijpkiaz30gw',
    scrollZoom: false
    //   center: [-118.332797, 33.884603],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //Add marker
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
