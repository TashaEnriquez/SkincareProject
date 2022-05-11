import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import "../styles/Map.css";

const ContactMap = () => {
  const maptilerProvider = maptiler("zbsqHaEzqLI2K2UR2IsJ", "streets");

  return (
    <div className="contactMap">
      <Map
        provider={maptilerProvider}
        dprs={[1, 2]}
        height={300}
        defaultCenter={[52.5186, 13.4081]}
        defaultZoom={11}
      >
        <Marker width={50} anchor={[52.5186, 13.4081]} />
        <ZoomControl />
      </Map>
    </div>
  );
};

export default ContactMap;
