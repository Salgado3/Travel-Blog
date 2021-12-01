import Navbar from './components/NavBar';
import TravelCard from './components/TravelCard'
import dataset from "./data"



function App() {

const travel = dataset.map(item =>
  {
      return (
          <TravelCard
              title={item.title}
              location={item.location}
              googleMapsUrl={item.googleMapsUrl}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              imageUrl={item.imageUrl}  
          />
          )
      })
  return (
    <div className="App">
      <Navbar/>
      {travel}
    </div>
  );
}

export default App;
