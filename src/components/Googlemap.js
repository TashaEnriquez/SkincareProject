import React from "react";
//import Info from "./Info";
import { Map, Marker } from "pigeon-maps";
import "../styles/Googlemap.css";

const Googlemap = () => {
  return (
    <div className="googlemap">
      <Map height={400} defaultCenter={[52.45735, 13.54081]} defaultZoom={11}>
        <Marker width={50} anchor={[52.45735, 13.54081]} />
      </Map>
    </div>
  );
};
export default Googlemap;
