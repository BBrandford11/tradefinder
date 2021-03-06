import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

function Map(props) {
  return (
    <div id="map">
      <MapContainer
        center={[51.0447, -114.0719]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {props.data.map((site, index) => {
          return (
            // console.log(typeof [site.lat.$numberDecimal,  site.lng.$numberDecimal])
            <Marker
              key={site._id}
              position={[site.lat.$numberDecimal, site.lng.$numberDecimal]}
              eventHandlers={{
                click: (e) => {
                  props.setSelectedIndex(index)
                },
              }}
              // onClick={() => props.setSelectedIndex(index)}
              >
              <Popup>
                <h3>{site.address}</h3>
                <img className="photo" src={site.photo} alt="Italian Trulli" />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
