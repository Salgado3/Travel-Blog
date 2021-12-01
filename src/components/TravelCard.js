



function TravelCard(props) {
   
return(
    <div className="travelCard_container">
        
    <section className="travelCard_section"> 
        <img className="travel_img" src={`${props.imageUrl}`}/>
    </section>

     <section className="travelCard_section"> 
        <h2 className="travel_title">{props.title}</h2>
        <h3 className="travel_location">{props.location}</h3>
        <a  className="travel_googleMap"href={`${props.googleMapsUrl}`}>View on Google Maps</a>
        <span className="travel_startDate">{props.startDate} - {props.endDate}</span>
        <p className="travel_endDate">{props.description}</p>
    </section>

    </div>

)

}

export default TravelCard