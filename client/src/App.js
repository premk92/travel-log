import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/premkumark18/ck6yqlfze1k3q1iqqjz74phe6'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
      onViewportChange={setViewport}
    />
  );
}

export default App;
