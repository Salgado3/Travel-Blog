import mapPointer from "../images/mapPointer.png"



function TravelCard(props) {

return(
    <div className="travelCard_container">

    <section className="travelCard_section"> 
        <img className="travel_img" src={`${props.imageUrl}`}/>
    </section>

     <section className="travelCard_section"> 
        <h2 className="travel_title">{props.title}</h2>
        <h3 className="travel_location">
            <img className="travel_imgPointer" src={mapPointer}/>
            {props.location}
        <a  className="travel_googleMap"href={`${props.googleMapsUrl}`}>View on Google Maps</a></h3>
        <span className="travel_startDate_endDate">{props.startDate} - {props.endDate}</span>
        <p className="travel_description">{props.description}</p>
    </section>

    </div>

)

}

export default TravelCard