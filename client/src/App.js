import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

import { listLogEntries } from "./API";

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3
  });

  //Use Effect With Empty Dependency Array To Run The Function Once After Component Is Mounted
  //Request To Backend
  useEffect(()=>{

    //Immediately Invoked Function Expression As Await Can't Be Used In Useeffect
    (async()=>{
        const logEntries = await listLogEntries();
        console.log(logEntries);
    }) ();
     
  },[]);

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
