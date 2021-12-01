



function TravelCard(props) {
   
return(
    <div className="travelCard_container">
        <img src={`${props.imageUrl}`}/>
        <h2>{props.title}</h2>
        <h3>{props.location}</h3>
        <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
        <span>{props.startDate} - {props.endDate}</span>
        <p>{props.description}</p>
    </div>

)

}

export default TravelCard