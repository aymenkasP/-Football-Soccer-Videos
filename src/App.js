import './App.css';
import axios from 'axios';
import { useEffect ,useState } from 'react';
import MatchesCard from './components/MatchesCard';


function App() {
  
  const [Data, setData] = useState([]);

  useEffect(() => {
    const getData = async ()=> {
      const data = await axios('https://www.scorebat.com/video-api/v1/')

      console.log(data.data)
      setData(data.data)
    }

    getData()
  }, [])

  return (
    <div className="App">
    <MatchesCard data = {Data} />
    </div>
  );
}

export default App;
