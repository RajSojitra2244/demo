import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function SimpleMap(props) {
  const mapStyles = {
    width: '30%',
    height: '50%',
  };

  return (
    <div>
      <Map
        google={props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 21.15, lng: 72.86 }} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQe9g27vb7yeTay6rljoMdHpn1y2RIlPo',
})(SimpleMap);
