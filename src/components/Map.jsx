import React from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Map = ({data}) => {

   const mapStyles ={
      height:"50vh",
      width: "100%"
   }

   const defaultCenter ={
      lat: data.lat,
      lng: data.lng
   }
//https://maps.googleapis.com/maps/api/geocode/json?address=Gonzalez%20Ortega%20Loreto%20Zacatecas&key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw
   return ( 
      <LoadScript googleMapsApiKey='AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'>
         <GoogleMap 
            mapContainerStyle={mapStyles}
            zoom={9}
            center={defaultCenter}
         >
            <Marker position={defaultCenter} />
         </GoogleMap>
      </LoadScript>
    );
}
 
export default Map;