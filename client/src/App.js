import React, { useState, useEffect } from 'react';
import ReactMapGL,{ Marker } from 'react-map-gl';

import { listLogEntries } from "./API";

const App = () => {
  
  const [logEntries,setLogEntries] = useState([]);

  //Show The Map
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
        console.log(logEntries)
        //Update The State To Show The Log Entries
        setLogEntries(logEntries);
    }) ();
     
  },[]);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/premkumark18/ck6yqlfze1k3q1iqqjz74phe6'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
      onViewportChange={setViewport}
    >
      {
        logEntries.map(entry=>(
          <Marker 
            key={entry._id}
            latitude={entry.lattitude} 
            longitude={entry.longitude} 
            offsetLeft={-12} 
            offsetTop={-24}
          >
          //Show The Pin For The Location
          <div>
          <svg 
            viewBox="0 0 24 24" 
            className="marker"
            style = {{
              width : '24px',
              height :'24px',
            }}
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
        </Marker>
        ))
      }

    </ReactMapGL>
  )
}

export default App;
