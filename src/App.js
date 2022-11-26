import './index.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !==id);
    setTours(newTours)
  }

const fetchTours = async () => {

  try {
    const responce = await fetch(url)
    const tours = await responce.json();
    setLoading(false)
    setTours(tours)
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
}

useEffect(() => {
  fetchTours();
}, [])

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  return (
    <div className="App">
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
    </div>
  );
}

export default App;
